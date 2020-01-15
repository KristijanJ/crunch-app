// const recipes = [
//   {
//     id: 1,
//     title: "Classic Green Bean Casserole",
//     description:
//       "It's a dish everyone's expecting on the holidays, but it's so easy to make, you can serve any day.",
//     rating: "4.1 | 21 reviews",
//     photo:
//       "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   },
//   {
//     id: 2,
//     title: "Mom’s Zucchini Bread",
//     description:
//       "What makes this meatloaf so tasty is the addition of a can of tomato soup. Served with roasted potatoes and carrots, this dish is comfort food at it's best.",
//     rating: "4.1 | 21 reviews",
//     photo:
//       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   },
//   {
//     id: 3,
//     title: "Pepperoni Pizza",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nesciunt laudantium necessitatibus quaerat optio labore? Excepturi reiciendis, explicabo quod placeat eligendi est cupiditate id sapiente neque commodi cum. Eum, quia!",
//     rating: "4.1 | 21 reviews",
//     photo:
//       "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   },
//   {
//     id: 4,
//     title: "Classic Green Bean Casserole",
//     description:
//       "It's a dish everyone's expecting on the holidays, but it's so easy to make, you can serve any day.",
//     rating: "4.1 | 21 reviews",
//     photo:
//       "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   },
//   {
//     id: 5,
//     title: "Mom’s Zucchini Bread",
//     description:
//       "What makes this meatloaf so tasty is the addition of a can of tomato soup. Served with roasted potatoes and carrots, this dish is comfort food at it's best.",
//     rating: "4.1 | 21 reviews",
//     photo:
//       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   },
//   {
//     id: 6,
//     title: "Pepperoni Pizza",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nesciunt laudantium necessitatibus quaerat optio labore? Excepturi reiciendis, explicabo quod placeat eligendi est cupiditate id sapiente neque commodi cum. Eum, quia!",
//     rating: "4.1 | 21 reviews",
//     photo:
//       "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   },
// ];

const recipes = {
  results: [
    {
      id: 485365,
      title:
        "Chicken Spinoccoli – Breaded Stuffed Chicken Breast With Spinach, Broccoli and Cheese",
      readyInMinutes: 65,
      servings: 4,
      image:
        "chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365.jpg",
      imageUrls: [
        "chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365.jpg"
      ]
    },
    {
      id: 107878,
      title: "Garlic Chicken",
      readyInMinutes: 45,
      servings: 4,
      image: "garlic-chicken-2-107878.png",
      imageUrls: ["garlic-chicken-2-107878.png", "garlic_chicken-107878.jpg"]
    },
    {
      id: 110434,
      title: "Chicken Divan",
      readyInMinutes: 50,
      servings: 6,
      image: "chicken-divan-110434.jpg",
      imageUrls: ["chicken-divan-110434.jpg"]
    },
    {
      id: 129383,
      title: "Chicken With Cranberries",
      readyInMinutes: 45,
      servings: 4,
      image: "chicken-with-cranberries-2-129383.jpg",
      imageUrls: ["chicken-with-cranberries-2-129383.jpg"]
    },
    {
      id: 136858,
      title: "Chicken Saltimbocca",
      readyInMinutes: 45,
      servings: 4,
      image: "chicken-saltimbocca-2-136858.png",
      imageUrls: ["chicken-saltimbocca-2-136858.png"]
    },
    {
      id: 143317,
      title: "Teriyaki Chicken",
      readyInMinutes: 305,
      servings: 6,
      image: "teriyaki-chicken-2-143317.jpg",
      imageUrls: [
        "teriyaki-chicken-2-143317.jpg",
        "teriyaki_chicken-143317.jpg"
      ]
    },
    {
      id: 143552,
      title: "Polynesian Chicken",
      readyInMinutes: 125,
      servings: 4,
      image: "polynesian-chicken-2-143552.jpg",
      imageUrls: [
        "polynesian-chicken-2-143552.jpg",
        "polynesian_chicken-143552.jpg"
      ]
    },
    {
      id: 389293,
      title: "Barbecued Chicken",
      readyInMinutes: 75,
      servings: 6,
      image: "Barbecued-Chicken-389293.jpg",
      imageUrls: ["Barbecued-Chicken-389293.jpg"]
    },
    {
      id: 412049,
      title: "Chicken in a Cloud",
      readyInMinutes: 55,
      servings: 8,
      image: "Chicken-in-a-Cloud-412049.jpg",
      imageUrls: ["Chicken-in-a-Cloud-412049.jpg"]
    },
    {
      id: 412156,
      title: "Chicken Scampi",
      readyInMinutes: 25,
      servings: 2,
      image: "Chicken-Scampi-412156.jpg",
      imageUrls: ["Chicken-Scampi-412156.jpg"]
    }
  ],
  baseUri: "https://spoonacular.com/recipeImages/",
  offset: 0,
  number: 10,
  totalResults: 326,
  processingTimeMs: 285,
  expires: 1579202022269,
  isStale: false
};

