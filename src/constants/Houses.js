const Houses = [
  {
    RID: "DEHDITbc51ed",
    head: "PG near DIT UNIVERSITY",
    imgPath: "/images/house-imgs/house.jpg",
    desc: "from ₹8,000/month",
    description:
      "Welcome to ComfortNest PG, your ideal home away from home! Located in the heart of the city, just a 5-minute walk from major colleges and tech hubs, this PG blends comfort, safety, and convenience. We offer fully furnished rooms with high-speed Wi-Fi, daily housekeeping, and nutritious home-cooked meals. Whether you're a student or a working professional, our peaceful environment, 24/7 security, and friendly community make it the perfect place to live, learn, and grow. Come experience hassle-free living with all modern amenities under one roof!",
    isVerified: 1,
    review: 3.9,
    extras: [
      "No entry and exit after 10:00 pm",
      "No smoking or drinking allowed",
      "No permanent changes (nailing, painting walls, etc.) without permission",
      "Do not damage PG property (furniture, walls, electricals, etc.).",
      "No overnight guests allowed.",
    ],
  },
  {
    RID: "NOISEC7eb4aa",
    head: "Affordable PG in Sector 62 Noida",
    imgPath: "./images/house-imgs/house7.jpg",
    desc: "from ₹6,500/month",
    description:
      "A budget-friendly PG located in Sector 62, Noida. Enjoy easy access to public transport, nearby IT parks, and shopping centers. The property offers clean, well-ventilated rooms, daily cleaning, and a secure environment for students and professionals.",
    isVerified: 0,
    review: 3.2,
    extras: [
      "No entry and exit after 10:00 pm",
      "No smoking or drinking allowed",
      "No permanent changes (nailing, painting walls, etc.) without permission",
      "Do not damage PG property (furniture, walls, electricals, etc.).",
      "No overnight guests allowed.",
    ],
  },
  {
    RID: "GURMG c68efd",
    head: "Cozy Room near MG Road",
    imgPath: "./images/house-imgs/house18.jpg",
    desc: "from ₹9,000/month",
    description:
      "Stay close to the action at MG Road with this cozy PG. Perfect for working professionals, it features modern interiors, high-speed internet, and a peaceful neighborhood. Walk to the metro and major offices in minutes.",
    isVerified: 1,
    review: 4.1,
    extras: [
      "No entry and exit after 10:00 pm",
      "No smoking or drinking allowed",
      "No permanent changes (nailing, painting walls, etc.) without permission",
      "Do not damage PG property (furniture, walls, electricals, etc.).",
      "No overnight guests allowed.",
    ],
  },
  {
    RID: "PUNCENadd957",
    head: "Studio Room in Pune",
    imgPath: "./images/house-imgs/house22.jpg",
    desc: "from ₹12,000/month",
    description:
      "A stylish studio PG in Pune’s central area. Enjoy privacy, a compact kitchenette, and proximity to major colleges and business hubs. Ideal for students and solo professionals seeking comfort and convenience.",
    isVerified: 0,
    review: 4.6,
  },
  {
    RID: "GURDLF10e38d",
    head: "Shared PG near DLF Cyber Hub",
    imgPath: "./images/house-imgs/house15.jpg",
    desc: "from ₹7,000/month",
    description:
      "Affordable shared accommodation just steps from DLF Cyber Hub. The PG offers spacious rooms, regular cleaning, and a friendly community. Perfect for those working in Gurgaon’s business district.",
    isVerified: 1,
    review: 3.7,
  },
  {
    RID: "DELSAKa4aaf9",
    head: "Spacious Room in Saket",
    imgPath: "./images/house-imgs/house4.jpg",
    desc: "from ₹10,000/month",
    description:
      "Live in the heart of Saket with this spacious PG. Enjoy large rooms, ample storage, and easy access to malls, parks, and metro stations. A great choice for students and professionals alike.",
    isVerified: 1,
    review: 4.3,
  },
  {
    RID: "BANCENfa17ea",
    head: "Modern PG in Bangalore",
    imgPath: "./images/house-imgs/house12.jpg",
    desc: "from ₹11,000/month",
    description:
      "Experience modern living in Bangalore with this fully furnished PG. Features include Wi-Fi, laundry, and a vibrant community. Located near tech parks and major transit routes.",
    isVerified: 0,
    review: 3.5,
  },
  {
    RID: "NOICIT80e5d6",
    head: "Furnished Room in Dehradun",
    imgPath: "./images/house-imgs/house29.jpg",
    desc: "from ₹6,000/month",
    description:
      "A well-furnished PG in Dehradun’s peaceful Clement Town. Enjoy a serene environment, daily housekeeping, and proximity to shopping and educational institutions.",
    isVerified: 1,
    review: 4.0,
  },
  {
    RID: "DELROHebe203",
    head: "Budget PG in Rohini",
    imgPath: "./images/house-imgs/house9.jpg",
    desc: "from ₹5,500/month",
    description:
      "This budget PG in Rohini offers value for money with basic amenities, clean rooms, and a safe locality. Close to metro stations and local markets.",
    isVerified: 0,
    review: 2.9,
  },
  {
    RID: "NOIRAJ49ba4f",
    head: "Room near Rajiv Chowk Metro",
    imgPath: "./images/house-imgs/house21.jpg",
    desc: "from ₹9,500/month",
    description:
      "Stay at the center of Delhi with this PG near Rajiv Chowk. Enjoy quick access to Connaught Place, metro connectivity, and a lively neighborhood.",
    isVerified: 1,
    review: 4.4,
  },
  {
    RID: "DELCONa05b3c",
    head: "Luxury PG in Connaught Place",
    imgPath: "./images/house-imgs/house11.jpg",
    desc: "from ₹14,000/month",
    description:
      "A luxury PG in Connaught Place with premium furnishings, daily housekeeping, and all modern amenities. Perfect for those who want to live in style in the city center.",
    isVerified: 1,
    review: 4.8,
  },
  {
    RID: "DELKAR460774",
    head: "PG for Girls in Karol Bagh",
    imgPath: "./images/house-imgs/house17.jpg",
    desc: "from ₹8,500/month",
    description:
      "Safe and secure girls’ PG in Karol Bagh. Features include CCTV, nutritious meals, and easy access to shopping and metro. Ideal for students and working women.",
    isVerified: 0,
    review: 3.6,
  },
  {
    RID: "DELDELaffb3f",
    head: "Room near Delhi University",
    imgPath: "./images/house-imgs/house2.jpg",
    desc: "from ₹7,000/month",
    description:
      "A student-friendly PG near Delhi University. Enjoy a study-friendly environment, Wi-Fi, and proximity to campus and cafes.",
    isVerified: 1,
    review: 4.1,
  },
  {
    RID: "NOILAX011fd9",
    head: "AC Room in Laxmi Nagar",
    imgPath: "./images/house-imgs/house14.jpg",
    desc: "from ₹9,500/month",
    description:
      "Beat the heat with this AC PG in Laxmi Nagar. Spacious rooms, regular cleaning, and close to coaching centers and metro.",
    isVerified: 0,
    review: 3.3,
  },
  {
    RID: "DELHAU41563c",
    head: "PG near Hauz Khas",
    imgPath: "./images/house-imgs/house28.jpg",
    desc: "from ₹8,000/month",
    description:
      "A lively PG near Hauz Khas, perfect for students and young professionals. Enjoy the vibrant social scene, parks, and easy metro access.",
    isVerified: 1,
    review: 4.7,
  },
  {
    RID: "DELSOU1c73d9",
    head: "Shared Room in South Delhi",
    imgPath: "./images/house-imgs/house23.jpg",
    desc: "from ₹7,200/month",
    description:
      "Affordable shared accommodation in South Delhi. Clean rooms, friendly roommates, and a safe neighborhood make this a great choice.",
    isVerified: 0,
    review: 3.0,
  },
  {
    RID: "DELJAN645459",
    head: "Single Room in Janakpuri",
    imgPath: "./images/house-imgs/house5.jpg",
    desc: "from ₹10,500/month",
    description:
      "Enjoy privacy and comfort in this single room PG in Janakpuri. Close to metro, markets, and parks.",
    isVerified: 1,
    review: 4.2,
  },
  {
    RID: "NOIUTTb8ce4d",
    head: "Room in Uttam Nagar",
    imgPath: "./images/house-imgs/house8.jpg",
    desc: "from ₹6,800/month",
    description:
      "A budget PG in Uttam Nagar with all basic amenities. Well-connected by metro and bus routes.",
    isVerified: 0,
    review: 2.7,
  },
  {
    RID: "DELPIT4a9e78",
    head: "Girls PG in Pitampura",
    imgPath: "./images/house-imgs/house27.jpg",
    desc: "from ₹9,800/month",
    description:
      "Girls-only PG in Pitampura with secure entry, home-cooked meals, and a supportive environment. Close to colleges and shopping.",
    isVerified: 1,
    review: 4.0,
  },
  {
    RID: "DELRAJa2668e",
    head: "PG in Rajouri Garden",
    imgPath: "./images/house-imgs/house30.jpg",
    desc: "from ₹7,900/month",
    description:
      "A well-maintained PG in Rajouri Garden. Enjoy easy access to malls, eateries, and public transport.",
    isVerified: 0,
    review: 3.4,
  },
  {
    RID: "DEHGRA2dedf3",
    head: "PG near Graphic Era",
    imgPath: "./images/house-imgs/house10.jpg",
    desc: "from ₹6,500/month",
    description:
      "Located near Graphic Era University, this PG is ideal for students. Peaceful surroundings, Wi-Fi, and regular cleaning included.",
    isVerified: 1,
    review: 4.5,
  },
  {
    RID: "DEHISBf76856",
    head: "Room near ISBT Dehradun",
    imgPath: "./images/house-imgs/house13.jpg",
    desc: "from ₹8,000/month",
    description:
      "Conveniently located near ISBT, this PG offers quick access to transport, clean rooms, and a friendly atmosphere.",
    isVerified: 0,
    review: 3.1,
  },
  {
    RID: "NOIPRE411cbd",
    head: "Room near Prem Nagar",
    imgPath: "./images/house-imgs/house24.jpg",
    desc: "from ₹5,500/month",
    description:
      "Affordable PG near Prem Nagar, Dehradun. Ideal for students, with all essential amenities and a peaceful environment.",
    isVerified: 1,
    review: 3.8,
  },
  {
    RID: "DEHRAJeb8b39",
    head: "PG near Rajpur Road",
    imgPath: "./images/house-imgs/house6.jpg",
    desc: "from ₹7,800/month",
    description:
      "Stay close to Rajpur Road with this comfortable PG. Enjoy easy access to cafes, shops, and public transport.",
    isVerified: 1,
    review: 4.6,
  },
  {
    RID: "DEHBAL14b20c",
    head: "Room near Ballupur",
    imgPath: "./images/house-imgs/house16.jpg",
    desc: "from ₹6,000/month",
    description:
      "A cozy PG near Ballupur, Dehradun. Features include Wi-Fi, daily cleaning, and a friendly landlord.",
    isVerified: 0,
    review: 3.3,
  },
  {
    RID: "DEHCLOcd5f86",
    head: "Single Room near Clock Tower",
    imgPath: "./images/house-imgs/house20.jpg",
    desc: "from ₹7,500/month",
    description:
      "Single occupancy PG near Clock Tower, Dehradun. Walk to markets, eateries, and major bus stops.",
    isVerified: 1,
    review: 4.0,
  },
  {
    RID: "DEHEC 0a4560",
    head: "PG near EC Road",
    imgPath: "./images/house-imgs/house19.jpg",
    desc: "from ₹8,200/month",
    description:
      "Modern PG near EC Road with all amenities. Spacious rooms, high-speed internet, and a peaceful environment.",
    isVerified: 0,
    review: 3.7,
  },
  {
    RID: "DELVASbed996",
    head: "Room in Vasant Vihar",
    imgPath: "./images/house-imgs/house25.jpg",
    desc: "from ₹9,000/month",
    description:
      "Live in Vasant Vihar with this well-furnished PG. Enjoy a prime location, security, and all essential facilities.",
    isVerified: 1,
    review: 4.2,
  },
  {
    RID: "NOIJAK56a797",
    head: "PG in Jakhan",
    imgPath: "./images/house-imgs/house26.jpg",
    desc: "from ₹6,900/month",
    description:
      "Affordable PG in Jakhan, Dehradun. Clean rooms, Wi-Fi, and a supportive community for students and professionals.",
    isVerified: 0,
    review: 3.0,
  },
  {
    RID: "DEHKAUfb8e1d",
    head: "Affordable Room near Kaulagarh",
    imgPath: "./images/house-imgs/house3.jpg",
    desc: "from ₹5,800/month",
    description:
      "Budget-friendly room near Kaulagarh. Ideal for students and professionals seeking affordable accommodation with essential amenities.",
    isVerified: 0,
    review: 3.5,
  },
];

export { Houses };
