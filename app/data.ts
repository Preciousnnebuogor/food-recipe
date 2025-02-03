export type IFood = {
  foodname: string;
  image: string;
  ingredient: string[];
  desc: string[];
  category: string;
};

export const FoodList: IFood[] = [
  {
    foodname: "Abacha (African Salad)",
    image: "/Abacha.jpg",
    category: "snack",
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
    category: "beans",
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
    category: "snack",
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
    category: "swallow",
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
    category: "soup",
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
    category: "snack",
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
    category: "rice",
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
    category: "soup",
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
    category: "soup",
    ingredient: [
      `2 kg cow head meat,
3 cups washed bitter leaves,
½ cup of ground Crayfish,
Maggi or knorr seasoning (3 cubes
1 tbsp Ogiri a product of castor seeds(optional),
200 g Dry fish 2 medium sizes,
200 g Stockfish head,
300 ml palm oil,
Salt and pepper to taste,
Cocoa-yam cooked and pounded,
½ cup ground ofor Alternative thickener.`,
    ],
    desc: [
      `Season your meat with a teaspoon of salt, 2 seasoning cubes and half cup of sliced onions. Let the meat boil for ten minutes, add 3 cups of water and let it cook till tender.
Add the washed dried fish, stockfish and add 6 cups of water. The palm oil should follow. Allow the soup to boil before adding the ground crayfish, a seasoning cube, salt and pepper to taste.
The cocoyam (pounded) and ogiri should be added at this point.
The cocoyam should dissolve in about 10 minutes, if it is not thick enough, one or two extra spoons of ofor would do it.
Then add the bitter leaves (pre-washed). Stir and taste for salt.
Allow your soup to simmer on medium heat for 6 minutes and you are done with making Bitter leave the soup.`,
    ],
  },
  {
    foodname: "Boli and Kpomo Sauce",
    image: "/Boli.jpg",
    category: "snack",
    ingredient: [
      `Pomo,
Onions,
Palm oil,
Tomatoes,
Pepper,
Salt,
Seasoning,`,
    ],
    desc: [
      `Roast Plantain.
Add palm oil in frying pan,
Add onions once palm oil is hot,
Add tomatoes and pepper,
Add pomo,
Add seasoning,
Add salt,
Add crayfish(optional),
Cut roasted plantain into pieces,
Add Pomo Sauce,
Enjoy with your choice drink!!!`,
    ],
  },
  {
    foodname: "Catfish Pepper Soup",
    image: "/Catfish Peppersoup.jpg",
    category: "soup",
    ingredient: [
      `1 medium-sized catfish (1.2KG),
Half cup of sliced onions,
vegatable(Scent leave or Utazi leave) optional,
1 seasoning cube.
Your spices.
Teaspoon (fish seasoning).
Half cup of ground crayfish.
1 teaspoon of Paprika powder (optional)
Fresh pepper
Salt to taste.`,
    ],
    desc: [
      `Combine the crayfish and two scotch bonnet peppers, pound or grind them together. together with a mortar and pestle. Also slice the utazi leaves, onions, scent leaves and set aside in bowls.
As always, we start by washing the catfish. Pour almost boiled water over the cut fish and wash to remove the slimy outer skin.
Transfer the washed catfish into the cooking pot. (it is better to use a small pot so the fish parts are very close to each other) This way, they will cook better.
Add 3 cups of water 700ml, half teaspoon of salt, followed by 1 seasoning cubes, half teaspoon fish seasoning spice, ground crayfish, and pepper.
Allow boiling for 7 minutes then add the paprika powder.
Taste for salt and pepper, you can add more pepper if you like.
Allow a minute
Add the leaves, allow to simmer for 3 minutes and you are done with this catfish recipe for pepper soup.`,
    ],
  },
  {
    foodname: "Coconut Fried Rice ",
    image: "/Coconut Fried Rice.jpg",
    category: "rice",
    ingredient: [
      `2 cups,
1 ½ cups homemade or shop-bought coconut milk
11/2 cups chicken stock,
2 cups of frozen mixed vegetables,
2 mixed chillies sliced substitute with red and green bell peppers,
½ cup liver boiled, cubed and fried. optional,
150 g sweet corn,
1 teaspoon curry powder,
1 teaspoon thyme,
1 teaspoon parsley optional,
4 tablespoons of vegetable oil use less oil if you are 
you using chicken stock that already contains oil,
Salt to taste,
Chicken bouillon powder optional,
½ cup spring onions chopped,
1 medium-sized onion sliced.`,
    ],
    desc: [
      `Rinse the rice with hot water until water runs clear
Place a pan on medium heat, add coconut milk, chicken stock and rinsed rice and mix to combine. 
(Top up with water if need be, the liquid level should be about an inch higher than the rice) 
reduce the heat and bring the rice to boil for about 8-10 minutes.
Add curry powder, thyme, parsley, chicken bouillon if using and salt to taste. Mix everything 
together till well combined.
Reduce the heat and cook rice until rice is fluffy, tender and light. Once the rice is cooked,
 add the chopped chillies to the rice and stir in to combine. Take the rice off the heat and set aside`,
    ],
  },
  {
    foodname: "Curry Sauce",
    image: "/curry sauce.jpg",
    category: "sauce",
    ingredient: [
      `1 carrot,
1 onion,
3 mushrooms,
½ green bell pepper,
½ red bell pepper,
6 lumps of chicken (soft chicken),
1 tablespoon corn flour/starch (thickener),
1 teaspoon thyme,
2 big stock cubes,
2 teaspoons Nigerian curry powder,
Salt to taste.
(Cut the red, green peppers, onions and mushroom into long thin slices.
Cut the carrot into thin half moons)`,
    ],
    desc: [
      `Set the pieces of chicken in a pot.
Add the stock cubes (crushed), thyme and the half of the onion that you cut into tiny pieces.
Pour water to the same level as the contents of the pot and start cooking on high heat.
While that is cooking, mix the corn flour/starch with a small quantity of water to get the consistency of evaporated milk. Or a little bit more watery than evaporated milk.
When the chicken is cooked, take them off from the pot and set aside. Leave the stock (water from cooking the chicken) in the pot.
Add the curry powder, the carrot and mushrooms
Stir, cover and continue cooking, again on high heat.
Once it boils, add the peppers and the other half of the onion.
Stir and continue cooking for 90 seconds.
Add the thickener. Stir and add the chicken.
Stir and add salt if necessary and it's done!`,
    ],
  },
  {
    foodname: "Edikaikong (Soup)",
    image: "/Edikaikong Soup.jpg",
    category: "soup",
    ingredient: [
      `Waterleaf 12 cups,
Fluted pumpkin ugwu leaf (8 cups),
2 cups palm oil,
1 Stockfish head medium size,
200 g Dried fish or roasted fish,
1 cup of ground or pounded crayfish,
2 kg assorted meat,
Salt and pepper to taste,
4 Seasoning cubes,
1 cup of Periwinkles optional,
2 spoons of ofor or achi,
Half cup of onions.`,
    ],
    desc: [
      `Using a sharp knife and chopping board, slice the water leaves and fluted pumpkin to tiny bits, wash and set aside in different bowls.
Season your meat with 2 seasoning cubes, onions and a teaspoon of salt. Allow to the meat to boil for 10 minutes, then add water and let it cook till it becomes soft and the water is almost dried.
Add 2 cups of Palm oil (500ml) to the cooked meat in the pot while still on heat.
Salt to taste - be sure the soup is boiling in oil, no water then add the water leaves.
Stir for 3-5 minutes. you can add them little by little. Add the ugu (fluted pumpkin) leaves.
The pounded crayfish/pepper, periwinkles, 1 seasoning cube should follow.
Stir and taste for salt, you can add another seasoning cube. Allow simmering for 3-5 minutes and you have Nigeria's most popular
`,
    ],
  },
  {
    foodname: "Efo Riro (Soup)",
    image: "/Efo Riro.jpg",
    category: "soup",
    ingredient: [
      `8 cups Sliced Spinach leaves,
6 pieces stock fish ear,
1 KG assorted meat,
1 cup of sliced/ground tatashe,
quater cup of sliced pepper,
half cup of sliced onions,
Half Cup of Ground Crayfish,
2 tbsp Iru locust beans,
smoked fish 2-3 medium,
200 ml Palm oil,
3 Seasoning cubes.`,
    ],
    desc: [
      `Wash the assorted meat and season with salt, sliced onions, 2 seasoning cubes, set on heat and allow to cook for 35 minutes. Add water in between until meat is tender.
When the meat is well cooked then add the washed smoked fish, stockfish, add a cup of water and cook for another 10 minutes, The water should be almost dried, don’t allow to burn.
In a separate pot, add 250ml palm oil and allow it to heat. Add the sliced onions, ground pepper/tatashe, stir and allow to fry for another ten minutes while stirring occasionally to avoid burning.
Add the cooked meat/stock fish/smoked fish, stir and allow to simmer for 5 minutes, add the crayfish, iru, a seasoning cube, salt to taste, stir and allow to simmer for 3 minutes.
Now add the sliced spinach, allow to simmer for 3 minutes and you are done.
You can see the video for preparing efo riro below
`,
    ],
  },
  {
    foodname: "Egg Sauce",
    image: "/Egg sauce and Yam.jpg",
    category: "sauce",
    ingredient: [
      `4 eggs.
2 spoons sliced pepper
200 ml Vegetable oil
sliced fresh tomatoes.
Sliced pepper to taste.
1 cup of sliced onions.
1 Seasoning cube
Salt to taste.
2 spoons of Sliced Green Peppers optional`,
    ],
    desc: [
      `Start by Slicing your tomatoes, onions, and peppers using a kitchen knife.
Set frying pan on the heat and add just 200ml of oil (vegetable or olive oil), allow the oil to heat up for few minutes.
Add the sliced tomatoes, peppers, onions and fry.
Add salt to taste, half of a seasoning cube. Stir to avoid burning.
Beat eggs in a separate bowl, add a pinch of salt and pour it into the frying tomatoes.
Allow the egg to fry.
Don't let it get burned. Try breaking into tiny crumbs so you can get an exact replica of what you see here.
Serve egg sauce with boiled white yams.`,
    ],
  },
  {
    foodname: "Ofe Egusi (Soup)",
    image: "/Egusi soup.jpg",
    category: "soup",
    ingredient: [
      `2 cups of Egusi (melon) seeds, ground,
2 cups of assorted meats (chicken, beef, or goat meat), cooked and roasted,
2 cups of spinach chopped,
1 cup of palm oil,
2 medium-sized onion, finely chopped,
4 scotch bonnets,
2 chilli peppers,
2 long bell peppers/tatshe,
Dry Catfish (Optional),
4 cups of stock or water,
1 teaspoon of iru (locust beans, optional),
Seasoning cube,
Salt,
2 tablespoons of ground crayfish,
2 teaspoons of Cameroon pepper,`,
    ],
    desc: [
      `Cook meat: In a pot, cook the assorted meat with onions, seasoning cubes, and salt until tender. Then roast them in the oven at 325degrees for 15 minutes.
Prepare pepper blend: Blend peppers together and boil in a pot till most of the water evaporates ( should take 10 minutes or less). 
Make egusi paste by mixing melon seeds and onion. Make sure paste is slightly thick. 
In a separate pan, heat the palm oil and add the egusi paste. Stir fry for about 5 minutes until the egusi is fried and clumpy. 
Add pepper blend, cooked meat, Cameroon pepper, crayfish, and some water to the pot. Stir well and let it simmer for about 10 minutes.
Add the chopped vegetables and season with more salt and seasoning cubes if needed. Cook for an additional 3 minutes.
Serve the egusi soup with pounded yam, or any other swallow of your choice.`,
    ],
  },
  {
    foodname: "Ekpang Nkukwo (Soup)",
    image: "/Ekpang Nkukwo.jpg",
    category: "soup",
    ingredient: [
      `1 kg water yam,
1.5 kg cocoyam,
Perewinkles,
leaves Ugu/green,
Beef/goatmeat,
Dry fish,
Kpomo,
Crayfish,
Palm oil,
cubes Seasoning,
Salt,
Pepper,
leaves Curry.`,
    ],
    desc: [
      `Peel the water yam and cocoyam. Wash them thoroughly and cut into chunks.
With a wooden greater, great the two together (not sure I used the right verb here).
Once done, mix them thoroughly together with a wooden spoon and then add some seasoning cubes and salt. Mix the paste again to ensure it goes round.
Wash and cut either the ugu leaves or green leaves.
Begin to wrap the paste in the leaves in tiny bits (this may take about an hour or more).
The ekpang is wrapped directly into the pot that you intend to cook with.
Wash and steam your meat. Once it's done, pour them into the wrapped ekpang.
Add the already cut perewinkles, kpomo, dry fish, salt, seasoning cubes, crayfish, and pepper, then set the pot aside.
Boil some water and ensure you bring it to boiling point and then pour it into the pot of ekpang, cover it and put it on fire (PLEASE DO NOT STIR).
Allow the ekpang to cook for about 30 minutes before you stir. Cover it again and still allow it cook.
Keep stirring until you're sure it is well cooked. You can add some more water if it looks too dry.
Once you're sure it is well cooked, add some palm oil and the sliced curry leaves.
Your ekpang dish is ready. Bring it down and enjoy this African goodness.`,
    ],
  },
  {
    foodname: "Ewa Agoyin",
    image: "/Ewa Agoyin.jpg",
    category: "",
    ingredient: [
      `4 cups Beans,
Water,
Bell pepper and habanero,
Onion,
Dry fish,
Crayfish,
Palm oil,
Salt,
Locust beans (optional),
Pomo (cow skin) (optional),
Egg boil one.`,
    ],
    desc: [
      `Place pot on the heat and put some water in it. Then add slice onions to the water, 
      allow the water to boil. Rinse your picked beans and pour it in the pot. Allow the beans 
      to get tender till the water dry off.
Use your Turner or spatula to mash the beans very well in the pot till the beans get thicker. 
That is your ewa agoyin is ready.
Now it's time to make the stew.. Grate your pepper, slice onions. Then place your pot on medium heat, 
add palm oil and allow the oil to heat very well. Add the onions and locust beans, after some seconds pour
 your pepper in it and stir. Add little salt, crayfish,dryfish. Then keep stiring your stew continuously 
 till it gets dry and black and do not get it burnt. Wow! Your ewa agoyin sauce is ready.`,
    ],
  },
  {
    foodname: "Ewedu (Soup)",
    image: "/Ewedu Soup.jpg",
    category: "soup",
    ingredient: [
      `Ewedu leaves (corchorus olitorius/Jute),
Potash (A small sized stone or 1/2 tsp if powdered),
Ijabe (Ewedu Broom) or a blender,
1 cup water,
to taste Salt,
1 cube seasoning,
Egusi,
A few pieces of whole Crayfish,
2 tablespoon Egusi (ground melon seeds),
2-3 teaspoons ground crayfish.`,
    ],
    desc: [
      `
        You can either buy fresh ewedu leaves this means that you have to pick the leaves from the stem, 
        as you only need the leaves. Or you can buy the frozen leaves from the Asian/ African grocery shop,
         this would have have been picked. I have used the fresh one and I've picked and washed the leaves.
          Place the water in a pot, add a small stone of potash or 1/2 tsp of potash and bring water to boil.
          Pour in the washed ewedu leaves and leave to continue boiling in the water, until soft.
          Check to see if the leaves have soften once the are soft enough, pour this in the blender 
          (or you can use what we call Ijabe (this is like a small short broom) to manually chop the leaves). 
          Otherwise, pour in a blender and use the pulse button "P" a couple of times to chop the leaves, 
          you don't want this all smooth.
          Check to see if the leaves have soften once the are soft enough, pour this in the blender 
          (or you can use what we call Ijabe (this is like a small short broom) to manually chop the leaves). 
          Otherwise, pour in a blender and use the pulse button "P" a couple of times to chop the leaves,
           you don't want this all smooth.
           Pulse a few time until thoroughly chopped but not smooth.
Pour the soup back in the pot and place back on heat, add the iru (locust beans).
Add some cray fish, it better to use the ground crayfish. Add 2 tablespoon of grounded egusi 
(grounded melon seeds, this is optional) you can have it plain if you prefer.
Add salt and seasoning cube to taste. Please note that you need to be fast as possible 
so the the soup still maintains its greens and still drawy. The beauty of ewedu is in its drawiness 
i.e its sliminess (if there's any word as such).
Ewedu is usually paired with its twin sister "Gbegiri" and eaten along with Amala. It was once said 
that if yoruba people were to have their own flag it will be in the colours of these 2 soup, 
"Ewedu & Gbegiri" Ewedu is a very rich source of folic acid, my grandma used to make me just eat
 or lets say drink this soup on its own being anaemic. In recent times, the health benefits of ewedu 
 has come to light, it has been known to include vitamins such Vitamin A, B & C and high in fibre.
`,
    ],
  },
  {
    foodname: "Fankasu",
    image: "/Fankasu.jpg",
    category: "snack",
    ingredient: [
      `Flour,
Wheat flour,
Sugar,
Salt,
Yeast,
Pepper,
Onions,
Vegetable oil.`,
    ],
    desc: [
      `
        In a bowl sieve in flour and wheat flour, add little salt, sugar and yeast. 
        Mix with lukewarm water just like puff puff mixture and cover for some minute to rise.
Wash cut onion with pepper and pound, add it to the flour mixture and turn together with clean handheat.
Heat oil in pan on fire, with your hands scoop in the mixture and make a hole in the middle with hands.
Put inside the heated oil and deep fry till brown.
Remove from oil to colander to drain oil and put into cooler to keep hot.
Continue till the pastry finish. Best serve with soup either vegetable or sauce.`,
    ],
  },
  {
    foodname: "Fisherman Soup (Rivers Native Soup)",
    image: "/fisherman soup.jpg",
    category: "soup",
    ingredient: [
      `1/2 kg cat fish cleaned,
10 pieces stock fish ear (nti okporoko),
2 cups sliced uziza leaves,
ball pack Coco yam as thickener,
1 cksp palm oil,
1/2 bulb onion,
3 cubes knorr,
2 cups periwinkles (isam) without shell cleaned.`,
    ],
    desc: [
      `
        To clean your cat fish: place cat fish into a bowl and pour some boiling water 
        into the bowl and cover it. Leave for a few minutes and wash off the slimy exterior.
Put stock fish into a pot roughly blend fresh peppers and pour over stock fish; dice onion into the
 pot add salt and knorr cube allow it steam till stock fish is tender.
Add catfish, palm oil and crayfish, cocoyam which is you thicken base, stir gently; 
and add a little water, allow it cook for about 8 minutes.
Then add prawns, clams, mussels, periwinkles and please stir gently; remember do not cover the pot.
Once the seafood is cooked roughly 10 minutes, add uziza leaf, cover pot and turn 
off heat; allow the steam cook the uziza leaf.
Serve with rice or any swallow of your choice.`,
    ],
  },
  {
    foodname: "Fried Rice",
    image: "/fried rice.jpg",
    category: "rice",
    ingredient: [
      `
        4 cups 🍚 rice,
2 🧅 onions,
4 🥕 carrots,
1/2 cup peas,
3 green 🫑 pepper,
4 red bell peppers,
4 scotch bonnet pepper 🌶,
1 cup chopped spring onions,
3 serving spoon oil,
Seasonings,
Spices,
1 tbl spn turmeric powder.`,
    ],
    desc: [
      ` 
Cook rice until it begins to soften then strain water away, rinse and set aside. Slice the onions 
add into a pot, add in groundnut oil or any cooking oil. Shallow fry the onions then add in the grated
 red bell pepper and scotch pepper. Stir very well then add the the sliced green bell pepper.
 Stir and fry for some minutes then add in the peas, and chopped spring onions. Add in the salt and 
 seasoning to your taste. Add in some spices, curry and thyme, add in the turmeric powder for color 
stir every thing together then add in the cooked rice stir and mix until every thing is properly 
incorporated then cover and allow to cook on low heat.
Until the flavors soak in and the rice is properly cooked then off heat and serve. Happy eating bonne appetite! 😊 😊🍽🌶🍚😋
`,
    ],
  },
  {
    foodname: "Fry Plantain",
    image: "/fry plaintain.jpg",
    category: "snack",
    ingredient: [
      `
        groundnut oil,
        plantain,
        salt.`,
    ],
    desc: [
      `Add 2 tablespoons oil, such as canola or vegetable, to a nonstick skillet to coat the bottom 
      of the pan, and place it on medium heat. When the oil begins to shimmer, add the plantains in 
      batches. Fry the plantains on each side until golden, about 1 1/2 minutes on one side, and about 
      1 minute on the other side`,
    ],
  },

  {
    foodname: "Gbegiri (Soup)",
    image: "/Gbegiri Soup.jpg",
    category: "soup",
    ingredient: [
      `2 Cups Black eyed or Brown Beans,
3 Tablespoons Palm Oil,
2 Tablespoons Crayfish Powder,
1 Tablespoon Locust Beans (Iru),
1-2 Tablespoons Ground Dried pepper (Atagungun),
1 Knorr Cube,
Salt to Taste.`,
    ],
    desc: [
      `
        First, soak then peel your beans. You can peel it by hand or pulse in a jug blender.
Add the peeled beans into a pot, place on a hob on high heat. Add water and cook till very soft and mushy. 
Be careful not to add too much water, You can start with 2 cups and add as you go, if necessary. Do not add salt.
Use an Ijabe (Ewedu broom) to mash up the beans or a whisk. Save time and energy by blending till smooth in your 
jug blender. If you’re using a blender, be sure to wait till the beans has cooled down a bit before blending 
so you don’t risk damaging your blender. Add water to the beans before blending, not too much though, 
say half a cup.
If you used an Ijabe to mash the beans, you’ll need to pass the the paste through a sieve to remove clumps and 
get a really smooth consistency. If your blender is very powerful, you wouldn’t need to do this. As you can see, 
mine was blended smoothly, I’m only sieving to illustrate beetter…
Now, return the paste back into the pot and on low heat this time around. You might need to add a bit of water 
to the paste. Mine was really thick and had to water it down a bit. The consistency should be semi- fluid.
Add the palm oil, Iru, crayfish powder, Knorr cube, ground pepper and salt to taste. Be careful not to add 
too much Palm oil, you only need a little to slightly alter the colour of the paste…
Cook for 5-7 minutes, stir occasionally to prevent burning…
It’s ready when the Gbegiri  soup thickens a bit and the palm oil is well combined with the paste.
Serve with your favourite swallow…`,
    ],
  },
  {
    foodname: "Groudnut Soup",
    image: "/Groundnut Soup.jpg",
    category: "soup",
    ingredient: [
      `Assorted meat/fish,
1 cup raw ground nut (roasted groundnut works as well),
1/2 teaspoon Uziza seed (Piper guneensis),
1 cooking spoon of palmoil,
Scotch bonnet/habanero pepper, blended,
Ugwu (fluted pumpkin leaf),
3 tablespoon Ground crayfish,
cubes Seasoning.`,
    ],
    desc: [
      `Wash and boil the meat/fish with seasoning cubes, salt and onions, boil till tender 
      and keep aside. Ensure you boil the hard meats like kpomo, shaki and fish like stock 
      fish before adding the softer ones.
Pick out the bad ones and toast the raw groundnut in a pan, stirring constantly till they 
become fragrant and turns light brown. Leave to cool down
Grind the toasted groundnut and uziza into a rough powder with a dry mill, processor or mortar and pestle. 
(I didn't bother removing the skin)
In a pot,heat up the oil a bit, add the chopped onions and blended pepper and fry till it dries.
Mix the groundnut with water to form a paste (you can choose not to though, it depends on how you 
do your frying method of egusi), then pour into oil and mix properly.
Add the crayfish and stir properly for about 1 min.
Then add the meat/fish with stock,cover and simmer for 5 minutes stirring at intervals to avoid burning
Cook till the soup thickens and add more water if too thick for your liking.
You can adjust the seasonings and serve the soup at this moment if you don't like 
having leaves in your groundnut but if not, continue to the next step.
Add ugwu leaf, taste and adjust the seasoning, cover the pot and turn off the heat.
Serve with rice or any swallow of choice.`,
    ],
  },
  {
    foodname: "Gurasa",
    image: "Gurasa.jpg",
    category: "snack",
    ingredient: [
      `2 cups flour,
2 tbspn powered milk,
1 tbspn sugar,
1 cup Warm water or as required,
1 tspn active yeast,
1 tspn salt,
Oil,
Tomatoes (chopped),
Onion(chopped),
Capsicum "red n green"(chopped).`,
    ],
    desc: [
      ` Soak yeast wit warm water for 5mins. Mix all the dry ingredients in a bowl n mix. 
      Add soaked yeast n water,mix well and make a very thick n smooth batter. Cover and let it rise for 1hr.
Set a pan on fire n drizzle with some oil, scoop d batter n spread in d pan,toast 
for some minutes, flip when d bottom is golden brown. Remove when both sides are golden.
Gurasa bread is readyyyyy.
Cut it into smaller size.Add chopped veggies,oil,yaji and mix well.
Emmmmm😋😋😋`,
    ],
  },
  {
    foodname: "Garden egg sauce",
    image: "/Garden egg sauce.jpg",
    category: "sauce",
    ingredient: [
      `Garden eggs,
Fresh pepper,
Vegetable oil/palm oil,
Onion,
Smoked fish,
Crayfish (grounded),
cubes Seasoning,
Salt (to taste).
`,
    ],
    desc: [
      `
        Cut off the garden eggs head and wash then boil till tender and pound in a mota with your fresh pepper.
Place a pot of oil on fire, add your diced onion, then your pounded garden eggs and 
pepper and fry for about 5mins.
Add your smoked fish, crayfish, seasoning cubes and salt to taste. Allow to simmer 
for about 3mins more and your garden egg sauce is ready.
Serve with your boiled yam or rice.`,
    ],
  },
  {
    foodname: "Jollof Rice",
    image: "jollof rice.jpg",
    category: "rice",
    ingredient: [
      `1 cup Rice,
1 tbsp Tomatoes paste,
2 Fresh Tomatoes,
2 Fresh Pepper,
1 Red Bell pepper aka Tatashe,
3 onions,
3 Bay Leaf,
1/2 cup Veg Oil,
1/2 tsp salt,
1 stock cube,
Dash thyme.`,
    ],
    desc: [
      `
        Pour warm or hot water over the rice and allow it soak for about 30minutes.
Wash and blend, tomatoes, tatashe, 2 onions, pepper, garlic and ginger, then par boil till water dries out.
Dice the remaining onion and set aside.
Heat up pot and add veg oil and then onions, sauté for about a minute then add tomatoes paste.
Add bay leaf to get the flavor infused into the oil; add the parboiled tomatoes paste Cooke for about 
7 to 8 minutes stir in your salt and stock cube once the paste is cooked through.
Finally add your rice and water; turn to mix everything together and then cover pot with foil paper 
before closing the lid; reduce the flame at this pot and allow the low heat and steam to cook your rice
Check once in while to make sure you don’t need extra water and taste so you can adjust the ingredients.
Remove from heat.`,
    ],
  },
  {
    foodname: "Kiliahi",
    image: "/kilishi.jpg",
    category: "snack",
    ingredient: [
      `1 kg Beef,
1/2 tspn garlic powder,
tspn cloves powder 1/2,
Pinch ginger powder,
Seasoning cubes 2,
Pinch salt,
Spices,
1/2 paprika,
2 Tbspn Suya spice,
1/3 cup oil,
Chopped Cucumber and green pepper(for garnishing).`,
    ],
    desc: [
      `
        Firstly remove all traces of fats from the beef, cut the beef into a very thin fillets try 
        to make it as thin as possible.
On a bowl put seasoning, salt, spices, ginger powder, garlic powder, paprika, cloves powder add oil and mixed.
Dry the fillet of beef under the sun for atleast 6hours then soak it in the kilishi spice solution, 
line your oven tray with a baking sheet and lay the pieces of beef flat on it, set your oven at 180° 
and bake for 20minutes.
On a bowl add your suya spice, pepper, oil and mix.
After 20minutes remove it from the oven and brush it with the suya spice mixture, 
put it back in the oven and bake for additional 10-15 minutes,(at this stage, flip it 
from time to time keep a very good eye on it else it will become bone dry).
Please note that; the kilishi will become drier when it has cooled down completely 
so bear this in mind when deciding the time to bring it out from the oven.
A picture of step 6 of Kilishi(Nigerian beef jerky).
Finally here is our kilishi😋`,
    ],
  },
  {
    foodname: "Kulikuli",
    image: "/kulikuli.jpg",
    category: "snack",
    ingredient: [
      `4 cups groundnut (dry),
3 cups clean sand,
10 dry pepper(ungrounded),
Salt (to taste)`,
    ],
    desc: [
      `
        Get a clean pan, place on heat.
Add 3 cups of clean sand, allow to heat for 8mins.
Add groundnut and roast for 5mins.
Allow to cool then remove the groundnut skin.
Add the pepper and ground the groundnut with table grounding engine then add salt to taste.
Knead thoroughly.
Sprinkle water at intervals then squeeze out the oil until you get enough to fry the mixture.
Place the dough on pastry board.
Roll over with rolling pin.
Cut little by little, place on palm and make it round.
Place pan on heat.
Add the oil from groundnut then allow to heat for 3mins.
Put the kuli kuli then allow to fry for 8mins.
Kuli kuli is ready. Is very very good for snack.`,
    ],
  },
  {
    foodname: "Miyan Geda (Soup)",
    category: "soup",
    image: "Miyan Geda.jpg",
    ingredient: [
      `2 cups of groundnuts peanuts,
Hibiscus white optional,
1 kg Beef,
200 g Dried fish,
3 Tablespoons ground crayfish,
½ cup of sliced onions,
Palm oil 150ml,
Salt to taste,
2 teaspoons daddawa,
Handful vegetable spinach preferably(aleho),
½ Ground tatashe pepper,
½ Sliced spring onions.`,
    ],
    desc: [
      `
        Grind the 2 cups of groundnuts (peanuts) You want fresh peanuts.
Ground the crayfish and set aside.
Soup Ingredients
Season your beef and cook it. Use 2 seasoning cubes, a teaspoon each of garlic, ginger, salt and sliced onions.
Boil your hibiscus leaves seperately (if you will be using it) use just a pinch of potash and water. Boil until it becomes soft. Then wash and set aside.
Wash the dried fish and set aside.
Once your beef is well cooked, Add ground tatashe, palm oil, ground crayfish, allow to boil for some minutes. Add Daddawa (Hausa local seasoning) and taste for salt.
Add 2-3 cups of water, the washed dried fish.
Allow the soup to boil for 3 minutes before adding the ground groundnuts (peanuts)
Add the properly cooked and washed hibiscus leaves and allow to simmer for 3 minutes.
Spring onions and the spinach should follow, allow for a minute, stir.
Taste for salt and you are ready to serve.
Your groundnut soup or miyan geda is ready to serve.`,
    ],
  },
  {
    foodname: "Miyan Karkashi (Soup)",
    image: "/Miyan Karkashi.jpg",
    category: "soup",
    ingredient: [
      `5 pieces chicken,
2 cubes Maggi,
1/4 of beans,
to taste Salt,
G/nut oil,
Hand full of dry karkashi,
1/2 small onions,
1 spoon daddawa,
4 fresh pepper,
2 yellow pepper.`,
    ],
    desc: [
      `Wash bean and allow to cook for 20mins.
Cook chicken for 20muns depending on the chicken,separate the stock from meat,keep stock aside.
In a pot add oil and fry chicken for some mins,add pepper and onion to fry for two mins, 
then add daddawa and pour in your stock water along with a cup of water to cook for 20mins.
Add your dry Karkashi along with cooked beans,Maggi,salt and toka to for 10-15mins.serve with tuwon shinkafa.`,
    ],
  },
  {
    foodname: "Miyan Kuka (Soup)",
    image: "/miyan-kuka2.jpg",
    category: "soup",
    ingredient: [
      `1 litre kuka,
Daddawa,
Onion,
pepper,
Dryfish,
Maggi,
salt,
Crayfish.`,
    ],
    desc: [
      `Pour vegetable oil into a dry pot, when heated through, add sliced onions and fry until soft.
Add your Dryfish, Maggi seasoning, fresh pepper and dawadawa and cook for 10-20 minutes.
Sprinkle kuka powder a little at a time, stirring vigorously with a borrom or wooden spoon.
When you are okay with the thickness, leave it to cook for about 3 minutes and take off the heat.
Serve with Tuwan Masara or any swallow of your choice😋.`,
    ],
  },
  {
    foodname: "Miyan Taushe (Soup)",
    image: "/Miyan Taushe.jpg",
    category: "soup",
    ingredient: [
      `2 cups grounded gyada,
1 cup pumpkin purée,
1/2 teaspoon cumin seeds,
1/2 teaspoon coriander seeds,
1/2 teaspoon oregano,
1/2 teaspoon rosemary,
1 tablespoon curry,
Fresh ginger and garlic,
Oil,
2 cups meat or chicken broth.`,
    ],
    desc: [
      `
        First of all for the marinade, Parsley,wash and cut your meat accordingly I used cow tripe and chicken, 
        curry,rosemay,add salt ginger garlic mixed spices nutmeg onion bell peppers and marinated it over night.
Wash and remove the seeds of your scotch bonnet and bell peppers,coriander seeds cut the 
onions and blend (coarsely).
Boil the meat till soft drain the stock from the meat and set aside.
In a pot add your oil followed by your blended peppers and onion add maggi and cook till the water evaporates, 
next add the reserved stock, pumkin,water, spices and the seasonings mentioned above and the groundnut 
(I blend mine) allow it to cook till the nut is soft.
Add your meat, the vegetable, the chopped parsley slices onions ginger and garlic 
and allow it to simmer for few more minutes.
The scent will probably fill your entire house by now the unique flavor, try it and taste the difference
Important note: *make sure you toast the seeds before grinding them that’s 
what make the soup more flavorful (especially the nutmeg).
`,
    ],
  },
  {
    foodname: "Miyan Yakuwa (Soup)",
    image: "/Miyan Yakuwa.webp",
    category: "soup",
    ingredient: [
      `1 big onion,
2 big tomatoes,
1 big tattase,
1 pepper,
Oil,
Beef
Maggi, salt, a pinch of sugar,
leaves Sorrel(yakuwa) and spinach(alayho-optional),
Blended groundnut.
`,
    ],
    desc: [
      `Cut your onion, tomatoes, tattase, pepper and beef into a pot, put a little kanwa 
      (potash) and add water. Allow it to cook until it melts. Add oil and other ingredients to make a stew.
Cut your sorrel and spinach, boil it in a pot until soft, mix it with the blended groundnut.
Put the mixture into the stew and add a pinch of sugar, add water and allow it to cook.`,
    ],
  },
  {
    foodname: "Miyan Zogale (Moringa Soup)",
    image: "/Miyan Zogale (Moringa Soup.jpg",
    category: "soup",
    ingredient: [
      `Grounded melon,
Pepper,tomatos,
Crayfish,
Onion,
Vegetable oil(decided to use veg oil,instead of palm oil),
Ginger/garlic,
Salt,
Maggi,
Dry daddawa(Hausa locust beans).`,
    ],
    desc: [
      `
        Get all your ingredients sets aside,cooked meat,grinded groundnuts, grinded melon, 
        pepper blended,daddawa, and others
Add veg oil in a pot,diced onion,pour in pepper,meat,and daddawa,crayfish and allow 
to cook again,add stock cover and allow to summer for 2min
Add in melon,and allow to cook for 3min,then you add in d grinded groundnut too,mix to avoid burning,
add little water if soup thick,cover and allow melon and groundnut cook for 15min
Uncover pot to check if soup is cooked,wash soak moringa in salt water and add to d 
soup,stir,cover and allow to summer for 2min
A picture of step 4 of Moringa soup(miyan zogale).
Serve soup with Eba,semo,waina e.t.c`,
    ],
  },
  {
    foodname: "Moi Moi",
    image: "/moi moi.jpg",
    category: "beans",
    ingredient: [
      `4 cups Bean,
2 bell pepper,
1 medium onion,
Red pepper,
Boiled Egg,
Boil Fish,
Oil, maggi, curry, thyme, salt,
Nylon or Container or Plantain leaf `,
    ],
    desc: [
      `Put your beans into a clean bowl, add water and let it soak for 5 minute, peel the back and wash thoroughly.
Add washed and chopped onion, bell pepper and red pepper to the washed beans. You can add garlic if interested.
Add water and blend or grind till it is very smooth.
Add all the ingredients and oil to your desired taste. you can add crayfish, 
boiled egg or fried fish if interested.
Add some water and turn till all the ingredients are mixed completely.
Put some quantity into a (Nylon, Container or Plantain leaf), add your boiled eye and fish and tie them nicely. some people use 
small bowls. Put them into a clean pot and put on stove. Let it cook for one hour.
And our moi moi is ready, just a little ingredient but is looks and tastes yummy😋😋😋.
`,
    ],
  },
  {
    foodname: "Red Oil Rice",
    image: "/red oil rice.jpg",
    category: "rice",
    ingredient: [
      `
        4 cups Rice,
Onion 2medium,
Habanero pepper as desired,
1 sachet of tomato paste,
Iru(locust),
Crayfish half cup,
Palm oil half a cup,
Stock seasoning cubes 5,
Dried or grilled kpanla fish as desired,
Meat and other proteins as desired,
leaves Pumpkins,
(Ugwu)or scent leave,
1/2 teaspoon Salt.`,
    ],
    desc: [
      `Wash and per boil the rice.
Blend pepper,onion together.
Wash and boil the meat,kpomo and dry fish or kpanla.
Heat your palm oil.
Pour your blended pepper and onions to fry
Add tomato paste and fry for 5mins.
Add seasoning cubes iru,crayfish and salt to taste then
add water.
Add the per boiled protein and let it boil for 5mins then add your rice.
Stir and cover to cook for at least 30-40min.
3minutes to turn of the heat,wash and add your ugwu or scent leaves.
Note: cook on low heat after 20mins.
Enjoy.`,
    ],
  },
  {
    foodname: "Nkwobi",
    image: "/Nkwobi.jpg",
    category: "snack",
    ingredient: [
      `1 kg Meat cow foot,
2 cubes of knorr,
10 leaves of utazi,
1 tsp Edible potash,
200 ml Palm oil,
1 cup Ugba,
6 Peppers Scotch bonnet,
2 slice Onions,
3 seeds of ehu calabash nutmeg,
Salt to taste.`,
    ],
    desc: [
      `Season the meat with onions, two seasoning cubes and a teaspoon of salt. cook for 45 minutes. 
      15 minutes if you are using a pressure cooker.
You just want the meat soft and easy to chew. The meat stock should be small and thick.
boil the ugba for just 3 minutes with small water to eliminate fermenting bacterias.
Disolve the potash in one cup of water and filter into a pot.
Add the palm oil to the pot and stir very well, it should thicken and become yellow.
To the same pot, add ground crayfish, Ugba, pepper and salt to taste.
Add a seasoning cube, [utazi leaves, ehu, and peppers] (all pounded together)
Stir together and add the meat.
Stir and serve.
Note: Some of the utazi should be pounded while the rest should be sliced. You add the pounded 
one during the preparation process and used the sliced one for decoration.
`,
    ],
  },
  {
    foodname: "Ofe Nsala (Soup)",
    category: "soup",
    image: "/nsala.jpg",
    ingredient: [
      `1 KG Pounded Yam,
1 cup crayfish,
3 seasoning cubes,
1 teaspoon Uziza seeds,
1 cup sliced uziza leaves,
200 g Dried fish,
8 Giant Snails Optional,
1.3 KG Chicken,
Small dawadawa,
Sliced utazi leaves,
Salt to taste,
2 scotch bonnet peppers.
`,
    ],
    desc: [
      `Peel and boil some yam, then pound and set aside. You need about 1KG of pounded yam.
Combine crayfish, uziza seeds, dawadawa and blend to a powder.
Prepare all the other ingredients (slice the leaves, wash the snails using lime or orange juice)
Season the chicken with 2 stock/seasoning cubes, teaspoon each of ginger and garlic, teaspoon of salt 
and allow to boil then add the washed fish.
Add about 3 cups of water.
Bring to boil, you want the meat and fish soft and easy to chew. Then add the crayfish, uziza seed blend. 
The pepper should be followed after tasting.
You can taste your  soup. You can add an extra seasoning cube or more salt to taste
Introduce the pounded yam in small portions.
Let it dissolve and thicken. Then the leaves should come in.
Let it simmer on low heat for few minutes and you are done.`,
    ],
  },
  {
    foodname: "Ofada Stew",
    image: "/Ofada Stew.jpg",
    category: "rice",
    ingredient: [
      `
        Beef,
        Onions,
        Salt,
        Seasoning cube,
        Galic,
        Pepper (blended),
        Tomatoes (blended),
        Bell pepper(blended),
        Red oil,
        Locust beans,
        Stockfish
        Egg(boiled)`,
    ],
    desc: [
      `Prepare the meat:
Wash and season your chosen meat (beef, goat, cow skin) with salt, stock cubes, onions, 
garlic, and pepper, then boil until almost tender. 
Wash and blend together tomatoes, bell peppers, onions, and garlic to a semi-coarse consistency. 
Heat a large pot with palm oil until it becomes very hot and starts to "bleach" 
(oil separates and floats on top). 
Add chopped onions to the hot oil and fry until softened, then pour in the blended pepper mixture. 
Stir in your pre-boiled meat, locust beans (iru), stockfish, boiled egg and any additional seasonings. 
Cover the pot and simmer until the stew thickens and flavors develop, adjusting salt and pepper to taste. `,
    ],
  },
  {
    foodname: "Ofe Achara (Soup)",
    category: "soup",
    image: "/OFE ACHARA.jpg",
    ingredient: [
      `leaf Okazi,
Achara,
Egusi(melon seed),
Usu,
Crayfish,
Dry fish(catfish/mangala),
Stock fish,
Yellow pepper fresh,
Cameroun pepper,
Okpei(optional).
`,
    ],
    desc: [
      `
        Wash meat and stock fish and cook together adding diced onions, salt,pepper and maggi.
Wash and debone the dry fish and set aside.make sure to wash with hot water and salt to remove all sand and insects.
Blend the melon seed with the usu and okpei.transfer to a bowl,add warm water and marsh with hands till it 
forms a thick paste and oil starts coming out.you can also do this in a mortar and pestle.
Mould the melon paste to small flat balls and transfer to a small cooking pot.add salt,maggi and 
crayfish and some cameroun pepper to give taste to the akpurukpu egusi and cook till the moulded egusi turns white.
When the meat is getting tender,add the kpomo and washed snail,dry fish,crayfish blended 
with the yellow pepper,pour in the cooked melon mould.add palm oil and small thickener and cover to boil.
Check for salt and pepper.if not thick enough add more thickener,turn nd cover to cook.
Add the ukazi leaf and cover to boil.
Cook for another 10 - 20 mins.
Serve with semo,fufu,eva,wheat etc.`,
    ],
  },
  {
    foodname: "Ogbono Soup",
    image: "/Ogbono Soup.jpg",
    category: "soup",
    ingredient: [
      `Pepper,
Kpomo,
Meat,
Dried fish,
Stock fish,
Chicken / Beef,
Locust beans,
Ginger, garlic, 
Crayfish,
Shrimps.`,
    ],
    desc: [
      `
        Grind your ogbono with crayfish and set aside, turning the flame put your pot 
        add your palm oil when hot put in your diced onions fry for a while let say have 
        way, diced into two pour the first one in the grinded ogbono and set aside.
Now add all your cooked meat, fish,pomo, chicken, and stock fish mix for a while then 
add in your water allow it to boil for a very long time then add in your seasoning cube, 
ginger and garlic, locust bean, shrimps and allow to cook too.
Now pour in your ogbono and cook too then check for your seasoning cubes and others
Add in your scent leave and allow to simmer for a while and its done

`,
    ],
  },
  {
    foodname: "Ofe Oha (Soup)",
    image: "/Oha Soup (Ofe Oha).jpg",
    category: "soup",
    ingredient: [
      `Red meat,
Dried meat,
Stockfish,
leaves Oha,
Ogiri igbo,
leaves uziza,
Smoked fish,
Banga fruit or palm oil,
Seasonings,
Cocoyam or powdered cocoyam.`,
    ],
    desc: [
      `
        Wash and cook the red meat with preferred seasonings. when the meat is half way boiling,add 
        the washed stockfish, smoked fish and dry meats to boil together.
Wash and cook the cocoyam, when done, peel off the back and blend until a smooth batter is achieved. 
Add the cocoyam batter and red oil to the meat stock and allow to cook until the batter is well dissolved.
Blend crayfish and pepper,add it to the boiling stock. At this stage,add ogiri igbo to the 
soup and continue cooking.
Slice the uziza leaves,also slice oha leaves not too tiny, better still use ur hand and tear 
the leaves. Wash uziza and oha leaves thoroughly with salt and add to the boiling stock..
Your delicious oha soup is ready to be eaten with any swallow of your choice.
`,
    ],
  },
  {
    foodname: "Okpa",
    image: "/okpa.jpg",
    category: "Beans",
    ingredient: [
      `Okpa flour (1 & ¹/² mudu),
Palm oil (1 bottle),
Scotch bonnet pepper (as desired),
Onions (2 big bulbs),
Seasoning cubes and salt (to taste),
Crayfish (1 cup) grinded,
Luke-warm water.`,
    ],
    desc: [
      `
        Sift Okpa flour in a bowl, add palm oil to it and mix until you get a yellowish mixture, 
        add luke-warm water, mix and dissolve the powder until a smooth paste is formed 
        and there are no lumps. Your mixture shouldn't be too watery or too thick (just right).
Add some salt and seasoning cubes to taste, add chopped onions, blended scotch 
bonnet pepper and crayfish. Mix together. Scoop the paste mixture into banana leaves, 
nylons or foil paper. Here, I use white nylon. Tie and put in a pot of hot boiling water. 
Allow to cook until the Okpa is ready.
Allow to cook until the Okpa is ready. You can add more water to the pot if 
you notice that the water is drying up and the Okpa isn't ready.
Your Okpa is ready! Enjoy.`,
    ],
  },
  {
    foodname: "Okra Soup",
    category: "soup",
    image: "/Okra Soup.jpg",
    ingredient: [
      `Okra
Red oil,
Stock fish,
Dry fish,
Meat (beaf),
Water,
Kponmo,
Crayfish,
Pepper,
Onion,
Seasoning cube,
Salt to taste,
Vegetables.`,
    ],
    desc: [
      `Wash your Okro, cut or grate and set aside.
Cook your meat, stock fish, fish, Ponmo and set aside.
In a pot, add your oil and allow it to heat up, add in your chopped onion and site, pour in your okra stir.
Then add the boiled/ cooked meat, add your pepper, seasoning, salt to taste and stir.
Do not over cook then add your leaves stir and bring down.
`,
    ],
  },
  {
    foodname: "Owo Soup",
    category: "soup",
    image: "/Owo soup.jpg",
    ingredient: [
      `4 pinch Native potash,
3 seasoning cubes,
1/2 kg dried Beef,
1kg Dried fish,
150g Starch,
Big prawn (as desired),
1 spoon full blended Crayfish,
1 tablespoon dried Pepper,
3 Red oil,
Salt.
`,
    ],
    desc: [
      `Boil the meat using just the Maggi cubes and water until 
      almost tender then add the dried fish and cook together until tender.
Add more water to the stock enough for the soup quantity.
Then pour in the blended crayfish and pepper and stir.
Add the big dried prawn then let it boil for 5minutes.
Taste that the seasoning is okay and add the palm oil.
Put the starch in a bowl and add some water.
Add the native salt to the meat stock.
Start pouring in the starch mixture into the stock until the soup is thick. 
Make sure you stir continuosly as you pour in the starch
Take note that when you add the native salt, the soup would foam up.
So use a pot big enough and be stirring as you add the native salt.
Do not cover with the lid and allow to cook for 2-3minutes and your Own soup is ready.
`,
    ],
  },

  {
    foodname: "Pepper Soup",
    category: "soup",
    image: "/Pepper Soup.jpg",
    ingredient: [
      `1kg chicken (Use hard chicken (hen)),
1 tablespoon ground ehu (calabash nutmeg),
3 small seasoning cubes (chicken flavour),
Scent leaves,
Habanero pepper (to taste),
Sweet pepper or tatashe (see video below for quantity),
Red onions (Peel and cut the onion into 4 big chunks),
1 teaspoon thyme (optional),
Salt (to taste).`,
    ],
    desc: [
      `Put the pieces of chicken in a pot.
Add thyme, ground ehu and the seasoning cubes (crushed).
Turn on the heat to medium and start steaming while stirring till the pieces of chicken have gotten a good steam.
Add the chunks of onion, pour water to cover the contents of the pot, cover and start cooking till the chicken is soft. Top up the water when necessary while cooking.
When the chicken is done, take out the now deflated chunks of onion. The reason we used chunks of onion is because you don’t want pieces of onion in your Nigerian Pepper Soup.
Add the chopped peppers and vegetables.
Leave to boil for 3 to 5 minutes.
Add salt to your taste and that’s it!`,
    ],
  },
  {
    foodname: "Spaghetti",
    category: "rice",
    image: "/Spaghetti.jpg",
    ingredient: [],
    desc: [],
  },
  {
    foodname: "Suya",
    image: "suya.jpg",
    category: "snack",
    ingredient: [
      `Beef (1KG),
Suya Spice (Suya powder),
2 seasoning cubes,
Salt to Taste,
Ground dried pepper (optional),
Suya sticks (optional),,
vegetable oil (100ml)
Griller.`,
    ],
    desc: [
      `Wash the beef properly and slice into thin fillets. You can easily do this with a kitchen knife.
Transfer 5 spoons of the suya (spice) to a clean dry plate and add 2 seasoning cubes plus a half teaspoon of salt to it, mix them properly together, and set aside. You will need to taste it to find out that it actually tastes like what you get from the mallam.
Stake the beef on the sticks and sprinkle the mixed spice all around it, sprinkle evenly on both sides, and begin with the grilling part.
Use a kitchen brush to rob the vegetable oil on the beef before grilling; this actually helps the grilling process.
Apply more of the spices.
Grill your suya using the local or electric grill. You can also use your kitchen oven if it has a grill compartment. I used my kitchen oven.
Use a kitchen brush to rob the vegetable oil on the beef before grilling; this actually helps the grilling process.
Apply more of the spices.
Grill your suya using the local or electric grill. You can also use your kitchen oven if it has a grill compartment. I used my kitchen oven.
Turn every ten minutes while it grills. After twenty minutes, you will need to apply more of the spices/vegetable oil again. Grill for another 20 minutes, and you just made Suya!
Serve with onions, pepper, cabbage, tomatoes, etc.
`,
    ],
  },
  {
    foodname: "Ugba",
    image: "/Ugba.jpg",
    category: "snack",
    ingredient: [
      `2 cups ugba,
1 tsp potashed powder,
1 cksp palm oil,
2 tbsp blended pepper,
1 bulb onion dice,
1/2 cup crayfish,
1 cup kpomo diced / fried fish,
utazi leaf diced,
 Salt(to taste),
2 knorr cube,
`,
    ],
    desc: [
      `Pour potash in a small bowl and add water soak.
In a medium pot pour in Palm oil and stir in potash water and stir to get a yellow consistency sauce once it thick and yellow.
Add salt, knorr cube, crayfish, pepper and onion and stir.
Add ugba, kpomo, taste to confirm consistency then add the utazi leaf mix in together and serve.`,
    ],
  },
  {
    foodname: "Ukodo",
    image: "/Ukodo.jpg",
    category: "soup",
    ingredient: [
      `1 kg goat meat,
1 small tuber of yam,
2 tablespoon grounded crayfish,
Dry grounded pepper,
1 tablespoon pepper soup spices,
2 seasoning cube,
1 cup shredded dry fish,
Scent leaf,
Salt (to taste).`,
    ],
    desc: [
      `Wash your meat and put in a pot, add salt some pepper soup spices then add little water to it and boil till tender, you can be topping up the water till it's done.
Next top up the meat with in the pot with about two litres of water.
Peel the yam, cut and add to the pot.
Add dry pepper, crayfish, dry fish, salt knorr cube and the remaining pepper soup spices.
Cook till the yam is done, add scent leaf, taste and adjust then bring down.
Note: you can serve along side with palm oil.`,
    ],
  },
  {
    foodname: "Vegetable Sauce",
    image: "/vegetable sauce.jpg",
    category: "sauce",
    ingredient: [
      `1/2 Cup Palm oil,
Fresh tomatoes: 4 pieces (chopped),
Fresh pepper: 3 pieces (roughly blended),
Crayfish: ¼ Cup (blended),
Smoked fish: 1 Cup (washed and deboned),
1/2 tablespoon Seasoning,
1 tablespoon Salt,
Ugu/water leaf/green leaf or other vegetable of your choice`,
    ],
    desc: [
      `In a pot set on medium heat, pour in palm oil, allow to heat up a bit, then add chopped onion.
Next, add chopped tomatoes, blended pepper, and stir fry for two minutes.
Add blended crayfish, washed and deboned smoked fish, seasoning, and salt the stir fry for 5 minutes.
Add washed and sliced ugu leaves, and stir to combine all well.
Turn off the heat and your vegetable sauce is ready.
Serve with any meal of your choice.`,
    ],
  },
  {
    foodname: "Waina",
    image: "/Waina.jpg",
    category: "snack",
    ingredient: [
      `4 cups white rice,
1 cup normal rice (cook),
1 tbsp yeast,
1 tsp baking powder,
Sugar to taste,
Salt to taste,
Medium size onion,
Oil for frying,`,
    ],
    desc: [
      `Wash and soak rice overnight, in the morning wash rice again add in cook rice, yeast and blend till smooth.
Add water to adjust the thickness then place in a warm place to rise, add in sugar, baking powder, salt, 
onion and stir well.
Heat the masa pan add some veg oil in each section of the pan, scoop the masa batter and let in cook till 
golden brown then turn the other side and allow it to cook till golden brown again.`,
    ],
  },
  {
    foodname: "Yam Porridge",
    image: "/yam.jpg",
    category: "rice",
    ingredient: [
      `1 kg white yam (Peel and cut the yam tuber into medium sizes. Wash the yam cubes and place in a sizeable pot.)
Red palm Oil (to colour),
1 smoked fish (mackerel) (If using dry fish, soak and pick the bones.),
1 tablespoon ground crayfish,
1 medium onion (cut the onions into tiny pieces),
Chilli Pepper (Grind or blend the chilli pepper.)
Salt (to taste),
2 seasoning cubes,
`,
    ],
    desc: [
      `Pour enough water to cover the yam cubes and start cooking at medium to high heat. If you are using dry fish, add it now.
When the yams have got a good boil, add the onions, ground crayfish, pepper, stock cubes, palm oil and the smoked fish.
Cover the pot and continue cooking till the yam is done.
Add salt to taste and stir very well. Cook at high heat for about 5 minutes.`,
    ],
  },
  {
    foodname: "Beans and Plantain",
    image: "/Beans.jpg",
    category: "beans",
    ingredient: [
      `3 cups of brown/White beans
1 bulb of onion
1 cup palm oil
1 Large,fresh tomatoes
1 red bell pepper 
1 seasoning cube
2 heaped tablespoon of crayfish
1 red chilli 
 Salt (to taste)`,
    ],
    desc: [
      `Pick the dirt in the beans, then wash put in a pot, add water, half bulb of 
      onion and salt then set on fire and start cooking, top up water as you cook then cook till done.
While the beans is cooking, blend the pepper and tomatoes then set aside for later use.
When the beans is cooked, add one cup of palm oil in a sauce big sauce pan then heat for few seconds, 
add diced onion, at this point add the blended pepper and continue frying till oil starts to float on top, 
that's a sign that it's fried.
Next, add the blended crayfish and seasoning then add the cooked beans and start to stir for about five minutes
Lower your heat and let it simmer for another three minutes, taste and adjust then put off the heat`,
    ],
  },
  {
    foodname: "Beef Stew",
    image: "/Beef Stew.jpg",
    category: "sauce",
    ingredient: [
      `
      3 red bell peppers,
400 g canned chopped tomatoes,
1 medium onion,
3 scotch Bonnet,
3 tsp chicken bouillon powder use according to preference,
1 tsp salt,
1 tsp oregano optional,
1 kg beef,
1 cup veg oil,
½ tsp curry optional,
½ tsp thyme optional,`,
    ],
    desc: [
      `Boil beef with 2tsp bouillon powder, ½ tsp salt and chopped onion, oregano and boil till tender. This should take between 20 minutes or longer depending on the cut of meat used. Tougher meat would take longer to cook. Take the beef out of the stock, sieve the stock to get rid of scum and reserve for later
Place a saucepan on medium heat, add vegetable oil and heat till hot, carefully drop the meat into the hot oil and fry until golden brown. You may choose to grill the meat for healthier option
Place the fried beef on a kitchen towel and move on to cooking the stew
To the hot oil, carefully add the pepper mix, stir to combine, cover the pan with a lid and cook for 10 minutes. Stir to combine, if the stew is becoming thick, add beef stock or water to avoid burning. (Remember this is fried stew so you only need to add little water/stock at a time if using at all)
Add curry and thyme or any other spices you choose to add and stir to combine.
Add bouillon powder or salt (you can use the combination of both but be careful, so you don’t overdo it. Remember you have added salt and bouillon to boil the beef. Also, if you have added the beef stock to the stew, you might not need to add salt or bouillon powder)
Return the fried beef to the stew, stir until well combined and continue to simmer for another 10 to 15 minutes or until oil floats on top of the stew.
Turn off the heat and serve stew warm with side of choice.
`,
    ],
  },
  {
    foodname: "Pap",
    image: "/pap.jpg",
    category: "snack",
    ingredient: [
      `Pap,
Water (Hot and Cold),
Evaporated Milk (Peak Milk),
Sugar (to taste).`,
    ],
    desc: [
      `Put some lumps of akamu/ogi/pap into a sizeable bowl. Akamu rises during preparation so you should use a bowl big enough to contain the meal in its risen state. If in doubt, use a very big bowl, with time, you will learn which quantity can comfortably fit is which bowl size.
Use a tablespoon to crush the lumps of ogi into very small pieces.
Add cool water in small quantities and mix till you have a medium consistency with no lumps. Your aim should be to mix the akamu as thick as possible. See the video below.
Put a kettle of water to boil. Make sure the water will be enough. It is better to boil too much water than not have enough water when making akamu.
Just before the water boils, stir the mix very well because some of the ogi may have settled at the bottom of the bowl. If not stirred well, this is the major cause of lumps when you start making it.
Once the water boils, pour it slowly but steadily in a circular motion into the bowl of akamu and stir at the same time. Pouring the hot water slowly and stirring at the same is very important because this prevents lumps.
Once you see the mixture setting, stop stirring and reduce the flow of water you are pouring till the akamu has completely set.
Set the kettle aside and stir the pap very well. If it is too thick for you, you can add more hot water. But be careful else it will become watery. Remember that you will still add liquid evaporated milk.
Add peak evaporated milk and some sugar to taste and stir everything to the way you like it.`,
    ],
  },
  {
    foodname: "Potato Porridge",
    image: "Potato Porridge.jpg",
    category: "rice",
    ingredient: [
      `3 large sweet potatoes,
Dry prawns,
Crayfish,
Fresh bonnet peppers blended,
1 large Onions,
2 cookingspoon spoon palm oil,
Clean water,
Pumpkin and scent leafs mixed,
cubes Seasoning,
Salt.`,
    ],
    desc: [
      `Blend parts of the crayfish with the onions and peppers roughly. Set aside.
Peel the potatoes, dice them as desired.
Pour water in a clean pot enough to cook the potatoes. Place it on heat.
Add the blended crayfish and wash the other parts with the dry prawns and also add to the water.
Immediately it starts heating up or boiling, add the diced potatoes, seasoning cubes and cover to cook.
Keep an eye on it because it cooks in about 15-20minutes. If you feel you need you porridge more watery then add more water to it to get that.
After 10 minutes add the palm oil, taste for salt and cover. After 15minutes add the sliced pumpkin leafs and scents leafs mix to the porridge. Stir and drop from heat if thick enough.
Any porridge becomes thicker after dropping from heat, so watch the consistency before bringing it down from heat.`,
    ],
  },
  {
    foodname: "Plantain Moi-moi (Ukpo Ogede)",
    image: "/Plantain Moi Moi (Ukpo Ogede).jpg",
    category: "rice",
    ingredient: [
      `2 medium size of over ripe plantain
200 g unripe plantain flour
1 cksp palm oil
1 cksp ground crayfish
1 handful deboned boiled fish
1 medium size onions bulb
2 seasoning cubes
to taste Pepper and salt,
Nylon or Uma leaves`,
    ],
    desc: [
      `Place the unripe plantain flour into a bowl, add a little warm water and mix until you get a smooth paste, set aside.
Peel and slice the over ripe plantain, blend with crayfish, onions and pepper into a smooth paste and pour into the bowl of unripe plantain flour mix thoroughly and add a little warm water to get a lighter but not watery consistency.
Add palm oil, Maggi and salt, mix and scoop into your nylon or any containers you wish to use (nylon is not advisable) put your fish and tie, continue till you finished all. Cook for 45minutes and off gas.`,
    ],
  },
  {
    foodname: "YARIMATA-YAM",
    image: "/YARIMATA-YAM RECIPE.jpg",
    category: "sauce",
    ingredient: [
      `3 slices yam,
2 cups flour,
4 eggs,
1 onion diced,
2 fresh pepper diced,
1 green bell pepper diced,
1 tin peak milk,
Dash dry herbs,
1 stock cube,
Veg oil for frying,
1 garlic diced,
 Salt (to taste).`,
    ],
    desc: [
      `Slice yam into desired shapes and set aside, break eggs into a lag bowl and whisk set aside once done.
Parboil yam for about 5 to 7 minutes, drain the water and run cold water over the yam to stop the cooking 
process then set aside to cool off.
Add milk into the whisked egg, add pepper, onion, garlic, dry herbs and salt, flour then mix everything 
together, if the consistency is too thick, add a little water till you get the right consistency then finally add green bell pepper.
Heat up a shallow pot and add veg oil for frying. Once it’s hot you can start frying. 
Get another plate and add the remaining 1/2cup flour, spice to flour to your desire taste or leave it plain.
Dust your yam into the plain flour then dip it into the batter and then fry. 
Turn to the other side after 3 to 4 minutes and do the same till it’s golden brown, 
remove from heat and complete the same method for the remaining batch.
Serve with any sauce of your choice.
`,
    ],
  },
  {
    foodname: "Achicha-Ede",
    image: "/achicha-ede.jpg",
    category: "rice",
    ingredient: [
      `3 cups fio-fio(pigeon peas),
3 cups achicha(cocoyam)smashed,
5 milk cups of red oil,
3 handfull of scent leaf,
5 big balls of onions,
2 seasoning cubes,
15 pieces fresh pepper,
4 handfull of ukpaka,
 Salt (to taste),
fish(optional),
nylon(for achicha).`,
    ],
    desc: [
      `Select and wash your pigeon peas.
A picture of step 1 of Achicha and fio-fio(dried cocoyam and pigeon peas).
Put it in a pot and make sure water covers it.
Cook for 30 mins, wash and return it into the pot and start cooking it.
In a bowl of water pour the already crushed cocoyam,allow it to soak for 10mins.
Wash it properly until there is no trace of sand under it,drain it out from water. 
Tie them beat by beat with nylon and put inside the already cooking pot where the pigon peas are.
Allow it to cook for 30mins remove it from fire and let the pigeon peas to cook until is soft,that means is done.
Drain the water in it,untie the cocoyam mix it with the pigeon peas.
In a separate pot or frying pan add red oil allow it to get hot 3 mins is okay.
Add onions,pepper,ukpaka,maggi,scent leaf,salt to taste,allow it to cook for 10 mins.
Mix the already prepared sauce together with the pigeon peas and cocoyam together.Y 
our food is good to go. You can serve it with fried fish if you wish.`,
    ],
  },
  {
    foodname: "Agidi or Eko",
    image: "/agidi-eko.jpg",
    category: "snacks",
    ingredient: [
      `8 cups of corn,
Chiffon cloth,
Bowls,
Lots of clean water,
Uma leaves.`,
    ],
    desc: [
      `Wash the corn and transfer into a cooking pot, add water to cover them and set on heat. Stir occasional and turn off the heat when it is about to boil.
Drain the water and take the corn to the grinding mill, There are lots of places to grind agidi corn in Nigeria for a very little amount of money. You may not use a blender.
Grind the corn and rinse it.
Drape the chiffon cloth over a big bowl and tie it up. Scoop in some ground corn in handful portions and tart rubbing it on the surface while adding water. At some point you will feel just the chaff. Remove it and scoop in more ground corn.
At the point when your hand can feel the water in the bowl from the top of the chiffon cloth, stop adding water and just rinse the ground corn.
Once ground corn is mixed with enough water, the starch will escape into the bowl as you keep robbing on them while the chaff is left on the surface. This should be easy.
Remove the chiffon cloth once you are done and allow the starch in the bowl to sit for up to 3 hours.
After three hours, the starch should have settled at the bottom of the bowl and water on top. 
Decant pour out the clear water and stir what is left with a wooden turner. It should not be as thick as dissolved.
It should be about 2 litters (2000ml) if you used 8 cups of corn. Pour into a pot, 
set on heat and start stirring with a wooden turner. The heat shouldn’t be too much, 
if it is forming solid crumbs, then the heat is too much. Reduce it a little. Continue stirring until 
it looks like prepared pap but maybe a little thicker. This should take about 15 minutes before you get 
to this point. Pour into smaller plates or use a leave to wrap. My video shows you how to use the leaves 
and gives you a visual version of how to make agidi or eko the Nigerian way.
Allow 1-3 hours for the agidi to cool and solidify. Serve with boiled beans and tomato stew. I love it that way. You can also serve with moi moi or akara.
`,
    ],
  },
  {
    foodname: "Agidi Jollof",
    image: "/agidi-jollof.jpg",
    category: "snacks",
    ingredient: [
      `Chewable bones,
Akamu/ogi,
cubes Stock,
Onion,
Curry powder,
Salt,
Fresh pepper,
Uma leaves for the wrapping,
Stew.`,
    ],
    desc: [
      `Wash the uma raced with salt and water then keep one side.
Pound pepper,cut onion.put the soft bones in a pot,add onion and stock cubes.pour in water to the same level as the bone and start cooking.
Add pepper and curry powder stir and simmer for few mins then set aside.
Mix the akamu with water in a pot,add the water bit by bit because it is the best way to get good mixture without lumps.This should be done off the heat.
When done,heat up water.pour in hot water into the akamu mix stir at the same time till it thickens.
Let the heat be low,continue stirring till the agidi is completely solid.
Add the agidi stew add enough quantity to give it a rich red colour.mix the stew till is completely incorporated with the agidi.
Add drops of water to the mix cover and leave to simmer.
Mix again to combine the water and the agidi jollof.dish the agidi on the uma leaves and wrap it up.`,
    ],
  },
  {
    foodname: "Boiled-white-coconut-rice",
    image: "/boiled-white-coconut-rice.jpg",
    category: "rice",
    ingredient: [
      `2 cups parboiled white rice
1 coconut,
½ cup shrimps,
¼ cup green peas,
Salt (to your taste).`,
    ],
    desc: [
      `Use the coconut to make some fresh Coconut Milk. Click here for details.
Set some water in a pot to boil. We will use it to preecook the rice.
When it boils, add the rice and cook on medium heat for about 10 minutes.
Pour it out in a sieve to drain then quickly cool it down with water.
Pour the coconut milk in a clean pot and set it on the stove to boil.
When it boils, add the precooked rice stir and make sure the coconut milk is at the same level as the rice. If not top it up with water. See the video below.
Add salt and the shrimps.
Cover the pot and start cooking on medium heat.
When the liquid is almost dry, add the green peas and continue cooking.
When all the liquid dries up, the rice should be down. That is if you precooked the rice correctly.`,
    ],
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