export default recipes;

export const recipe = {
  vegetarian: false,
  vegan: false,
  glutenFree: true,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 8,
  gaps: "no",
  lowFodmap: false,
  ketogenic: false,
  whole30: false,
  sourceUrl:
    "http://www.epicurious.com/recipes/food/views/Garlic-Chicken-354571",
  spoonacularSourceUrl: "https://spoonacular.com/garlic-chicken-107878",
  aggregateLikes: 2,
  spoonacularScore: 41,
  healthScore: 7,
  creditsText: "Epicurious",
  sourceName: "Epicurious",
  pricePerServing: 171.03,
  extendedIngredients: [
    {
      id: 2004,
      aisle: "Produce;Spices and Seasonings",
      image: "bay-leaves.jpg",
      consitency: "solid",
      name: "bay leaves",
      original: "2 bay leaves",
      originalString: "2 bay leaves",
      originalName: "bay leaves",
      amount: 2,
      unit: "",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 2,
          unitShort: "",
          unitLong: ""
        },
        metric: {
          amount: 2,
          unitShort: "",
          unitLong: ""
        }
      }
    },
    {
      id: 6194,
      aisle: "Canned and Jarred",
      image: "chicken-broth.png",
      consitency: "liquid",
      name: "chicken broth",
      original: "1/2 cup chicken broth",
      originalString: "1/2 cup chicken broth",
      originalName: "chicken broth",
      amount: 0.5,
      unit: "cup",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 118.294,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 11297,
      aisle: "Produce",
      image: "parsley.jpg",
      consitency: "solid",
      name: "fresh flat-leaf parsley",
      original: "Chopped fresh flat-leaf parsley for garnish",
      originalString: "Chopped fresh flat-leaf parsley for garnish",
      originalName: "Chopped fresh flat parsley for garnish",
      amount: 1,
      unit: "leaf",
      meta: ["fresh", "chopped", "for garnish"],
      metaInformation: ["fresh", "chopped", "for garnish"],
      measures: {
        us: {
          amount: 1,
          unitShort: "leaf",
          unitLong: "leave"
        },
        metric: {
          amount: 1,
          unitShort: "leaf",
          unitLong: "leave"
        }
      }
    },
    {
      id: 11215,
      aisle: "Produce",
      image: "garlic.jpg",
      consitency: "solid",
      name: "garlic",
      original: "6 cloves garlic, crushed, plus 2 cloves, minced",
      originalString: "6 cloves garlic, crushed, plus 2 cloves, minced",
      originalName: "garlic, crushed, plus 2 cloves, minced",
      amount: 6,
      unit: "cloves",
      meta: ["minced", "crushed"],
      metaInformation: ["minced", "crushed"],
      measures: {
        us: {
          amount: 6,
          unitShort: "cloves",
          unitLong: "cloves"
        },
        metric: {
          amount: 6,
          unitShort: "cloves",
          unitLong: "cloves"
        }
      }
    },
    {
      id: 4053,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "olive-oil.jpg",
      consitency: "liquid",
      name: "olive oil",
      original: "1/3 cup olive oil",
      originalString: "1/3 cup olive oil",
      originalName: "olive oil",
      amount: 0.3333333333333333,
      unit: "cup",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 0.333,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 78.863,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 1102047,
      aisle: "Spices and Seasonings",
      image: "salt-and-pepper.jpg",
      consitency: "solid",
      name: "salt and pepper",
      original: "Salt and freshly ground black pepper",
      originalString: "Salt and freshly ground black pepper",
      originalName: "Salt and freshly ground black pepper",
      amount: 4,
      unit: "servings",
      meta: ["black", "freshly ground"],
      metaInformation: ["black", "freshly ground"],
      measures: {
        us: {
          amount: 4,
          unitShort: "servings",
          unitLong: "servings"
        },
        metric: {
          amount: 4,
          unitShort: "servings",
          unitLong: "servings"
        }
      }
    },
    {
      id: 10214106,
      aisle: "Alcoholic Beverages",
      image: "dry-sherry.png",
      consitency: "liquid",
      name: "sherry",
      original: "1/2 cup fino or manzanilla sherry",
      originalString: "1/2 cup fino or manzanilla sherry",
      originalName: "fino or manzanilla sherry",
      amount: 0.5,
      unit: "cup",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 118.294,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 5096,
      aisle: "Meat",
      image: "chicken-thighs.png",
      consitency: "solid",
      name: "skinless boneless chicken thighs",
      original:
        "4 boneless, skinless chicken thighs, cut into 1 1/2-inch pieces, or 12 chicken wings, tips removed",
      originalString:
        "4 boneless, skinless chicken thighs, cut into 1 1/2-inch pieces, or 12 chicken wings, tips removed",
      originalName:
        "boneless, skinless chicken thighs, cut into 1 1/2-inch pieces, or 12 chicken wings, tips removed",
      amount: 4,
      unit: "",
      meta: [
        "boneless",
        "skinless",
        "cut into 1 1/2-inch pieces, or 12 chicken wings, tips removed"
      ],
      metaInformation: [
        "boneless",
        "skinless",
        "cut into 1 1/2-inch pieces, or 12 chicken wings, tips removed"
      ],
      measures: {
        us: {
          amount: 4,
          unitShort: "",
          unitLong: ""
        },
        metric: {
          amount: 4,
          unitShort: "",
          unitLong: ""
        }
      }
    },
    {
      id: 1002028,
      aisle: "Spices and Seasonings",
      image: "paprika.jpg",
      consitency: "solid",
      name: "sweet paprika",
      original: "Sweet paprika",
      originalString: "Sweet paprika",
      originalName: "Sweet paprika",
      amount: 4,
      unit: "servings",
      meta: ["sweet"],
      metaInformation: ["sweet"],
      measures: {
        us: {
          amount: 4,
          unitShort: "servings",
          unitLong: "servings"
        },
        metric: {
          amount: 4,
          unitShort: "servings",
          unitLong: "servings"
        }
      }
    },
    {
      id: 2049,
      aisle: "Produce",
      image: "thyme.jpg",
      consitency: "solid",
      name: "thyme sprigs",
      original: "3 fresh thyme sprigs",
      originalString: "3 fresh thyme sprigs",
      originalName: "fresh thyme sprigs",
      amount: 3,
      unit: "",
      meta: ["fresh"],
      metaInformation: ["fresh"],
      measures: {
        us: {
          amount: 3,
          unitShort: "",
          unitLong: ""
        },
        metric: {
          amount: 3,
          unitShort: "",
          unitLong: ""
        }
      }
    }
  ],
  id: 107878,
  title: "Garlic Chicken",
  readyInMinutes: 45,
  servings: 4,
  image: "https://spoonacular.com/recipeImages/107878-556x370.png",
  imageType: "png",
  cuisines: [],
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
  diets: ["gluten free", "dairy free"],
  occasions: [],
  winePairing: {},
  instructions:
    "Preparation Rub the chicken with paprika, salt, and pepper and set aside at room temperature for at least 1 hour or preferably in the refrigerator at least 8 hours or overnight. Preheat the oven to 400°F. In a large sauté pan, heat the oil over medium heat. Add the crushed garlic and cook, stirring, until softened but not colored, 2 minutes. Add the chicken pieces and fry, turning as needed, until golden on both sides, 5 to 8 minutes. You want them nicely colored on the outside but not cooked through. Using a slotted spoon, transfer to paper towels to drain briefly, and then arrange the pieces in a cazuela or baking dish large enough to hold them in a single layer. Remove the crushed garlic from the oil and discard. Return the pan to low heat. Add the minced garlic and cook briefly. Add the thyme, bay leaves, sherry, and broth, raise the heat to high, and bring to a boil. Remove from the heat and pour over the chicken. Bake the chicken until cooked through, 25 to 30 minutes. Remove from the oven and discard the bay leaves and thyme. If the pan juices are thin, transfer to a small saucepan and cook over medium high heat until reduced, and then return to the cazuela. Sprinkle with the parsley and serve at once. Variation: You also can complete the cooking on the stove top. Sauté the minced garlic as directed, return the chicken to the pan, add the sherry and broth, and simmer, uncovered, until most of the liquid has evaporated and the chicken is tender, 15 to 20 minutes Wine Spanish: rosé (Campo de Borja, Navarre), Tempranillo/blend (Rioja, Catalonia)Non-Spanish: rosé (Rhône Valley and Provence, France), Pinot Noir (Oregon, France, New Zealand) From Tapas: Sensational Small Plates from Spain by Joyce Goldstein. Text copyright © 2009 by Joyce Goldstein; food photography © 2009 by Leigh Beisch. Published by Chronicle Books LLC.",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step:
            "Rub the chicken with paprika, salt, and pepper and set aside at room temperature for at least 1 hour or preferably in the refrigerator at least 8 hours or overnight.",
          ingredients: [
            {
              id: 2028,
              name: "paprika",
              image: "paprika.jpg"
            },
            {
              id: 2047,
              name: "salt",
              image: "salt.jpg"
            }
          ],
          equipment: []
        },
        {
          number: 2,
          step: "Preheat the oven to 400°F.",
          ingredients: [],
          equipment: [
            {
              id: 404784,
              name: "oven",
              image: "oven.jpg",
              temperature: {
                number: 400,
                unit: "Fahrenheit"
              }
            }
          ]
        },
        {
          number: 3,
          step: "In a large sauté pan, heat the oil over medium heat.",
          ingredients: [],
          equipment: [
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        },
        {
          number: 4,
          step:
            "Add the crushed garlic and cook, stirring, until softened but not colored, 2 minutes.",
          ingredients: [
            {
              id: 11215,
              name: "garlic",
              image: "garlic.png"
            }
          ],
          equipment: [],
          length: {
            number: 2,
            unit: "minutes"
          }
        },
        {
          number: 5,
          step:
            "Add the chicken pieces and fry, turning as needed, until golden on both sides, 5 to 8 minutes. You want them nicely colored on the outside but not cooked through. Using a slotted spoon, transfer to paper towels to drain briefly, and then arrange the pieces in a cazuela or baking dish large enough to hold them in a single layer.",
          ingredients: [],
          equipment: [
            {
              id: 404636,
              name: "slotted spoon",
              image: "slotted-spoon.jpg"
            },
            {
              id: 405895,
              name: "paper towels",
              image: "paper-towels.jpg"
            },
            {
              id: 404646,
              name: "baking pan",
              image: "roasting-pan.jpg"
            }
          ],
          length: {
            number: 5,
            unit: "minutes"
          }
        },
        {
          number: 6,
          step:
            "Remove the crushed garlic from the oil and discard. Return the pan to low heat.",
          ingredients: [
            {
              id: 11215,
              name: "garlic",
              image: "garlic.png"
            }
          ],
          equipment: [
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        },
        {
          number: 7,
          step: "Add the minced garlic and cook briefly.",
          ingredients: [],
          equipment: []
        },
        {
          number: 8,
          step:
            "Add the thyme, bay leaves, sherry, and broth, raise the heat to high, and bring to a boil.",
          ingredients: [
            {
              id: 2004,
              name: "bay leaves",
              image: "bay-leaves.jpg"
            },
            {
              id: 10214106,
              name: "sherry",
              image: "dry-sherry.png"
            },
            {
              id: 2049,
              name: "thyme",
              image: "thyme.jpg"
            }
          ],
          equipment: []
        },
        {
          number: 9,
          step: "Remove from the heat and pour over the chicken.",
          ingredients: [],
          equipment: []
        },
        {
          number: 10,
          step: "Bake the chicken until cooked through, 25 to 30 minutes.",
          ingredients: [],
          equipment: [],
          length: {
            number: 25,
            unit: "minutes"
          }
        },
        {
          number: 11,
          step:
            "Remove from the oven and discard the bay leaves and thyme. If the pan juices are thin, transfer to a small saucepan and cook over medium high heat until reduced, and then return to the cazuela. Sprinkle with the parsley and serve at once.",
          ingredients: [
            {
              id: 2004,
              name: "bay leaves",
              image: "bay-leaves.jpg"
            },
            {
              id: 11297,
              name: "parsley",
              image: "parsley.jpg"
            },
            {
              id: 2049,
              name: "thyme",
              image: "thyme.jpg"
            }
          ],
          equipment: [
            {
              id: 404669,
              name: "sauce pan",
              image: "sauce-pan.jpg"
            },
            {
              id: 404784,
              name: "oven",
              image: "oven.jpg"
            },
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        }
      ]
    },
    {
      name: "Variation",
      steps: [
        {
          number: 1,
          step:
            "You also can complete the cooking on the stove top. Sauté the minced garlic as directed, return the chicken to the pan, add the sherry and broth, and simmer, uncovered, until most of the liquid has evaporated and the chicken is tender, 15 to 20 minutes",
          ingredients: [
            {
              id: 10214106,
              name: "sherry",
              image: "dry-sherry.png"
            }
          ],
          equipment: [
            {
              id: 404794,
              name: "stove",
              image: "oven.jpg"
            },
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        },
        {
          number: 2,
          step: "Wine",
          ingredients: [],
          equipment: []
        },
        {
          number: 3,
          step:
            "Spanish: rosé (Campo de Borja, Navarre), Tempranillo/blend (Rioja, Catalonia)Non-Spanish: rosé (Rhône Valley and Provence, France), Pinot Noir (Oregon, France, New Zealand)",
          ingredients: [],
          equipment: []
        },
        {
          number: 4,
          step:
            "From Tapas: Sensational Small Plates from Spain by Joyce Goldstein. Text copyright © 2009 by Joyce Goldstein; food photography © 2009 by Leigh Beisch. Published by Chronicle Books LLC.",
          ingredients: [],
          equipment: []
        }
      ]
    }
  ]
};

