// // src/data/products.js
// import { 
//   FlaskConical, 
//   Package, 
//   Beaker, 
//   Dna, 
//   Wrench 
// } from 'lucide-react';

// // ---------- 1. Your Full Product Catalog (Pure JavaScript) ----------
// export const categories = [
//   // ==========================================
//   // CATEGORY 1: ANALYTICAL
//   // ==========================================
//   {
//     id: 'analytical',
//     name: 'Analytical Instruments',
//     icon: FlaskConical,
//     categoryImage: '/images/categories/analytical.png',
//     products: [
//       {
//         id: 'analytical-01',
//         name: 'Double single spectro',
//         model: 'BA-200',
//         shortDesc: 'High-precision weighing for quantitative analysis.',
//         specs: ['Capacity: 200g', 'Readability: 0.1mg', 'Internal Calibration'],
//         image: '/images/products/analytical/double_single_spectro.png',
//       },
//       {
//         id: 'analytical-02',
//         name: 'Gas Chromatography',
//         model: 'PH-700',
//         shortDesc: 'Professional pH meter with automatic temperature compensation.',
//         specs: ['Range: -2.00 to 20.00 pH', 'Accuracy: ±0.01 pH', '3-point Calibration'],
//         image: '/images/products/analytical/gas_chromatography.png', 
//       },
//       {
//         id: 'analytical-03',
//         name: 'Isocratic System',
//         model: 'UV-1800',
//         shortDesc: 'Compact double-beam spectrophotometer for routine analysis.',
//         specs: ['Wavelength: 190-1100nm', 'Bandwidth: 1.8nm', 'PC Software Included'],
//         image: '/images/products/analytical/isocratic_system.png',
//       },
//       {
//         id: 'analytical-04',
//         name: 'Micro Volume Spectro',
//         model: 'KF-5',
//         shortDesc: 'Volumetric titrator for precise moisture content determination.',
//         specs: ['Range: 10ppm to 100%', 'Resolution: 0.1µL', 'Touchscreen Interface'],
//         image: '/images/products/analytical/micro_volume_spectro.png',
//       },
//     ],
//   },

//   // ==========================================
//   // CATEGORY 2: CONSUMABLES
//   // ==========================================
//   {
//     id: 'consumables',
//     name: 'Lab Consumables',
//     icon: Package,
//     categoryImage: '/images/categories/consumable.jpg',
//     products: [
//       {
//         id: 'consumables-01',
//         name: 'Glassware',
//         model: 'TIP-1000F',
//         shortDesc: 'Sterile, DNase/RNase free filter tips for contamination-free work.',
//         specs: ['Volume: 1000µL', 'Sterile', 'With Barrier Filter'],
//         image: '/images/products/consumables/glassware.png',
//       },
//       {
//         id: 'consumables-02',
//         name: 'Micropipette',
//         model: 'TUBE-15',
//         shortDesc: 'Graduated, snap-cap tubes for sample storage and centrifugation.',
//         specs: ['Capacity: 1.5mL', 'Pack: 500 units', 'Autoclavable'],
//         image: '/images/products/consumables/metalware.png',
//       },
//       {
//         id: 'consumables-03',
//         name: 'PCR 96-Well Plates',
//         model: 'PCR-96',
//         shortDesc: 'High-quality polypropylene plates for qPCR and standard PCR.',
//         specs: ['Format: 96-well', 'Skirted', 'Optically Clear'],
//         image: '/images/products/consumables/micropipette.png',
//       },
//       {
//         id: 'consumables-04',
//         name: 'Miscellaneous',
//         model: 'PIP-10S',
//         shortDesc: 'Individually wrapped, polystyrene serological pipettes.',
//         specs: ['Volume: 10mL', 'Graduation: 0.1mL', 'Sterile & Non-pyrogenic'],
//         image: '/images/products/consumables/miscellaneous.png',
//       },
//     ],
//   },

