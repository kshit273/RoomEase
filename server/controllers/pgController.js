const PG = require("../models/pgModel");
const { generateRID } = require("../middleware/ridService");

// GET all PGs
exports.getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find();
    res.json(pgs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch PGs" });
  }
};

// GET PG by ID
exports.getPGById = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id);
    if (!pg) return res.status(404).json({ error: "PG not found" });
    res.json(pg);
  } catch (err) {
    res.status(500).json({ error: "Error getting PG" });
  }
};

const organizeFiles = (files) => {
  const organized = {};
  
  if (!files || !Array.isArray(files)) return organized;
  
  files.forEach(file => {
    if (!organized[file.fieldname]) {
      organized[file.fieldname] = [];
    }
    organized[file.fieldname].push(file);
  });
  
  return organized;
};

const transformFormData = (formData, LID, files = {}) => {
  // Organize files by fieldname
  const organizedFiles = organizeFiles(files);
  
  console.log("Organized files:", Object.keys(organizedFiles)); // Debug log

  // Ensure rooms is an array
  let rooms = formData.rooms;
  if (typeof rooms === 'string') {
    try {
      rooms = JSON.parse(rooms);
    } catch (err) {
      rooms = [];
    }
  }
  
  // Ensure features is an array
  let features = formData.features || [];
  if (typeof features === 'string') {
    try {
      features = JSON.parse(features);
    } catch (err) {
      features = [];
    }
  }

  return {
    RID: "",
    pgName: formData.pgName,
    coverPhoto: organizedFiles.coverPhoto && organizedFiles.coverPhoto[0]
      ? `/uploads/${organizedFiles.coverPhoto[0].filename}`
      : null,
    otherPhotos: organizedFiles.otherPhotos
      ? organizedFiles.otherPhotos.map(p => `/uploads/${p.filename}`)
      : [],
    address: `${formData.address.line1}, ${formData.address.line2}, ${formData.address.landmark}, ${formData.address.city}, ${formData.address.state} - ${formData.address.pin}`,
    description: formData.description,
    amenities: [
      ...(Array.isArray(features) ? features : []), 
      ...(formData.otherFeatures ? 
        formData.otherFeatures.split(',').map(item => {
          const trimmed = item.trim();
          return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1) : '';
        }) : []
      )
    ].filter(Boolean),
    LID,
    gender: formData.pgType, 
    rooms: rooms.map((r, i) => ({
      roomId: r.id?.toString() || i.toString(),
      roomType: r.roomType?.toLowerCase() || '', 
      rent: Number(r.rent) || 0,
      furnished: r.furnished?.toLowerCase() || '', 
      amenities: r.features || [],
      photos: organizedFiles[`roomPhotos_${i}`]
        ? organizedFiles[`roomPhotos_${i}`].map(p => `/uploads/${p.filename}`)
        : [],
      availableFrom: r.available ? new Date(r.availableFrom) : null,
      description: r.description || '',
    })),
    additionalInfo: formData.addInfo,
    rules: formData.rules ? 
      formData.rules.split(',').map(item => {
        const trimmed = item.trim();
        return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1) : '';
      }) : [], 
    foodAvailable: formData.foodAvailable === 'true', 
    foodDescription: formData.foodAvailabilityDesc,
    menu: organizedFiles.menuImage && organizedFiles.menuImage[0]
      ? [`/uploads/${organizedFiles.menuImage[0].filename}`]
      : [],
    selfCookingAllowed: formData.selfCooking === 'true',
    tiffinServiceAvailable: formData.tiffin === 'true',
    plan: "basic",
  };
};

exports.createPG = async (req, res) => {
  try {
    console.log("Files received:", req.files); // Debug log
    console.log("Body received:", req.body); // Debug log
    
    const formData = req.body;
    
    // Parse JSON strings
    if (typeof formData.address === "string") {
      formData.address = JSON.parse(formData.address);
    }
    
    const { address } = formData;

    if (!address || !address.city || !address.areaCode) {
      return res.status(400).json({ error: "City and area are required" });
    }

    const pgData = transformFormData(formData, req.user.id, req.files);
    console.log("Transformed PG data:", pgData); // Debug log
    
    const rid = await generateRID(address.city, address.areaCode);

    const newPG = new PG({
      ...pgData,
      RID: rid,
    });

    await newPG.save();
    res.status(201).json(newPG);
  } catch (err) {
    console.error("Full error:", err);
    res.status(400).json({ error: "Failed to create PG", details: err.message });
  }
};


// PUT update PG
exports.updatePG = async (req, res) => {
  try {
    const updated = await PG.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update PG" });
  }
};

// DELETE PG
exports.deletePG = async (req, res) => {
  try {
    await PG.findByIdAndDelete(req.params.id);
    res.json({ message: "PG deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete PG" });
  }
};
