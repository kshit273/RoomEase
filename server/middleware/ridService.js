const crypto = require("crypto");
const PG = require("../models/pgModel");

const generateUniqueHash = () => {
  return crypto.randomBytes(3).toString("hex"); // e.g., bc51ed
};

const generateRID = async (cityName, areaCode) => {
  if (!cityName || !areaCode) {
    throw new Error("City and nearestArea are required to generate RID");
  }

  // City → master code
  let finalCityCode = "";
  switch (cityName.toLowerCase()) {
    case "dehradun":
      finalCityCode = "DEH";
      break;
    case "gurugram":
      finalCityCode = "GUR";
      break;
    case "noida":
      finalCityCode = "NOI";
      break;
    case "delhi":
      finalCityCode = "DEL";
      break;
    case "roorkee":
      finalCityCode = "ROO";
      break;
    default:
      throw new Error(`City '${cityName}' not supported`);
  }

  // Ensure unique RID
  let rid, exists = true;
  while (exists) {
    rid = `${finalCityCode}${areaCode}${generateUniqueHash()}`;
    exists = await PG.findOne({ RID: rid });
  }

  return rid;
};

module.exports = { generateRID };