//   // ==========================================
//   // CATEGORY 3: GENERAL LAB
//   // ==========================================
//   {
//     id: 'general_lab',
//     name: 'General Lab Equipment',
//     icon: Beaker,
//     categoryImage: '/images/categories/general_lab_p.png',
//     products: [
//       {
//         id: 'general-01',
//         name: 'Hot air Oven',
//         model: 'HS-7',
//         shortDesc: 'Ceramic hotplate with magnetic stirring for general chemistry.',
//         specs: ['Temp Range: RT to 550°C', 'Stirring Speed: 100-1500 RPM', 'Timer Function'],
//         image: '/images/products/general_lab/hot_air_oven.png',
//       },
//       {
//         id: 'general-02',
//         name: 'Muffle Furnace',
//         model: 'VM-300',
//         shortDesc: 'Touch or continuous mixing for tubes and microplates.',
//         specs: ['Speed: 600-2500 RPM', 'Orbit: 4.5mm', 'Includes Cup Head'],
//         image: '/images/products/general_lab/muffle_furnace.png',
//       },
//       {
//         id: 'general-03',
//         name: 'Refrigerated Bath',
//         model: 'WB-20',
//         shortDesc: 'Digital water bath with a stainless steel chamber for samples.',
//         specs: ['Capacity: 20L', 'Temp Range: Ambient+5°C to 100°C', 'Stability: ±0.5°C'],
//         image: '/images/products/general_lab/refrigerated_bath.png',
//       },
//       {
//         id: 'general-04',
//         name: 'Tray Dryer',
//         model: 'C-8',
//         shortDesc: 'General-purpose centrifuge with 8-place fixed-angle rotor.',
//         specs: ['Max Speed: 4,000 RPM', 'Capacity: 8x15ml', 'Digital Display'],
//         image: '/images/products/general_lab/tray_dryer.png',
//       },
//     ],
//   },

//   // ==========================================
//   // CATEGORY 4: LIFE SCIENCE
//   // ==========================================
//   {
//     id: 'life_science',
//     name: 'Life Science Solutions',
//     icon: Dna,
//     categoryImage: '/images/categories/life_science.jpeg',
//     products: [
//       {
//         id: 'lifesci-01',
//         name: 'Bio safety cabinet',
//         model: 'INC-170',
//         shortDesc: 'Optimal cell culture environment with contamination control.',
//         specs: ['Temp: 20-50°C', 'CO2: 0-20%', 'HEPA Class 100', 'Sterilization Cycle'],
//         image: '/images/products/life_science/bio_safety_cabinet.png',
//       },
//       {
//         id: 'lifesci-02',
//         name: 'Deep Freezer',
//         model: 'BSC-1200',
//         shortDesc: 'Microbiological safety cabinet for sterile handling.',
//         specs: ['Protection Level: Class II A2', 'Width: 1200mm', 'UV Timer'],
//         image: '/images/products/life_science/deep_freezer.png',
//       },
//       {
//         id: 'lifesci-03',
//         name: 'Fume Hood',
//         model: 'Z-4K',
//         shortDesc: '4K camera-equipped inverted scope for live-cell imaging.',
//         specs: ['Magnification: 100x-600x', 'Phase Contrast', '4K HDMI Output'],
//         image: '/images/products/life_science/fume_hood.png',
//       },
//       {
//         id: 'lifesci-04',
//         name: 'Incubators',
//         model: 'CC-100',
//         shortDesc: 'Fast, accurate cell viability and count analysis.',
//         specs: ['Range: 1x10⁴ to 1x10⁷ cells/mL', 'Viability Dye', 'USB Export'],
//         image: '/images/products/life_science/incubators.png',
//       },
//     ],
//   },

