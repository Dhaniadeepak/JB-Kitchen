export interface MenuItem {
  id: string;
  name: string;
  category: 'Starters' | 'Main Course' | 'Breads' | 'Beverages';
  type: 'veg' | 'non-veg';
  price: string;
  isSamplePrice: boolean;
  description: string;
  spiciness: 'Mild' | 'Medium' | 'Robust';
  isSignature?: boolean;
  ingredients?: string[];
  image?: string;
  pairingSuggestion?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Signatures' | 'Starters' | 'Mains' | 'Breads' | 'Beverages' | 'Ambience';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  highlightDish: string;
  visitType: string;
}

export const RESTAURANT_INFO = {
  name: "JB's Kitchen",
  tagline: "Good Food. Great Moments.",
  conceptType: "Contemporary North Indian & Heritage Punjabi Kitchen",
  address: {
    line1: "SCO 42, Phase 5",
    line2: "Near Main Market & Silvi Park",
    city: "SAS Nagar (Mohali)",
    state: "Punjab",
    pincode: "160059",
    mapQuery: "Phase 5, SAS Nagar, Mohali, Punjab"
  },
  contact: {
    phonePlaceholder: "+91 98765 43210 [Sample]",
    whatsappPlaceholder: "+91 98765 43210 [Sample]",
    emailPlaceholder: "inquiry@jbskitchen-sample.com [Sample]",
    whatsappRaw: "919876543210"
  },
  timings: {
    lunch: "12:30 PM – 4:00 PM",
    dinner: "7:00 PM – 11:30 PM",
    statusNote: "Open All 7 Days [Sample Schedule]"
  },
  demoNotice: "Concept Presentation Demo · All prices, reviews, contact details, and hours are clearly marked editable placeholders."
};

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: "sig-1",
    name: "Dal Makhani (JB's 18-Hour Slow Simmer)",
    category: "Main Course",
    type: "veg",
    price: "₹340 [Sample]",
    isSamplePrice: true,
    description: "Slow-cooked black urad lentils gently simmered overnight over slow charcoal embers, finished with white butter churn and fresh malai cream.",
    spiciness: "Mild",
    isSignature: true,
    ingredients: ["Black Urad Lentils", "White Butter", "Slow-Cooked Tomato Puree", "Kasturi Methi", "Churned Cream"],
    image: "/src/assets/images/dish_dal_makhani_1793807442225.jpg",
    pairingSuggestion: "Pairs perfectly with Butter Garlic Naan or Jeera Rice"
  },
  {
    id: "sig-2",
    name: "Royal Murgh Makhani (Butter Chicken)",
    category: "Main Course",
    type: "non-veg",
    price: "₹480 [Sample]",
    isSamplePrice: true,
    description: "Tender boneless chicken roasted in a clay tandoor, simmered in a velvet-smooth reduction of San Marzano style sun-ripened tomatoes and aromatic fenugreek.",
    spiciness: "Medium",
    isSignature: true,
    ingredients: ["Clay Oven Chicken", "Velvety Tomato Gravy", "Cashew Butter", "Kashmiri Mirch", "Kasoori Methi"],
    image: "/src/assets/images/dish_butter_chicken_1793807445031.jpg",
    pairingSuggestion: "Best enjoyed with Laccha Paratha"
  },
  {
    id: "sig-3",
    name: "Char-Grilled Tandoori Platter",
    category: "Starters",
    type: "veg",
    price: "₹390 [Sample]",
    isSamplePrice: true,
    description: "Smoky malai paneer cubes, charred bell peppers, baby potatoes, and stuffed mushroom skewers seasoned with mustard oil marinade.",
    spiciness: "Robust",
    isSignature: true,
    ingredients: ["Artisan Paneer", "Cold Pressed Mustard Oil", "Hung Curd", "Charred Sweet Peppers", "Mint Relish"],
    image: "/src/assets/images/dish_tandoori_platter_1793807444142.jpg",
    pairingSuggestion: "Served with pickled shallots & fresh mint dip"
  },
  {
    id: "sig-4",
    name: "Amritsari Aloo Pyaaz Stuffed Kulcha",
    category: "Breads",
    type: "veg",
    price: "₹130 [Sample]",
    isSamplePrice: true,
    description: "Multi-layered flaky clay-oven bread filled with hand-crushed spiced potatoes, green chillies, coriander seeds, and a melting dollop of homemade butter.",
    spiciness: "Medium",
    isSignature: true,
    ingredients: ["Fermented Dough", "Spiced Potatoes", "Pomegranate Seeds (Anardana)", "Fresh Cilantro", "Desi Butter"],
    image: "/src/assets/images/dish_amritsari_kulcha_1793807444843.jpg",
    pairingSuggestion: "Accompanied by spicy Pindi Chole & Imli pyaaz chutney"
  }
];

