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