//   // ==========================================
//   // CATEGORY 5: SPECIAL APPLICATIONS
//   // ==========================================
//   {
//     id: 'special_applications',
//     name: 'Special Applications',
//     icon: Wrench,
//     categoryImage: '/images/categories/special_app.png',
//     products: [
//       {
//         id: 'special-01',
//         name: 'Vertical Autoclave Sterilizer AS-50L',
//         model: 'AS-50L',
//         shortDesc: 'High-pressure steam sterilizer for lab waste and equipment.',
//         specs: ['Capacity: 50L', 'Max Temp: 134°C', 'Pressure: 0.22MPa', 'Digital PID'],
//         image: '/images/products/special_applications/battery_cycler.png',
//       },
//       {
//         id: 'special-02',
//         name: 'Electro Chemical Workstation.png',
//         model: 'FD-6',
//         shortDesc: 'Lyophilization unit for preserving sensitive biological samples.',
//         specs: ['Condenser Temp: -55°C', 'Capacity: 6L', 'Stainless Steel Chamber'],
//         image: '/images/products/special_applications/electro_chemical_workstation.png',
//       },
//       {
//         id: 'special-03',
//         name: 'Glave Box',
//         model: 'RE-200',
//         shortDesc: 'Efficient solvent removal with digital speed and temp control.',
//         specs: ['Speed: 20-280 RPM', 'Temp: RT to 100°C', 'Vertical Condenser'],
//         image: '/images/products/special_applications/glave_box.png',
//       },
//       {
//         id: 'special-04',
//         name: 'Micro Ball Mill',
//         model: 'MF-1200',
//         shortDesc: 'High-temperature ashing furnace for material testing.',
//         specs: ['Max Temp: 1200°C', 'Chamber Volume: 3.5L', 'Programmable Ramp'],
//         image: '/images/products/special_applications/micro_ball_mill.png',
//       },
//     ],
//   },
// ];

// // ---------- 2. Helper function to find a product by its ID ----------
// export const getProductById = (id) => {
//   for (const category of categories) {
//     const found = category.products.find((p) => p.id === id);
//     if (found) return found;
//   }
//   return undefined;
// };

// // ---------- 3. Helper function to get a category by its ID ----------
// export const getCategoryById = (id) => {
//   return categories.find((cat) => cat.id === id);
// };





//src/data/products.js
import { 
  FlaskConical, 
  Package, 
  Beaker, 
  Dna, 
  Wrench 
} from 'lucide-react';