export const FULL_MENU: MenuItem[] = [
  // Starters
  {
    id: "st-1",
    name: "Char-Grilled Tandoori Platter",
    category: "Starters",
    type: "veg",
    price: "₹390 [Sample]",
    isSamplePrice: true,
    description: "Smoky malai paneer cubes, charred bell peppers, and spiced mushrooms seasoned with mustard oil marinade.",
    spiciness: "Robust",
    isSignature: true,
    ingredients: ["Artisan Paneer", "Cold Pressed Mustard Oil", "Hung Curd", "Bell Peppers"],
    image: "/src/assets/images/dish_tandoori_platter_1793807444142.jpg",
    pairingSuggestion: "Mint-Coriander Chutney"
  },
  {
    id: "st-2",
    name: "JB's Bhatti Murgh Tikka",
    category: "Starters",
    type: "non-veg",
    price: "₹420 [Sample]",
    isSamplePrice: true,
    description: "Rustic highway-style tandoori chicken chunks marinated in crushed coriander seeds, black peppercorns, and yellow chilli.",
    spiciness: "Robust",
    ingredients: ["Farm Chicken", "Bhatti Spices", "Mustard Oil", "Ginger Garlic"],
    image: "/src/assets/images/dish_tandoori_platter_1793807444142.jpg",
    pairingSuggestion: "Chilled Masala Cooler"
  },
  {
    id: "st-3",
    name: "Dahi Ke Sholay & Kebab",
    category: "Starters",
    type: "veg",
    price: "₹280 [Sample]",
    isSamplePrice: true,
    description: "Crispy crusted golden croquettes filled with hung spiced yoghurt, bell pepper confetti, and green chillies.",
    spiciness: "Mild",
    ingredients: ["Spiced Hung Curd", "Crispy Crust", "Fresh Herbs", "Green Cardamom"]
  },
  {
    id: "st-4",
    name: "Amritsari Ajwaini Fish Fry",
    category: "Starters",
    type: "non-veg",
    price: "₹460 [Sample]",
    isSamplePrice: true,
    description: "Crispy gram flour and carom-seed crusted fresh river fish fillets fried golden, served with radish shreds and chatpata masala.",
    spiciness: "Medium",
    ingredients: ["River Sole", "Carom Seeds (Ajwain)", "Gram Flour Batter", "Chaat Masala"]
  },
  {
    id: "st-5",
    name: "Afghani Malai Soya Chaap",
    category: "Starters",
    type: "veg",
    price: "₹270 [Sample]",
    isSamplePrice: true,
    description: "Tender soya chaap rolls infused with cashew cream, white pepper, melted cheese, and tandoor-roasted to juicy perfection.",
    spiciness: "Mild",
    ingredients: ["Soya Chaap", "Cashew Cream", "Cheese", "White Pepper"]
  },
  {
    id: "st-6",
    name: "Mutton Seekh Kebab Lucknowi",
    category: "Starters",
    type: "non-veg",
    price: "₹480 [Sample]",
    isSamplePrice: true,
    description: "Finely minced goat meat seasoned with potli masala, skewered and flame-kissed in the clay tandoor.",
    spiciness: "Robust",
    ingredients: ["Tender Goat Mince", "Potli Spices", "Cilantro", "Mint Oil"]
  },

  // Main Course
  {
    id: "mc-1",
    name: "Dal Makhani (JB's 18-Hour Slow Simmer)",
    category: "Main Course",
    type: "veg",
    price: "₹340 [Sample]",
    isSamplePrice: true,
    description: "Slow-cooked black urad lentils gently simmered overnight over slow charcoal embers, finished with white butter churn and fresh malai cream.",
    spiciness: "Mild",
    isSignature: true,
    ingredients: ["Black Lentils", "Farm White Butter", "Tomato Purée", "Kasturi Methi"],
    image: "/src/assets/images/dish_dal_makhani_1793807442225.jpg",
    pairingSuggestion: "Garlic Naan"
  },
  {
    id: "mc-2",
    name: "Royal Murgh Makhani (Butter Chicken)",
    category: "Main Course",
    type: "non-veg",
    price: "₹480 [Sample]",
    isSamplePrice: true,
    description: "Tender boneless chicken roasted in a clay tandoor, simmered in a velvet-smooth reduction of tomatoes, cashews, and aromatic fenugreek.",
    spiciness: "Medium",
    isSignature: true,
    ingredients: ["Tandoori Chicken", "Velvet Gravy", "Cashew Paste", "Fenugreek"],
    image: "/src/assets/images/dish_butter_chicken_1793807445031.jpg",
    pairingSuggestion: "Laccha Paratha"
  },
  {
    id: "mc-3",
    name: "Paneer Lababdar Mohali Special",
    category: "Main Course",
    type: "veg",
    price: "₹360 [Sample]",
    isSamplePrice: true,
    description: "Fresh cottage cheese bathed in an onion-tomato gravy with grated paneer and freshly ground cardamom essence.",
    spiciness: "Medium",
    ingredients: ["Artisanal Cottage Cheese", "Tomato Gravy", "Grated Paneer", "Cardamom"]
  },
  {
    id: "mc-4",
    name: "Punjabi Rara Mutton Gosht",
    category: "Main Course",
    type: "non-veg",
    price: "₹560 [Sample]",
    isSamplePrice: true,
    description: "Slow braised mutton pieces cooked together with spiced minced goat keema in rich bhuna masala.",
    spiciness: "Robust",
    ingredients: ["Goat Meat Cuts", "Spiced Keema", "Brown Onions", "Black Cardamom"]
  },
  {
    id: "mc-5",
    name: "Pindi Chole (Rawalpindi Style)",
    category: "Main Course",
    type: "veg",
    price: "₹290 [Sample]",
    isSamplePrice: true,
    description: "Dark, rustic chickpeas boiled with whole tea leaves and tossed in roasted cumin, dry mango powder, and ginger juliennes.",
    spiciness: "Medium",
    ingredients: ["Kabuli Chana", "Anardana", "Black Tea Decoc.", "Roasted Cumin"]
  },
  {
    id: "mc-6",
    name: "Kadhai Murgh Highway Dhaba Style",
    category: "Main Course",
    type: "non-veg",
    price: "₹460 [Sample]",
    isSamplePrice: true,
    description: "Bone-in tender chicken wok-tossed with crushed coriander seeds, chunky bell peppers, and dry red chillies.",
    spiciness: "Robust",
    ingredients: ["Bone-in Chicken", "Crushed Coriander", "Sweet Peppers", "Degi Mirch"]
  },
  {
    id: "mc-7",
    name: "Awadhi Dum Subz Biryani",
    category: "Main Course",
    type: "veg",
    price: "₹330 [Sample]",
    isSamplePrice: true,
    description: "Long-grain basmati rice layered with garden vegetables, saffron milk, caramelized shallots, and slow dum cooked under dough seal.",
    spiciness: "Mild",
    ingredients: ["Aged Basmati", "Exotic Vegetables", "Kashmiri Saffron", "Rose Water"]
  },
  {
    id: "mc-8",
    name: "Murgh Dum Biryani with Burani Raita",
    category: "Main Course",
    type: "non-veg",
    price: "₹450 [Sample]",
    isSamplePrice: true,
    description: "Fragrant basmati rice sealed with spiced chicken, mint leaves, kewra water, served alongside garlic-infused Burani raita.",
    spiciness: "Medium",
    ingredients: ["Basmati Rice", "Tender Chicken", "Fried Onions", "Garlic Raita"]
  },

  // Breads
  {
    id: "br-1",
    name: "Amritsari Aloo Pyaaz Stuffed Kulcha",
    category: "Breads",
    type: "veg",
    price: "₹130 [Sample]",
    isSamplePrice: true,
    description: "Crispy, multi-layered tandoori kulcha with spiced potato, pomegranate seed, and onion stuffing, brushed with desi butter.",
    spiciness: "Medium",
    isSignature: true,
    ingredients: ["Flaky Dough", "Spiced Potatoes", "Anardana", "Desi Butter"],
    image: "/src/assets/images/dish_amritsari_kulcha_1793807444843.jpg"
  },
  {
    id: "br-2",
    name: "Crisp Garlic Butter Naan",
    category: "Breads",
    type: "veg",
    price: "₹90 [Sample]",
    isSamplePrice: true,
    description: "Fresh dough stretched thin, coated with toasted minced garlic, fresh coriander leaves, and glazed with clarified butter.",
    spiciness: "Mild",
    ingredients: ["Refined Flour", "Minced Garlic", "Butter", "Fresh Coriander"]
  },
  {
    id: "br-3",
    name: "Layered Pudina Laccha Paratha",
    category: "Breads",
    type: "veg",
    price: "₹80 [Sample]",
    isSamplePrice: true,
    description: "Whole wheat spiral layered flatbread dusted with dried mint leaves and carom seeds, toasted golden in the tandoor.",
    spiciness: "Mild",
    ingredients: ["Whole Wheat Flour", "Crushed Dry Mint", "Carom Seeds", "Desi Ghee"]
  },
  {
    id: "br-4",
    name: "Tandoori Roti with Clarified Ghee",
    category: "Breads",
    type: "veg",
    price: "₹45 [Sample]",
    isSamplePrice: true,
    description: "Traditional 100% whole wheat unleavened flatbread baked on the clay wall of the tandoor.",
    spiciness: "Mild",
    ingredients: ["Stoneground Atta", "Pure Desi Ghee"]
  },
  {
    id: "br-5",
    name: "Chilli Cheese & Herb Naan",
    category: "Breads",
    type: "veg",
    price: "₹140 [Sample]",
    isSamplePrice: true,
    description: "Artisan flatbread stuffed with mature cheese and chopped green chillies, topped with sesame seeds.",
    spiciness: "Medium",
    ingredients: ["Melted Cheese", "Green Chillies", "Sesame Seeds", "Butter"]
  },
  {
    id: "br-6",
    name: "Traditional Missi Roti",
    category: "Breads",
    type: "veg",
    price: "₹65 [Sample]",
    isSamplePrice: true,
    description: "Gram flour and wheat flatbread spiced with onion bits, green chillies, cumin, and fenugreek leaves.",
    spiciness: "Medium",
    ingredients: ["Gram Flour (Besan)", "Wheat Atta", "Onions", "Kasuri Methi"]
  },

  // Beverages
  {
    id: "bv-1",
    name: "Shahi Kesar Pista Mango Lassi",
    category: "Beverages",
    type: "veg",
    price: "₹150 [Sample]",
    isSamplePrice: true,
    description: "Thick hand-churned curd blended with Alphonso mango pulp, Kashmiri saffron, slivered pistachios, and almonds served in an earthenware kulhad.",
    spiciness: "Mild",
    isSignature: true,
    ingredients: ["Farm Curd", "Alphonso Mango", "Saffron", "Pistachio & Almonds"],
    image: "/src/assets/images/beverage_kesar_lassi_1793807445604.jpg"
  },
  {
    id: "bv-2",
    name: "Traditional Patiala Sweet Lassi",
    category: "Beverages",
    type: "veg",
    price: "₹120 [Sample]",
    isSamplePrice: true,
    description: "Creamy traditional Punjabi sweetened buttermilk topped with a thick crown of fresh churning malai cream.",
    spiciness: "Mild",
    ingredients: ["Cultured Yogurt", "Churned Malai Cream", "Cardamom Essence"]
  },
  {
    id: "bv-3",
    name: "Roasted Cumin Namkeen Chaas",
    category: "Beverages",
    type: "veg",
    price: "₹95 [Sample]",
    isSamplePrice: true,
    description: "Refreshing salted buttermilk tempered with freshly roasted cumin, black salt, and hand-plucked mint.",
    spiciness: "Mild",
    ingredients: ["Chilled Buttermilk", "Bhuna Jeera", "Black Salt", "Fresh Mint"]
  },
  {
    id: "bv-4",
    name: "Kala Khatta & Fresh Lime Masala Soda",
    category: "Beverages",
    type: "veg",
    price: "₹110 [Sample]",
    isSamplePrice: true,
    description: "Fizzy club soda with freshly squeezed Key lime juice, rock salt, tangy spices, and mint sprigs.",
    spiciness: "Mild",
    ingredients: ["Club Soda", "Fresh Lime", "Rock Salt Spices", "Mint Sprigs"]
  },
  {
    id: "bv-5",
    name: "Heritage Adrak Elaichi Kulhad Chai",
    category: "Beverages",
    type: "veg",
    price: "₹70 [Sample]",
    isSamplePrice: true,
    description: "Full-bodied Assam tea leaves simmered with fresh crushed ginger and green cardamom pods.",
    spiciness: "Mild",
    ingredients: ["Assam CTC Tea", "Crushed Ginger", "Green Cardamom", "Whole Milk"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The JB's Grand Dining Feast",
    category: "Signatures",
    image: "/src/assets/images/hero_restaurant_dining_1793807443183.jpg",
    caption: "A contemporary table feast showcasing authentic gravies, fresh tandoor breads, and ambient warmth."
  },
  {
    id: "gal-2",
    title: "18-Hour Simmered Dal Makhani",
    category: "Mains",
    image: "/src/assets/images/dish_dal_makhani_1793807442225.jpg",
    caption: "Slow-simmered whole black lentils finished with organic white butter swirl in artisan black ceramic."
  },
  {
    id: "gal-3",
    title: "Charred Tandoori Sizzle",
    category: "Starters",
    image: "/src/assets/images/dish_tandoori_platter_1793807444142.jpg",
    caption: "Clay tandoor smoked malai paneer, chicken tikka, pickled onions, and fresh herb dip on slate."
  },
  {
    id: "gal-4",
    title: "Royal Murgh Makhani Gravy",
    category: "Mains",
    image: "/src/assets/images/dish_butter_chicken_1793807445031.jpg",
    caption: "Velvety spiced tomato reduction with tandoori roast chicken in traditional hammered copper."
  },
  {
    id: "gal-5",
    title: "Flaky Amritsari Stuffed Kulcha",
    category: "Breads",
    image: "/src/assets/images/dish_amritsari_kulcha_1793807444843.jpg",
    caption: "Hand-stretched golden crust opening with spiced potato, pomegranate seeds, and fresh churned butter."
  },
  {
    id: "gal-6",
    title: "Terracotta Saffron Mango Lassi",
    category: "Beverages",
    image: "/src/assets/images/beverage_kesar_lassi_1793807445604.jpg",
    caption: "Traditional Punjabi lassi with Kashmiri saffron strands, chopped pistachios, and almond slivers."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Harpreet S. Gill",
    role: "Local Food Enthusiast · Phase 5 Mohali [Sample Review]",
    rating: 5,
    highlightDish: "Dal Makhani & Garlic Naan",
    visitType: "Family Dinner",
    quote: "The slow-simmered Dal Makhani here tastes genuinely like home in Punjab. Rich without being overly heavy, and the clay oven breads were served piping hot at the table."
  },
  {
    id: "test-2",
    author: "Dr. Ananya Verma",
    role: "Mohali Resident & Food Blogger [Sample Review]",
    rating: 5,
    highlightDish: "Char-Grilled Tandoori Platter",
    visitType: "Weekend Gathering",
    quote: "Mohali has plenty of food joints, but JB's Kitchen brings a refined, warm contemporary dining feel. The char on the tandoori appetizers was exceptional, and the staff hospitality made our anniversary celebration effortless."
  },
  {
    id: "test-3",
    author: "Gurvinder Singh Dhillon",
    role: "Corporate Executive, IT Park Mohali [Sample Review]",
    rating: 5,
    highlightDish: "Royal Murgh Makhani & Kulcha",
    visitType: "Team Lunch",
    quote: "Hosted a 12-person client luncheon here. The ambience in Phase 5 is relaxed yet upscale, the Amritsari Kulcha was genuinely flaky and crisp, and service timing was spot on."
  },
  {
    id: "test-4",
    author: "Meenakshi Kapur",
    role: "Sunday Dining Regular [Sample Review]",
    rating: 5,
    highlightDish: "Kesar Pista Lassi & Pindi Chole",
    visitType: "Sunday Brunch",
    quote: "The terracotta kulhad lassi is the real highlight—thick, not artificially sweetened, and topped with generous pistachios. A standout restaurant concept for Tricity."
  }
];
