# 🍽️ Recipe Library — JavaScript Practice

Welcome to the **Recipe Library Practice Project**! In this project, you'll work with a collection of **cuisines**, **recipes**, and their details (like ingredients and steps). Your goal is to practice working with **nested objects and arrays** in JavaScript.

You'll complete a series of functions to help users explore and interact with this recipe library.

---

## 📚 The Data

The recipe library is stored in a file called `recipeLibrary.js`. It contains an array of cuisines. Each cuisine has:

- A `name` (e.g., `"Italian"`, `"Mexican"`)
- An array of **recipes**
  Each recipe has:
  - `title`
  - `ingredients` (array of strings)
  - `steps` (array of strings)
  - `rating` (number from 1 to 5 in the form of a float (e.g. 1.4))

Example (simplified):

```js
const recipeLibrary = [
  {
    name: "Italian",
    recipes: [
      {
        title: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "pancetta", "pecorino cheese"],
        steps: ["Boil pasta", "Cook pancetta", "Mix eggs and cheese", "Combine everything"],
        rating: 4.7
      },
      ...
    ]
  },
  ...
];
```

⸻

## 📋 Required Challenges

Write the following functions in `challenges.js`:

1. **getAllCuisineNames** — Return an array of all cuisine names (e.g., `["Italian", "Mexican", ...]`).
2. **getRecipesByCuisine(cuisineName)** — Return all recipe titles for a given cuisine name (string).
3. **getAllUniqueIngredients** — Return all unique ingredients used across all recipes (no duplicates).
4. **getHighestRatedRecipe** — Return the highest-rated recipe across all cuisines (return the recipe object).
5. **getRecipesWithIngredient(ingredient)** — Return an array of all recipe titles that use a specific ingredient (case-insensitive).
6. **getCuisinesWithComplexRecipes** — Return an array of cuisines that have at least one recipe with more than 5 ingredients.
7. **getRecipeCountByCuisine** — Return an object where keys are cuisine names and values are the number of recipes in each cuisine.
8. **getAverageRatingByCuisine** — Return an object where keys are cuisine names and values are the average recipe rating (rounded to 2 decimals).
9. **getRecipesThatIncludeBaking** — Return an array of recipes (objects) that include a step mentioning "bake" (case-insensitive).
10. **getTotalRecipeCount** — Return the total number of distinct recipes in the entire library.

## 🌟 Bonus Challenges (Optional)

If you want an extra challenge, try these!

1. **getRecipesByIngredient** — Return an object where keys are ingredients and values are arrays of recipe titles that use that ingredient.
2. **getVegetarianRecipes** — Return an array of recipe titles where all ingredients are vegetarian (assume: no "chicken", "beef", "pork", "fish", "shrimp").
3. **getCuisineWithMostDetailedRecipe** — Return the cuisine that has the recipe with the longest list of steps.

⸻

✅ How to test your work

We’ve included automated tests to check your solutions!

1. Install dependencies:

```bash
npm install
```

2. Run the tests:

```bash
npm test
```

Your goal is to make all the tests pass 🎉

Good luck and have fun!
