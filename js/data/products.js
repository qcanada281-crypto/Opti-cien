// Opti-Look Featured Products Catalog with Real Studio Photography
// Load from localStorage first, then use default products
const defaultProducts = [
  {
    id: 'aster-optical',
    name: 'Aster Optical',
    category: 'Vue & Lumière Bleue',
    categoryEn: 'Optical & Blue Light',
    categoryAr: 'نظارة طبية وحماية',
    price: 1450,
    originalPrice: 2200,
    discount: '-34%',
    isNew: true,
    isBestseller: true,
    shape: 'Pantoscope / Ronde',
    material: 'Acétate Mazzucchelli & Titane',
    rating: 4.9,
    reviewsCount: 128,
    image: './images/a-close-up-photograph-of-elegant-eyeglas_iL8JZtXgRIiLhdcGUL2Odw_-uOlvARWST-hSO0OCTlfKg.png',
    description: 'Une monture iconique aux lignes architecturales douces, conçue pour un port prolongé et une clarté optimale.',
    colors: [
      { name: 'Turquoise Translucide', hex: '#36C6C9', active: true },
      { name: 'Noir Obsidienne', hex: '#0F172A', active: false },
      { name: 'Écaille Dorée', hex: '#C5A880', active: false }
    ]
  },
  {
    id: 'forma-one',
    name: 'Forma One',
    category: 'Optique Architecturale',
    categoryEn: 'Architectural Optical',
    categoryAr: 'تصميم هندسي فاخر',
    price: 1850,
    originalPrice: 2600,
    discount: '-28%',
    isNew: false,
    isBestseller: true,
    shape: 'Carrée Épurée',
    material: 'Titane Japonais Brossé',
    rating: 4.8,
    reviewsCount: 94,
    image: './images/a-high-resolution-photorealistic-close-u_8ff1ZL8LRcyzKIvI18CUFA_MlqbwsMOSJCkWsXX_AvdLg.png',
    description: 'Minimalisme radical et précision géométrique. Une légèreté incomparable pour une allure affirmée.',
    colors: [
      { name: 'Noir Mat', hex: '#1E293B', active: true },
      { name: 'Bronze Satiné', hex: '#947855', active: false },
      { name: 'Argent Lunaire', hex: '#CBD5E1', active: false }
    ]
  },
  {
    id: 'nova-sun',
    name: 'Nova Sun',
    category: 'Solaire Polarisée',
    categoryEn: 'Polarized Sunwear',
    categoryAr: 'نظارة شمسية مستقطبة',
    price: 1650,
    originalPrice: 2400,
    discount: '-31%',
    isNew: true,
    isBestseller: false,
    shape: 'Aviateur Moderne',
    material: 'Acier Inoxydable & Bio-Acétate',
    rating: 5.0,
    reviewsCount: 67,
    image: './images/a-premium-product-photography-shot-of-sl_VjaK7SnIRSCJTCAs9QL4TQ_B6nUmgWrT1KGnJLc0u2Xmg.png',
    description: 'Verres solaires catégorie 3 ultra-polarisés pour une protection UV 100% et un contraste visuel rehaussé.',
    colors: [
      { name: 'Or Brossé & Vert Forêt', hex: '#C5A880', active: true },
      { name: 'Noir Carbone', hex: '#0F172A', active: false },
      { name: 'Bleu Océan', hex: '#0284C7', active: false }
    ]
  },
  {
    id: 'meridian-navigator',
    name: 'Meridian Navigator',
    category: 'Haute Précision',
    categoryEn: 'High Precision',
    categoryAr: 'دقة عالية وتيتانيوم',
    price: 2100,
    originalPrice: 2900,
    discount: '-27%',
    isNew: false,
    isBestseller: true,
    shape: 'Double Pont Géométrique',
    material: 'Titane Bêta Ultra-Flexible',
    rating: 4.9,
    reviewsCount: 112,
    image: './images/a-premium-studio-photograph-of-a-single-_A3bOFMviSFi-iUeXuGWMbw_sIs-Ee9lRg64aoxh2mDTrA_cover.png',
    description: 'Double pont signature inspiré de l\'aviation rétro, réinventé avec des tolérances micrométriques contemporaines.',
    colors: [
      { name: 'Turquoise & Platine', hex: '#36C6C9', active: true },
      { name: 'Noir Minéral', hex: '#1E293B', active: false },
      { name: 'Champagne Satiné', hex: '#E2D3BE', active: false }
    ]
  },
  {
    id: 'aura-clip-on',
    name: 'Aura Magnetic Clip',
    category: 'Système 2-en-1',
    categoryEn: '2-in-1 Magnetic System',
    categoryAr: 'نظام كليب مغناطيسي 2 في 1',
    price: 1950,
    originalPrice: 2750,
    discount: '-29%',
    isNew: true,
    isBestseller: true,
    shape: 'Panto Modulable',
    material: 'Titane & Clip Polarisé',
    rating: 4.95,
    reviewsCount: 146,
    image: './images/studio-product-photography-of-clip-on-gl_Pa0qWyFZS9-tNwdOEjdqVA_nErwYRL2QsOc7X7q3YITvQ.png',
    description: 'Passez instantanément de la vue au solaire grâce à un clip magnétique ultra-fin aux aimants néodyme invisibles.',
    colors: [
      { name: 'Gris Titane', hex: '#475569', active: true },
      { name: 'Noir Ébène', hex: '#0F172A', active: false }
    ]
  },
  {
    id: 'zenith-light',
    name: 'Zenith Featherweight',
    category: 'Ultra-Légère 7g',
    categoryEn: 'Ultra-Light 7g',
    categoryAr: 'خفيفة الوزن 7 غرامات',
    price: 1750,
    originalPrice: 2500,
    discount: '-30%',
    isNew: false,
    isBestseller: false,
    shape: 'Ovale Organique',
    material: 'Polymère Médical & Titane',
    rating: 4.85,
    reviewsCount: 88,
    image: './images/futuristic-comfortable-eyeglasses-made-w_CEMXKU9oQfCrWQFda_Ar8Q_jB7k2ykqQTOBPUAVuHh0Qg_cover.png',
    description: 'Seulement 7 grammes sur le nez. Épouse la morphologie sans aucun point de pression pour un confort inégalé.',
    colors: [
      { name: 'Cristal Cyan', hex: '#38BDF8', active: true },
      { name: 'Noir Fumé', hex: '#334155', active: false }
    ]
  }
];

// Load products from localStorage (admin additions) or use defaults
export const featuredProducts = (() => {
  try {
    const storedProducts = localStorage.getItem('optilook_admin_products');
    if (storedProducts) {
      const parsed = JSON.parse(storedProducts);
      // Ensure we have the required fields for each product
      return parsed.map(p => ({
        ...p,
        categoryEn: p.categoryEn || p.category,
        categoryAr: p.categoryAr || p.category,
        discount: p.discount || '-20%',
        rating: p.rating || 5.0,
        reviewsCount: p.reviewsCount || 1,
        colors: p.colors || [
          { name: 'Noir Mat', hex: '#0F172A', active: true },
          { name: 'Turquoise', hex: '#36C6C9', active: false }
        ],
        description: p.description || 'Monture de haute qualité.'
      }));
    }
  } catch (error) {
    console.warn('Error loading products from localStorage:', error);
  }
  return defaultProducts;
})();