// ---------- 1. Your Full Product Catalog (with SEO Slugs) ----------
export const categories = [
  // ==========================================
  // CATEGORY 1: ANALYTICAL
  // ==========================================
  {
    id: 'analytical',
    name: 'Analytical Instruments',
    icon: FlaskConical,
    categoryImage: '/images/categories/analytical.png',
    products: [
      {
        id: 'analytical-01',
        slug: 'double-single-spectro',        // <-- NEW SEO SLUG
        name: 'Double single spectro',
        model: 'BA-200',
        shortDesc: 'High-precision weighing for quantitative analysis.',
        specs: ['Capacity: 200g', 'Readability: 0.1mg', 'Internal Calibration'],
        image: '/images/products/analytical/double_single_spectro.png',
      },
      {
        id: 'analytical-02',
        slug: 'gas-chromatography',
        name: 'Gas Chromatography',
        model: 'PH-700',
        shortDesc: 'Professional pH meter with automatic temperature compensation.',
        specs: ['Range: -2.00 to 20.00 pH', 'Accuracy: ±0.01 pH', '3-point Calibration'],
        image: '/images/products/analytical/gas_chromatography.png',
      },
      {
        id: 'analytical-03',
        slug: 'isocratic-system',
        name: 'Isocratic System',
        model: 'UV-1800',
        shortDesc: 'Compact double-beam spectrophotometer for routine analysis.',
        specs: ['Wavelength: 190-1100nm', 'Bandwidth: 1.8nm', 'PC Software Included'],
        image: '/images/products/analytical/isocratic_system.png',
      },
      {
        id: 'analytical-04',
        slug: 'micro-volume-spectro',
        name: 'Micro Volume Spectro',
        model: 'KF-5',
        shortDesc: 'Volumetric titrator for precise moisture content determination.',
        specs: ['Range: 10ppm to 100%', 'Resolution: 0.1µL', 'Touchscreen Interface'],
        image: '/images/products/analytical/micro_volume_spectro.png',
      },
    ],
  },

  // ==========================================
  // CATEGORY 2: CONSUMABLES
  // ==========================================
  {
    id: 'consumables',
    name: 'Lab Consumables',
    icon: Package,
    categoryImage: '/images/categories/consumable.jpg',
    products: [
      {
        id: 'consumables-01',
        slug: 'glassware',
        name: 'Glassware',
        model: 'TIP-1000F',
        shortDesc: 'Sterile, DNase/RNase free filter tips for contamination-free work.',
        specs: ['Volume: 1000µL', 'Sterile', 'With Barrier Filter'],
        image: '/images/products/consumables/glassware.png',
      },
      {
        id: 'consumables-02',
        slug: 'micropipette',
        name: 'Micropipette',
        model: 'TUBE-15',
        shortDesc: 'Graduated, snap-cap tubes for sample storage and centrifugation.',
        specs: ['Capacity: 1.5mL', 'Pack: 500 units', 'Autoclavable'],
        image: '/images/products/consumables/metalware.png',
      },
      {
        id: 'consumables-03',
        slug: 'pcr-96-well-plates',
        name: 'PCR 96-Well Plates',
        model: 'PCR-96',
        shortDesc: 'High-quality polypropylene plates for qPCR and standard PCR.',
        specs: ['Format: 96-well', 'Skirted', 'Optically Clear'],
        image: '/images/products/consumables/micropipette.png',
      },
      {
        id: 'consumables-04',
        slug: 'miscellaneous',
        name: 'Miscellaneous',
        model: 'PIP-10S',
        shortDesc: 'Individually wrapped, polystyrene serological pipettes.',
        specs: ['Volume: 10mL', 'Graduation: 0.1mL', 'Sterile & Non-pyrogenic'],
        image: '/images/products/consumables/miscellaneous.png',
      },
    ],
  },

  // ==========================================
  // CATEGORY 3: GENERAL LAB
  // ==========================================
  {
    id: 'general_lab',
    name: 'General Lab Equipment',
    icon: Beaker,
    categoryImage: '/images/categories/general_lab_p.png',
    products: [
      {
        id: 'general-01',
        slug: 'hot-air-oven',
        name: 'Hot air Oven',
        model: 'HS-7',
        shortDesc: 'Ceramic hotplate with magnetic stirring for general chemistry.',
        specs: ['Temp Range: RT to 550°C', 'Stirring Speed: 100-1500 RPM', 'Timer Function'],
        image: '/images/products/general_lab/hot_air_oven.png',
      },
      {
        id: 'general-02',
        slug: 'muffle-furnace',
        name: 'Muffle Furnace',
        model: 'VM-300',
        shortDesc: 'Touch or continuous mixing for tubes and microplates.',
        specs: ['Speed: 600-2500 RPM', 'Orbit: 4.5mm', 'Includes Cup Head'],
        image: '/images/products/general_lab/muffle_furnace.png',
      },
      {
        id: 'general-03',
        slug: 'refrigerated-bath',
        name: 'Refrigerated Bath',
        model: 'WB-20',
        shortDesc: 'Digital water bath with a stainless steel chamber for samples.',
        specs: ['Capacity: 20L', 'Temp Range: Ambient+5°C to 100°C', 'Stability: ±0.5°C'],
        image: '/images/products/general_lab/refrigerated_bath.png', // <-- Fixed trailing spaces
      },
      {
        id: 'general-04',
        slug: 'tray-dryer',
        name: 'Tray Dryer',
        model: 'C-8',
        shortDesc: 'General-purpose centrifuge with 8-place fixed-angle rotor.',
        specs: ['Max Speed: 4,000 RPM', 'Capacity: 8x15ml', 'Digital Display'],
        image: '/images/products/general_lab/tray_dryer.png',
      },
    ],
  },

  // ==========================================
  // CATEGORY 4: LIFE SCIENCE
  // ==========================================
  {
    id: 'life_science',
    name: 'Life Science Solutions',
    icon: Dna,
    categoryImage: '/images/categories/life_science.jpeg',
    products: [
      {
        id: 'lifesci-01',
        slug: 'bio-safety-cabinet',
        name: 'Bio safety cabinet',
        model: 'INC-170',
        shortDesc: 'Optimal cell culture environment with contamination control.',
        specs: ['Temp: 20-50°C', 'CO2: 0-20%', 'HEPA Class 100', 'Sterilization Cycle'],
        image: '/images/products/life_science/bio_safety_cabinet.png',
      },
      {
        id: 'lifesci-02',
        slug: 'deep-freezer',
        name: 'Deep Freezer',
        model: 'BSC-1200',
        shortDesc: 'Microbiological safety cabinet for sterile handling.',
        specs: ['Protection Level: Class II A2', 'Width: 1200mm', 'UV Timer'],
        image: '/images/products/life_science/deep_freezer.png',
      },
      {
        id: 'lifesci-03',
        slug: 'fume-hood',
        name: 'Fume Hood',
        model: 'Z-4K',
        shortDesc: '4K camera-equipped inverted scope for live-cell imaging.',
        specs: ['Magnification: 100x-600x', 'Phase Contrast', '4K HDMI Output'],
        image: '/images/products/life_science/fume_hood.png',
      },
      {
        id: 'lifesci-04',
        slug: 'incubators',
        name: 'Incubators',
        model: 'CC-100',
        shortDesc: 'Fast, accurate cell viability and count analysis.',
        specs: ['Range: 1x10⁴ to 1x10⁷ cells/mL', 'Viability Dye', 'USB Export'],
        image: '/images/products/life_science/incubators.png', // <-- Fixed trailing spaces
      },
    ],
  },

  // ==========================================
  // CATEGORY 5: SPECIAL APPLICATIONS
  // ==========================================
  {
    id: 'special_applications',
    name: 'Special Applications',
    icon: Wrench,
    categoryImage: '/images/categories/special_app.png',
    products: [
      {
        id: 'special-01',
        slug: 'vertical-autoclave-sterilizer-as-50l',
        name: 'Vertical Autoclave Sterilizer AS-50L',
        model: 'AS-50L',
        shortDesc: 'High-pressure steam sterilizer for lab waste and equipment.',
        specs: ['Capacity: 50L', 'Max Temp: 134°C', 'Pressure: 0.22MPa', 'Digital PID'],
        image: '/images/products/special_applications/battery_cycler.png',
      },
      {
        id: 'special-02',
        slug: 'electro-chemical-workstation', // <-- Fixed: removed .png from slug and name
        name: 'Electrochemical Workstation',  // <-- Fixed: removed .png
        model: 'FD-6',
        shortDesc: 'Lyophilization unit for preserving sensitive biological samples.',
        specs: ['Condenser Temp: -55°C', 'Capacity: 6L', 'Stainless Steel Chamber'],
        image: '/images/products/special_applications/electro_chemical_workstation.png',
      },
      {
        id: 'special-03',
        slug: 'glave-box',
        name: 'Glave Box',
        model: 'RE-200',
        shortDesc: 'Efficient solvent removal with digital speed and temp control.',
        specs: ['Speed: 20-280 RPM', 'Temp: RT to 100°C', 'Vertical Condenser'],
        image: '/images/products/special_applications/glave_box.png',
      },
      {
        id: 'special-04',
        slug: 'micro-ball-mill',
        name: 'Micro Ball Mill',
        model: 'MF-1200',
        shortDesc: 'High-temperature ashing furnace for material testing.',
        specs: ['Max Temp: 1200°C', 'Chamber Volume: 3.5L', 'Programmable Ramp'],
        image: '/images/products/special_applications/micro_ball_mill.png',
      },
    ],
  },
];

// ---------- 2. Helper function to find a product by its SLUG (for Option B) ----------
export const getProductBySlug = (slug) => {
  for (const category of categories) {
    const found = category.products.find((p) => p.slug === slug);
    if (found) return found;
  }
  return undefined;
};

// ---------- 3. Helper function to find a product by its ID (keep for backup) ----------
export const getProductById = (id) => {
  for (const category of categories) {
    const found = category.products.find((p) => p.id === id);
    if (found) return found;
  }
  return undefined;
};

// ---------- 4. Helper function to get a category by its ID ----------
export const getCategoryById = (id) => {
  return categories.find((cat) => cat.id === id);
};

// ---------- 5. Helper function to get a category by a product's slug ----------
export const getCategoryByProductSlug = (slug) => {
  for (const category of categories) {
    const found = category.products.find((p) => p.slug === slug);
    if (found) return category;
  }
  return undefined;
};