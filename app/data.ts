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
    desc: [``],
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
