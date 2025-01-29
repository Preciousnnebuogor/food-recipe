export type IFood = {
  foodname: string;
  image: string;
  ingredient: string[];
  desc: string[];
};

export const FoodList: IFood[] = [
  {
    foodname: "Abacha (African Salad)",
    image: "/Abacha.jpg",
    ingredient: [
      `2 cups of Abacha (cassava flakes),
       1-2 pieces of fish (dry or fried fish, e.g.,mackerel),
        1 cup of palm oil, 
        1 teaspoon of potash (dissolved in warm water),
        1/2 cup of ugba (optional, oil bean seeds),
      2 tablespoons of ground crayfish,
      To taste: pepper (fresh or ground),
      1 bulb of onions (sliced),
      1 teaspoon of ground ehuru (optional),
      1-2 seasoning cubes,
      Salt to taste,
      A handful of garden egg leaves (optional, chopped).`,
    ],
    desc: [
      "Soak the Abacha in cold water for 5-10 minutes until soft. Drain and set aside.",
      "Dissolve the potash in warm water. Let it settle, then pour the clear liquid into a bowl, leaving the residue behind.",
      "In a clean bowl, pour the palm oil. Gradually add the potash solution while stirring until a thick, yellowish paste forms.",
      "Add ground crayfish, pepper, seasoning cubes, ground ehuru, and a pinch of salt into the oil mixture. Mix thoroughly.",
      "Add the softened Abacha and ugba (if using) into the palm oil mixture. Mix until the Abacha is well coated.",
      "Prepare the fish by either frying or soaking dry fish in warm salted water to soften, then clean and debone.",
      "Add the prepared fish to the Abacha mixture. Mix gently to incorporate.",
      "Garnish with sliced onions, chopped garden egg leaves, or scent leaves for extra flavor.",
      "Serve at room temperature with a drink of your choice.",
    ],
  },
  {
    foodname: "AKara (Beans Balls)",
    image: "/akara.jpg",
    ingredient: [
      `2 cups of peeled beans (black-eyed peas or brown beans),
      1 medium onion (chopped),
      2-3 fresh chili peppers or 1 teaspoon of ground pepper (adjust to taste),
      Salt to taste,
      Vegetable oil (for frying),
      Optional: Crayfish (ground, for extra flavor),
      Optional: Sliced onions (for garnish or texture).`,
    ],
    desc: [
      "Peel the beans by soaking them in water for a few minutes, then rubbing them between your palms to remove the skins. Rinse thoroughly until the water is clear, and the skins are removed.",
      "Blend the peeled beans with chopped onions and chili peppers using a blender. Add a small amount of water to assist blending but ensure the batter is thick and smooth.",
      "Pour the blended mixture into a mixing bowl. Add salt to taste and mix thoroughly. You can also add ground crayfish for extra flavor.",
      "Heat vegetable oil in a deep frying pan or pot over medium heat. Ensure the oil is hot enough before frying.",
      "Scoop small portions of the bean batter using a spoon and gently drop them into the hot oil. Fry in batches to avoid overcrowding.",
      "Fry until the Akara balls are golden brown and cooked through, turning them occasionally to ensure even frying.",
      "Remove the fried Akara balls with a slotted spoon and place them on paper towels to drain excess oil.",
    ],
  },
  {
    foodname: "Akidi & Abacha",
    image: "/Akidi and Abacha.jpg",
    ingredient: [
      `Akidi (Black Beans): 1 cup (cooked until tender), 
Palm oil: ½ cup,
Potash (Akanwu/Kaun): 1 teaspoon (dissolved in water),
Crayfish: 2 tablespoons (ground),
Dry pepper: 1 teaspoon (or to taste),
Ugba (Oil bean seed): ½ cup (optional, sliced and rinsed),
Onion: 1 small bulb (sliced thinly),
Salt: to taste,
Seasoning cubes: 1-2 cubes (optional),
Garden egg leaves or sliced Utazi leaves: 1 handful (for garnish),
Boiled eggs: 2 (for serving, optional).
`,
    ],
    desc: [
      `Wash the Akidi thoroughly and cook until soft. Drain and set aside. 
    Dissolve potash in water, strain to remove residues, and keep the clear solution. 
    Warm palm oil slightly (do not cook). Add the potash solution gradually 
    while stirring until it forms a yellowish-orange paste.
    Mix the soaked and drained Abacha into the palm oil paste until all 
    strands are well-coated.
    Season with ground crayfish, dry pepper, salt, and seasoning cubes. Mix well.
    Add Ugba (optional) and stir gently.
    Incorporate the cooked Akidi into the Abacha mixture and combine thoroughly.
    Garnish with sliced onions and fresh leaves (Garden egg or Utazi).
    Serve with boiled eggs if desired.`,
    ],
  },
  {
    foodname: "Alkubus",
    image: "/Alkubus.webp",
    ingredient: [
      `flour: 4 cups (all-purpose flour),
    yeast: "1 tablespoon (active dry yeast)",
    sugar: "2 tablespoons",
    salt: "1 teaspoon",
    warmWater: "1½ cups (adjust as needed)",
    vegetableOil: "1 tablespoon (for greasing).`,
    ],
    desc: [
      `In a small bowl, mix warm water, sugar, and yeast. Stir gently and let it sit for 5-10 minutes until frothy to activate the yeast.
    In a large mixing bowl, combine the flour and salt. Make a well in the center and pour in the activated yeast mixture.
    Mix until the dough comes together. If using hands, knead for 8-10 minutes on a floured surface until smooth and elastic.
    Grease a bowl with vegetable oil, place the dough inside, and cover with a clean towel or plastic wrap. Let it rise in a warm place for 1-2 hours, or until doubled in size.
    Punch down the dough to release air, divide it into smaller pieces, and shape into smooth balls or ovals.
    Prepare a steaming pot by lining the steaming basket with banana leaves, parchment paper, or a greased surface.
    Bring water in the steaming pot to a boil. Place the dough balls in the steaming basket, leaving space between them for expansion.
    Cover the pot and steam for 25-30 minutes, or until the Alkubus is firm and fully cooked.
    Remove from the steaming basket, let cool slightly, and serve with soups or stews like Miyan Taushe or Miyan Kuka.`,
    ],
  },
  {
    foodname: "Atama (Soup)",
    image: "/Atama soup.jpg",
    ingredient: [
      `palmNutExtract: "2 cups (or palm fruit blended and sieved),
    meat: 1kg (assorted meat, goat meat, or beef),
    stockFish: 1 cup (soaked and washed),
    smokedFish: 1-2 pieces (cleaned and deboned),
    crayfish: 2 tablespoons (ground),
    dryPepper: 1 tablespoon (or to taste),
    atamaLeaves: 1 cup (sliced and fresh, or dried),
    periwinkle: 1 cup (optional, shelled or unshelled),
    seasoningCubes: 2 cubes,
    salt: to taste,
    water: as needed.`,
    ],
    desc: [
      `Wash and season the meat with salt, seasoning cubes, and pepper. Cook until tender.
    Add the stockfish and smoked fish to the pot. Cook together for about 10 minutes.
    Pour the palm nut extract into the pot. Stir and allow it to boil for about 10-15 minutes to thicken.
    Add ground crayfish, dry pepper, and periwinkle (if using). Stir and let it cook for 5 minutes.
    Introduce the sliced Atama leaves. Stir and allow to simmer for another 5 minutes until the flavors combine.
    Taste and adjust seasoning with salt or more seasoning cubes if needed.
    Remove from heat and serve hot with pounded yam, fufu, or rice.`,
    ],
  },
  {
    foodname: "Balangu",
    image: "/Balangu.jpg",
    ingredient: [
      `beef: 1kg (or lamb/goat meat, cut into thin strips),
    salt: to taste,
    pepper: 2 tablespoons (ground, or to taste),
    gingerPowder: 1 teaspoon,
    garlicPowder: 1 teaspoon,
    suyaSpice: 2 tablespoons (optional, for extra flavor),
    vegetableOil: 2 tablespoons (optional, for basting).`,
    ],
    desc: [
      `Wash the beef strips thoroughly and drain to remove excess water.
    Season the meat with salt, pepper, ginger powder, garlic powder,
     and suya spice (if using). Mix well to coat evenly.
    Set up a grill, barbecue pit, or oven. Preheat to medium heat.
    Arrange the meat strips on skewers or place them directly on the grill rack.
    Roast the meat, turning occasionally, for about 15-20 minutes until golden brown 
    and cooked through. You can baste with vegetable oil for extra moisture if needed.
    Remove the meat from the grill and sprinkle additional pepper or suya spice if desired.
    Serve hot with sliced onions, tomatoes, and pita bread or any preferred side dish.
`,
    ],
  },
  {
    foodname: "Banga Rice",
    image: "/banga rice.jpg",
    ingredient: [
      `rice:  (washed and drained),
    palmNutExtract: 2 cups (or palm fruit blended and sieved),
    meat: 500g (assorted meat or chicken, cooked),
    smokedFish: 2 pieces (cleaned and deboned),
    stock: 2 cups (from the cooked meat),
    crayfish: 2 tablespoons (ground),
    dryPepper: 1 tablespoon (or to taste),
    bangaSpice: 1 tablespoon (optional, for extra flavor),
    onions: 1 small bulb (chopped),
    scentLeaves: A handful (sliced),
    salt: to taste,
    seasoningCubes: (your quatity).`,
    ],
    desc: [
      `In a large pot, pour the palm nut extract and meat stock, and bring to a boil.
    Add the cooked meat, smoked fish, ground crayfish, dry pepper, and banga spice, 
    Stir well and allow to cook for 5-7 minutes.
    Add the washed rice into the boiling mixture, Stir and ensure the liquid is enough to cook the rice.
     Add more water if needed.
    Season with salt and seasoning cubes, Stir to combine.
    Reduce the heat to medium and cover the pot.
     Let the rice cook until soft and the liquid is fully absorbed. Stir occasionally to prevent burning.
    Once the rice is cooked, add the chopped onions and sliced scent leaves. 
    Stir and allow to simmer for 2-3 minutes.
    Remove from heat and serve hot.`,
    ],
  },
  {
    foodname: "Banga Soup (Ofe Akwu)",
    image: "/Banga Soup.jpg",
    ingredient: [
      `PalmNutExtract: 2 cups (or palm fruit blended and sieved),
    AssortedMeat: 500g (beef, goat meat, or chicken, cooked),
    StockFish: 1 cup (soaked and washed),
    DriedFish: 2 pieces (cleaned and deboned),
    Periwinkle: 1 cup (optional, shelled or unshelled),
    Crayfish: 2 tablespoons (ground),
    DryPepper: 1 tablespoon (or to taste),
    BangaSpice: 1 tablespoon (for authentic flavor),
    AtaRodo: 2 pieces (blended or chopped),
    Onions: 1 small bulb (chopped, optional),
    ScentLeaves: A handful (sliced, or substitute with bitter leaves),
    SeasoningCubes: 2 cubes,
    Salt: to taste,
    Water: as needed.
`,
    ],
    desc: [
      `Pour the palm nut extract into a pot. Add a little water and bring it to a boil over medium heat.
    Add the cooked assorted meat, stockfish, and dried fish to the boiling extract, 
    Stir and let it cook for 10 minutes.
    Add ground crayfish, dry pepper, banga spice, and blended ata rodo, Stir well to combine.
    If using periwinkle, add it now. Let the soup simmer for another
     7-10 minutes to thicken and allow the flavors to develop.
    Season with salt and seasoning cubes to taste. Stir and let it cook for another 5 minutes.
    Finally, add the sliced scent leaves or bitter leaves. Stir and allow the soup to simmer for 2-3 minutes.
    Remove from heat and serve hot with starch, pounded yam, or fufu.`,
    ],
  },
  {
    foodname: "Bitterleaf Soup",
    image: "/Bitterleaf Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Boli",
    image: "/Boli.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Catfish Pepper Soup",
    image: "/Catfish Peppersoup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Coconut Fried Rice ",
    image: "/Coconut Fried Rice.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Curry Sauce",
    image: "/curry sauce.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Edikaikong (Soup)",
    image: "/Edikaikong Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Efo Riro (Soup)",
    image: "/Efo Riro.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Egg Sauce",
    image: "/Egg sauce and Yam.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofe Egusi (Soup)",
    image: "/Egusi soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ekpang Nkukwo (Soup)",
    image: "/Ekpang Nkukwo.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ewa Agoyin",
    image: "/Ewa Agoyin.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ewedu (Soup)",
    image: "/Ewedu Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Fankasu",
    image: "/Fankasu.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Fisherman Soup (Rivers Native Soup)",
    image: "/fisherman soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Fried Rice",
    image: "/fried rice.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Fry Plaintain",
    image: "/fry plaintain.jpg",
    ingredient: [],
    desc: [],
  },

  {
    foodname: "Gbegiri (Soup)",
    image: "/Gbegiri Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Groudnut Soup",
    image: "/Groundnut Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Gurasa",
    image: "Gurasa.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Garden egg sauce",
    image: "/Garden egg sauce.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Jollof Rice",
    image: "jollof rice.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Kiliahi",
    image: "/kilishi.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Kulikuli",
    image: "/kulikuli.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Miyan Geda (Soup)",
    image: "Miyan Geda.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Miyan Karkashi (Soup)",
    image: "/Miyan Karkashi.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Miyan Kuka (Soup)",
    image: "/miyan-kuka2.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Miyan Taushe (Soup)",
    image: "/Miyan Taushe.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Miyan Yakuwa (Soup)",
    image: "/Miyan Yakuwa.webp",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Miyan Zogale (Moringa Soup)",
    image: "/Miyan Zogale (Moringa Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Moi Moi",
    image: "/moi moi.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Red Oil Rice",
    image: "/red oil rice.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Nkwobi",
    image: "/Nkwobi.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofe Nsala (Soup)",
    image: "/nsala.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofada Stew",
    image: "/Ofada Stew.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofe Achara (Soup)",
    image: "/OFE ACHARA.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ogbono Soup",
    image: "/Ogbono Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofe Oha (Soup)",
    image: "/Oha Soup (Ofe Oha).jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Okpa",
    image: "/okpa.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Okra Soup",
    image: "/Okra Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Owo Soup",
    image: "/Owo soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Peanut Sauce",
    image: "/Peanut Sauce Recipe.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Pepper Soup",
    image: "/Pepper Soup.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Spaghetti",
    image: "/Spaghetti.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Suya",
    image: "suya.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ugba",
    image: "/Ugba.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ukodo",
    image: "/Ukodo.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Vegetable Sauce",
    image: "/vegetable sauce.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Waina",
    image: "/Waina.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Yam Porridge",
    image: "/yam.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Beans and Plaintain",
    image: "/Beans.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Beef Stew",
    image: "/Beef Stew.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Pap",
    image: "/pap.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Potato Porridge",
    image: "Potato Porridge.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Plantain Moi-moi (Ukpo Ogede)",
    image: "/Plantain Moi Moi (Ukpo Ogede).jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "YARIMATA-YAM",
    image: "/YARIMATA-YAM RECIPE.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Achicha-Ede",
    image: "/achicha-ede.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Agidi Eko",
    image: "/agidi-eko.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Agidi Jollof",
    image: "/agidi-jollof.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Boiled-white-coconut-rice",
    image: "/boiled-white-coconut-rice.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofe Akwu (Banga Stew)",
    image: "/Ofe Akwu (Banga Stew).jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Ofe Ugba (Oil Bean Soup)",
    image: "/Ofe Ugba (Oil Bean Soup).jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Peanut Soup",
    image: "/peanut_soup.webp",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Pepper Stew",
    image: "/pepper-stew.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Snail Soup (Ofe Ejula)",
    image: "/Snail soup, or “Ofe ejula,.webp",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Acha (Fonio) Swallow",
    image: "/Acha (Fonio).jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Amala (Swallow)",
    image: "/Amala.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Coleslaw Salad",
    image: "/coleselaw.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Eba (Swallow)",
    image: "/eba.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Fufu (Swallow)",
    image: "/fufu.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Plantain Swallow",
    image: "/Plantain Fufu.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Pounded Yam (Swallow)",
    image: "/Pounded Yam.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Salad",
    image: "/salad.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Semovita Semo (Swallow)",
    image: "/semo.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Tuwo Shinkafa (Swallow)",
    image: "/Tuwo Shinkafa.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Starch (Swallow)",
    image: "/starch.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "wheat Swallow",
    image: "/wheat swallow.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "",
    image: "",
    ingredient: [],
    desc: [],
  },
];
