// K-Chicken Sommelier — Real Brand Dataset (EN) - Full 20 Brands

const KCHICKEN_BRANDS = [
  // ===== THE BIG 3 =====
  {
    id: "kyochon", group: "The Big 3", brand: "Kyochon Chicken",
    brand_features: "Soy sauce chicken icon. Thin batter, double-fried, sauce brushed piece-by-piece.",
    menus: [
      { id: "kyochon_honey_combo", menu: "Honey Combo", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy/Chewy", characteristics: "Bestseller. Sweet-salty honey base.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 0 } },
      { id: "kyochon_original", menu: "Kyochon Original", spiciness_1to5: 1, sweetness_1to5: 2, texture: "Thin/Crispy", characteristics: "Signature garlic soy. Very savory.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 3, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 1 } },
      { id: "kyochon_red_combo", menu: "Red Combo", spiciness_1to5: 4, sweetness_1to5: 1, texture: "Crispy", characteristics: "Cheongyang red pepper kick. Clean heat.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 1, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 0, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 1 } },
      { id: "kyochon_half_half", menu: "Half & Half", spiciness_1to5: 3, sweetness_1to5: 2, texture: "Mixed", characteristics: "Mix of Original (Soy) + Red series.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 2, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 2, NoSauce: 0, Value: 1, Filling: 1, Shareable: 3, LowMess: 1 } },
      { id: "kyochon_sal_sal", menu: "Sal Sal Chicken", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Crunchy", characteristics: "Boneless with rice puffs coating.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 1, Shareable: 2, LowMess: 3 } },
      { id: "kyochon_black_secret", menu: "Black Secret", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Five-spice blend. Exotic oriental vibe.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 1, NoSauce: 1, Value: 0, Filling: 1, Shareable: 2, LowMess: 2 } },
      { id: "kyochon_honey_jumbo_wing", menu: "Honey Jumbo Wing", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy/Chewy", characteristics: "Larger wings version of Honey series.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 0 } }
    ]
  },
  {
    id: "bbq", group: "The Big 3", brand: "BBQ",
    brand_features: "Fried chicken leader. Uses extra virgin olive oil for premium flavor.",
    menus: [
      { id: "bbq_golden_olive", menu: "Golden Olive", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Extra Crispy", characteristics: "Signature. Juicy meat with crispy batter.", tags: { Crunchy: 3, Juicy: 2, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "bbq_secret_seasoned", menu: "Secret Seasoned", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Moist", characteristics: "Classic sweet-sour red sauce (yangnyeom).", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "bbq_jamaica_whole_leg", menu: "Jamaica Whole Leg", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Tender", characteristics: "Large thigh roasted with jerk sauce.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 1, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 3, Shareable: 1, LowMess: 2 } },
      { id: "bbq_pepper_garlic", menu: "Pepper Garlic", spiciness_1to5: 2, sweetness_1to5: 3, texture: "Sticky/Crispy", characteristics: "Chinese-style fusion with scallion.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 2, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "bbq_galbi", menu: "Galbi", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Crispy", characteristics: "Korean beef rib sauce flavor.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "bbq_smoked_chicken", menu: "Smoked Chicken", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Chewy", characteristics: "Smoked hip meat. Strong smoky aroma.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 1, LowMess: 3 } }
    ]
  },
  {
    id: "bhc", group: "The Big 3", brand: "bhc",
    brand_features: "Strong at unique seasonings and fusion sauces. Gen Z favorite.",
    menus: [
      { id: "bhc_bburinkle", menu: "Bburinkle", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy", characteristics: "Blue-cheese & veggie seasoning. Yogurt dip.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "bhc_matcho_king", menu: "Matcho King", spiciness_1to5: 2, sweetness_1to5: 3, texture: "Chewy", characteristics: "Aged soy + honey with chili toppings.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 } },
      { id: "bhc_gold_king", menu: "Gold King", spiciness_1to5: 0, sweetness_1to5: 3, texture: "Crispy", characteristics: "Soy sauce + honey. Similar to honey-soy.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 1, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 1, Shareable: 2, LowMess: 1 } },
      { id: "bhc_red_king", menu: "Red King", spiciness_1to5: 4, sweetness_1to5: 2, texture: "Crispy", characteristics: "Hot chili sauce. Intense spiciness.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "bhc_curry_queen", menu: "Curry Queen", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Curry seasoning + red curry dip.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 1, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "bhc_pota_king", menu: "Pota-King", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Crunchy", characteristics: "Batter with real potato strips.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 } }
    ]
  },

  // ===== OVEN & ROASTED =====
  {
    id: "goobne", group: "Oven & Roasted", brand: "Goobne Chicken",
    brand_features: "Top oven-baked brand. No oil, lower calories.",
    menus: [
      { id: "goobne_gochu_basasak", menu: "Gochu Basasak", spiciness_1to5: 2, sweetness_1to5: 1, texture: "Crispy", characteristics: "Cheongyang pepper powder. Signature.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 2, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 0, LightSauce: 1, NoSauce: 1, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "goobne_original", menu: "Original", spiciness_1to5: 0, sweetness_1to5: 0, texture: "Chewy/Lean", characteristics: "Basic roasted. Diet-friendly.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "goobne_volcano", menu: "Volcano", spiciness_1to5: 5, sweetness_1to5: 2, texture: "Moist", characteristics: "Fire-spicy. Famous for rice-mix (chibap).", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 } },
      { id: "goobne_galbi_cheonwang", menu: "Galbi Cheonwang", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Moist", characteristics: "Galbi flavor. Popular with kids.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 } },
      { id: "goobne_namhae_garlic", menu: "Namhae Garlic", spiciness_1to5: 1, sweetness_1to5: 2, texture: "Crispy", characteristics: "Roasted garlic profile.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 2, SweetSpicy: 0, Garlic: 3, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } }
    ]
  },
  {
    id: "puradak", group: "Oven & Roasted", brand: "Puradak",
    brand_features: "Luxury vibe. Oven-fried method: baked then lightly fried.",
    menus: [
      { id: "puradak_black_alio", menu: "Black Alio", spiciness_1to5: 1, sweetness_1to5: 2, texture: "Crispy/Chewy", characteristics: "Deep soy + fried garlic chips. Signature.", tags: { Crunchy: 2, Juicy: 2, CleanSalty: 1, SweetSpicy: 0, Garlic: 3, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 2, NoSauce: 1, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "puradak_chili_mayo", menu: "Chili Mayo", spiciness_1to5: 3, sweetness_1to5: 3, texture: "Creamy", characteristics: "Jalapeño + mayo sauce. Sweet & spicy.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "puradak_corn_so_amazing", menu: "Corn-So-Amazing", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Crispy", characteristics: "Corn powder + real corn pieces.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 1, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "puradak_toowoomba", menu: "Toowoomba", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Thick/Rich", characteristics: "Spicy cream sauce (rose pasta vibe).", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 } },
      { id: "puradak_basil_festa", menu: "Basil Festa", spiciness_1to5: 0, sweetness_1to5: 2, texture: "Moist", characteristics: "Basil pesto + roasted tomato.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 1, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 1, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 } }
    ]
  },
  {
    id: "zikova", group: "Oven & Roasted", brand: "Zikova",
    brand_features: "Charcoal-grilled chicken king. Famous for mixing sauce with rice.",
    menus: [
      { id: "zikova_seasoned_grilled", menu: "Seasoned Grilled", spiciness_1to5: 3, sweetness_1to5: 3, texture: "Tender", characteristics: "Signature. Rice-mix is essential.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 1, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 3, Shareable: 2, LowMess: 0 } },
      { id: "zikova_salt_grilled", menu: "Salt Grilled", spiciness_1to5: 0, sweetness_1to5: 0, texture: "Chewy/Lean", characteristics: "Pure grilled. Highlights meat quality.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 } }
    ]
  },

  // ===== CLASSIC & SEASONED =====
  {
    id: "cheogajip", group: "Classic & Seasoned", brand: "Cheogajip",
    brand_features: "Yangnyeom master. Uses vegetable stock for cleaner sweetness.",
    menus: [
      { id: "cheogajip_supreme_gold", menu: "Supreme Gold", spiciness_1to5: 0, sweetness_1to5: 5, texture: "Crispy/Soft", characteristics: "White signature sauce + red sauce. Brand icon.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 2, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "cheogajip_original_seasoned", menu: "Original Seasoned", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Moist", characteristics: "Classic seasoned chicken standard.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "cheogajip_warak_soy", menu: "Warak (Soy)", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Sautéed soy/garlic. Savory.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 0, Garlic: 2, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 } },
      { id: "cheogajip_truffle_supreme", menu: "Truffle Supreme", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Soft", characteristics: "Supreme sauce with truffle aroma.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 2, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } }
    ]
  },
  {
    id: "pelicana", group: "Classic & Seasoned", brand: "Pelicana",
    brand_features: "One of the oldest brands. Thin batter and classic garlic-onion red sauce.",
    menus: [
      { id: "pelicana_seasoned", menu: "Seasoned Chicken", spiciness_1to5: 1, sweetness_1to5: 4, texture: "Sticky/Moist", characteristics: "Long-running classic. Garlic & onion base.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 1, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "pelicana_fried", menu: "Fried Chicken", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Thin/Crispy", characteristics: "Old-school thin crust style.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 0, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "pelicana_cheese_bburio", menu: "Cheese Bburio", spiciness_1to5: 0, sweetness_1to5: 3, texture: "Crispy", characteristics: "Cheese powder, sweet & salty.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } }
    ]
  },
  {
    id: "mexicana", group: "Classic & Seasoned", brand: "Mexicana",
    brand_features: "First-generation brand known for experimental collaborations.",
    menus: [
      { id: "mexicana_ddaengcho", menu: "Ddaengcho", spiciness_1to5: 5, sweetness_1to5: 2, texture: "Moist", characteristics: "Extremely spicy Korean chili style.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "mexicana_cheetos", menu: "Cheetos Chicken", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Crispy", characteristics: "Snack-flavor powder + sweet sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 1, SmokyPepper: 0, Saucy: 0, LightSauce: 1, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "mexicana_modu_mayo", menu: "Modu-ui Mayo", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Soft", characteristics: "Mayo base with garlic notes.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 2, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } }
    ]
  },
  {
    id: "nene", group: "Classic & Seasoned", brand: "NeNe Chicken",
    brand_features: "Packaging pioneer and early seasoning-powder trendsetter.",
    menus: [
      { id: "nene_snowing_cheese", menu: "Snowing Cheese", spiciness_1to5: 0, sweetness_1to5: 3, texture: "Crispy", characteristics: "Veggie + cheese powder. Kids' favorite.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 0, Filling: 2, Shareable: 2, LowMess: 2 } },
      { id: "nene_oriental_scallion", menu: "Oriental Scallion", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crunchy", characteristics: "Green onion + mustard sauce topping.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 1 } },
      { id: "nene_shocking_hot", menu: "Shocking Hot", spiciness_1to5: 5, sweetness_1to5: 1, texture: "Moist", characteristics: "Tear-jerking spicy.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 3, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "nene_cheongyang_mayo", menu: "Cheongyang Mayo", spiciness_1to5: 3, sweetness_1to5: 2, texture: "Creamy", characteristics: "Onion + spicy mayo topping.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 1, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 0, Filling: 2, Shareable: 2, LowMess: 0 } }
    ]
  },

  // ===== TRENDY & VALUE =====
  {
    id: "60gye", group: "Trendy & Value", brand: "60 Gye",
    brand_features: "Clean taste concept: only 60 chickens per fresh oil vat.",
    menus: [
      { id: "60gye_gochu", menu: "Gochu (Pepper)", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Moist", characteristics: "Soy base with minced mild peppers.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "60gye_ganji", menu: "Ganji (Soy/Nurungji)", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Chewy", characteristics: "Soy sauce + scorched rice powder.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "60gye_keukeukeu", menu: "Keu-Keu-Keu", spiciness_1to5: 0, sweetness_1to5: 1, texture: "Extra Crunchy", characteristics: "Triple-crunch style. Dipping sauces.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 1, NoSauce: 3, Value: 2, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "60gye_tiger", menu: "Tiger Chicken", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Crispy", characteristics: "Garlic powder + cornflakes. Sweet/salty.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 2, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 2, Value: 2, Filling: 2, Shareable: 2, LowMess: 2 } }
    ]
  },
  {
    id: "norang", group: "Trendy & Value", brand: "Norang Tongdak",
    brand_features: "Market-style cauldron fry. Subtle curry scent, lower sodium.",
    menus: [
      { id: "norang_big_fried", menu: "Big Fried", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Cracker-like", characteristics: "Subtle curry aroma. Stays crispy cold.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 2, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "norang_alssa_garlic", menu: "Alssa Garlic", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Garlic vinegar dipping sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 0, Garlic: 3, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 2, NoSauce: 1, Value: 2, Filling: 2, Shareable: 2, LowMess: 2 } }
    ]
  },
  {
    id: "jadam", group: "Trendy & Value", brand: "Jadam Chicken",
    brand_features: "Nature-forward. Uses animal welfare-certified chickens.",
    menus: [
      { id: "jadam_mapchelin", menu: "Map-chelin", spiciness_1to5: 3, sweetness_1to5: 3, texture: "Chewy", characteristics: "Mayo + Cheongyang peppers. Spicy creamy.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 2, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "jadam_sriracha", menu: "Sriracha", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Crispy", characteristics: "Exotic spice with sriracha sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 2, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 } }
    ]
  },
  {
    id: "hosigi", group: "Trendy & Value", brand: "Hosigi Double Chicken",
    brand_features: "Two-chickens-for-one value pioneer. Great quantity per price.",
    menus: [
      { id: "hosigi_spicy_soy", menu: "Spicy Soy", spiciness_1to5: 2, sweetness_1to5: 2, texture: "Salty", characteristics: "Steady seller. Mildly spicy soy.", tags: { Crunchy: 1, Juicy: 2, CleanSalty: 1, SweetSpicy: 1, Garlic: 0, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 1, LightSauce: 2, NoSauce: 0, Value: 3, Filling: 3, Shareable: 3, LowMess: 1 } },
      { id: "hosigi_lemon_cream", menu: "Lemon Cream", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Chewy", characteristics: "Glutinous rice batter. Sweet lemon cream.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 3, LightSauce: 0, NoSauce: 0, Value: 3, Filling: 2, Shareable: 3, LowMess: 0 } }
    ]
  },
  {
    id: "huchamjal", group: "Trendy & Value", brand: "Huchamjal",
    brand_features: "Affordable, high-quality fried. Strong takeaway discounts.",
    menus: [
      { id: "huchamjal_fried", menu: "Fried", spiciness_1to5: 2, sweetness_1to5: 0, texture: "Crispy", characteristics: "Basic marinade has spicy kick (KFC-like).", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 3, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "huchamjal_king_triple", menu: "King Triple", spiciness_1to5: 0, sweetness_1to5: 4, texture: "Moist", characteristics: "Cheese sauce + cream sauce layers.", tags: { Crunchy: 0, Juicy: 2, CleanSalty: 0, SweetSpicy: 1, Garlic: 0, SoyUmami: 0, CheesyCreamy: 3, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 3, Filling: 3, Shareable: 2, LowMess: 0 } }
    ]
  },
  {
    id: "barun", group: "Trendy & Value", brand: "Barun Chicken",
    brand_features: "Oil-count system on box (max 58). Known for shrimp toppings.",
    menus: [
      { id: "barun_daesae_red", menu: "Daesae Red", spiciness_1to5: 4, sweetness_1to5: 2, texture: "Crispy", characteristics: "Large shrimp topping + spicy sauce.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 0, SweetSpicy: 3, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 2, Filling: 2, Shareable: 2, LowMess: 0 } },
      { id: "barun_brown_rice", menu: "Brown Rice", spiciness_1to5: 0, sweetness_1to5: 0, texture: "Crunchy", characteristics: "Brown-rice batter for nuttiness.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 2, Filling: 2, Shareable: 2, LowMess: 3 } }
    ]
  },
  {
    id: "toreore", group: "Trendy & Value", brand: "Toreore",
    brand_features: "Uses high-quality Moguchon (NH Nonghyup) chicken.",
    menus: [
      { id: "toreore_garlic_hot_half", menu: "Garlic/Hot Half", spiciness_1to5: 3, sweetness_1to5: 2, texture: "Mixed", characteristics: "Legendary combo: soy garlic + spicy.", tags: { Crunchy: 2, Juicy: 1, CleanSalty: 1, SweetSpicy: 2, Garlic: 2, SoyUmami: 2, CheesyCreamy: 0, SmokyPepper: 2, Saucy: 1, LightSauce: 1, NoSauce: 0, Value: 1, Filling: 2, Shareable: 3, LowMess: 1 } }
    ]
  },
  {
    id: "kkanbu", group: "Trendy & Value", brand: "Kkanbu Chicken",
    brand_features: "Premium chicken-pub style. Dine-in experience focused.",
    menus: [
      { id: "kkanbu_crispy", menu: "Crispy", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Crunchy", characteristics: "Thick, wavy batter (KFC style).", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 1, Filling: 2, Shareable: 2, LowMess: 3 } },
      { id: "kkanbu_garlic_roast", menu: "Garlic Roast", spiciness_1to5: 1, sweetness_1to5: 1, texture: "Moist", characteristics: "Rotisserie topped with minced garlic.", tags: { Crunchy: 0, Juicy: 3, CleanSalty: 2, SweetSpicy: 0, Garlic: 3, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 1, NoSauce: 2, Value: 1, Filling: 3, Shareable: 2, LowMess: 2 } }
    ]
  },
  {
    id: "moms_touch", group: "Trendy & Value", brand: "Mom's Touch",
    brand_features: "Burger franchise famous for high-quality, cheap chicken.",
    menus: [
      { id: "moms_touch_thigh_boneless", menu: "Thigh Boneless", spiciness_1to5: 2, sweetness_1to5: 0, texture: "Crispy", characteristics: "100% thigh meat. Great value.", tags: { Crunchy: 2, Juicy: 3, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 3, Filling: 3, Shareable: 2, LowMess: 3 } },
      { id: "moms_touch_soy_garlic_thigh", menu: "Soy Garlic Thigh", spiciness_1to5: 1, sweetness_1to5: 3, texture: "Crispy", characteristics: "Salty-sweet garlic soy glaze.", tags: { Crunchy: 2, Juicy: 2, CleanSalty: 1, SweetSpicy: 1, Garlic: 3, SoyUmami: 3, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 2, LightSauce: 1, NoSauce: 0, Value: 3, Filling: 3, Shareable: 2, LowMess: 0 } }
    ]
  },
  {
    id: "gamachi", group: "Trendy & Value", brand: "Gamachi Tongdak",
    brand_features: "Market-style whole chicken. Very cheap, whole-fried.",
    menus: [
      { id: "gamachi_whole_chicken", menu: "Whole Chicken", spiciness_1to5: 2, sweetness_1to5: 0, texture: "Thin/Crispy", characteristics: "Spicy marinade. Crackling skin.", tags: { Crunchy: 3, Juicy: 1, CleanSalty: 2, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 1, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 3, Filling: 3, Shareable: 3, LowMess: 3 } },
      { id: "gamachi_fried_gizzards", menu: "Fried Gizzards", spiciness_1to5: 1, sweetness_1to5: 0, texture: "Chewy", characteristics: "Popular side snack (anju).", tags: { Crunchy: 1, Juicy: 1, CleanSalty: 3, SweetSpicy: 0, Garlic: 0, SoyUmami: 0, CheesyCreamy: 0, SmokyPepper: 0, Saucy: 0, LightSauce: 0, NoSauce: 3, Value: 2, Filling: 1, Shareable: 2, LowMess: 3 } }
    ]
  }
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'crunch', title: 'How crunchy do you want it?', options: [
      { label: 'Ultra crunchy', value: 'Ultra', tags: { Crunchy: 3 } },
      { label: 'Crispy', value: 'Crispy', tags: { Crunchy: 2 } },
      { label: 'Balanced', value: 'Balanced', tags: { Crunchy: 1, Juicy: 1 } },
      { label: 'Soft & juicy', value: 'Juicy', tags: { Juicy: 3 } }
    ]
  },
  {
    id: 'heat', title: 'How spicy can you handle today?', options: [
      { label: 'No spice', value: 'None', tags: { CleanSalty: 2 } },
      { label: 'Mild', value: 'Mild', tags: { SweetSpicy: 1 } },
      { label: 'Medium', value: 'Medium', tags: { SweetSpicy: 2 } },
      { label: 'Hot', value: 'Hot', tags: { SweetSpicy: 3 } },
      { label: 'Danger', value: 'Danger', tags: { SweetSpicy: 4 } }
    ]
  },
  {
    id: 'mood', title: 'What flavor mood are you craving?', options: [
      { label: 'Clean & salty', value: 'Clean', tags: { CleanSalty: 3 } },
      { label: 'Sweet & spicy', value: 'SweetSpicy', tags: { SweetSpicy: 3 } },
      { label: 'Garlic & savory', value: 'Garlic', tags: { Garlic: 3 } },
      { label: 'Soy & umami', value: 'Soy', tags: { SoyUmami: 3 } },
      { label: 'Cheesy & creamy', value: 'Cheesy', tags: { CheesyCreamy: 3 } },
      { label: 'Smoky / peppery', value: 'Smoky', tags: { SmokyPepper: 3 } }
    ]
  },
  {
    id: 'sauce', title: 'Sauce or no sauce?', options: [
      { label: 'No sauce (pure fried)', value: 'NoSauce', tags: { NoSauce: 3, LowMess: 2 } },
      { label: 'Light sauce', value: 'Light', tags: { LightSauce: 3 } },
      { label: 'Saucy', value: 'Saucy', tags: { Saucy: 2 } },
      { label: 'Extra saucy', value: 'Extra', tags: { Saucy: 3 } }
    ]
  },
  {
    id: 'situation', title: 'Who are you eating with?', options: [
      { label: 'Solo', value: 'Solo', tags: { LowMess: 1 } },
      { label: 'Date', value: 'Date', tags: { LowMess: 2 } },
      { label: 'Friends (2–3)', value: 'Friends', tags: { Shareable: 2 } },
      { label: 'Group (4–6)', value: 'Group', tags: { Shareable: 3, Value: 1 } },
      { label: 'Office / team', value: 'Office', tags: { Shareable: 3, LowMess: 2 } }
    ]
  },
  {
    id: 'goal', title: 'What matters most right now?', options: [
      { label: 'Best taste match', value: 'Taste', tags: {} },
      { label: 'Best value', value: 'Value', tags: { Value: 3 } },
      { label: 'Most filling', value: 'Filling', tags: { Filling: 3 } },
      { label: 'Most shareable', value: 'Shareable', tags: { Shareable: 3 } },
      { label: 'Least messy', value: 'LowMess', tags: { LowMess: 3 } }
    ]
  }
];

// Flatten to single menu list for scoring
const MENU_ITEMS = KCHICKEN_BRANDS.flatMap(b =>
  b.menus.map(m => ({
    id: m.id,
    name: m.menu,
    brand: b.brand,
    group: b.group,
    characteristics: m.characteristics,
    spiciness: m.spiciness_1to5,
    sweetness: m.sweetness_1to5,
    texture: m.texture,
    tags: m.tags,
    crunchLevel: m.tags.Crunchy || 0,
    heatLevel: m.spiciness_1to5,
    sauceLevel: (m.tags.Saucy || 0) + (m.tags.LightSauce || 0)
  }))
);

// Assign badges based on tags
MENU_ITEMS.forEach(item => {
  if (item.tags.Value >= 2) item.badge = 'Best Value';
  else if (item.tags.LowMess >= 3) item.badge = 'Low Mess';
  else if (item.tags.Crunchy >= 3) item.badge = 'Ultra Crunch';
  else if (item.heatLevel >= 4) item.badge = 'Spicy';
  else if (item.tags.CheesyCreamy >= 3) item.badge = 'Creamy';
  else if (item.tags.Garlic >= 3) item.badge = 'Garlic Bomb';
  else if (item.tags.SoyUmami >= 3) item.badge = 'Umami';
  else item.badge = 'Top Pick';
});

console.log(`Loaded ${KCHICKEN_BRANDS.length} brands with ${MENU_ITEMS.length} menu items`);
