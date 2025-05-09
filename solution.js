// solutions.js

import { recipeLibrary } from './recipeLibrary.js';

// 1. Get all cuisine names
export function getAllCuisineNames(library) {
  return library.map(cuisine => cuisine.name);
}

// 2. Get recipes by cuisine name
export function getRecipesByCuisine(library, cuisineName) {
  const cuisine = library.find(cuisine => cuisine.name === cuisineName);
  return cuisine ? cuisine.recipes : [];
}

// 3. Get all unique ingredients
export function getAllUniqueIngredients(library) {
  const ingredients = library.flatMap(cuisine => cuisine.recipes.flatMap(recipe => recipe.ingredients));
  return [...new Set(ingredients)];
}

// 4. Get the highest rated recipe
export function getHighestRatedRecipe(library) {
  const allRecipes = library.flatMap(cuisine => cuisine.recipes);
  return allRecipes.reduce((best, recipe) => recipe.rating > best.rating ? recipe : best);
}

// 5. Get recipes with a specific ingredient
export function getRecipesWithIngredient(library, ingredient) {
  return library.flatMap(cuisine =>
    cuisine.recipes.filter(recipe => recipe.ingredients.includes(ingredient))
  );
}

// 6. Get cuisines with complex recipes (5+ steps)
export function getCuisinesWithComplexRecipes(library) {
  return library
    .filter(cuisine => cuisine.recipes.some(recipe => recipe.steps.length >= 5))
    .map(cuisine => cuisine.name);
}

// 7. Get recipe count by cuisine
export function getRecipeCountByCuisine(library) {
  const result = {};
  library.forEach(cuisine => {
    result[cuisine.name] = cuisine.recipes.length;
  });
  return result;
}

// 8. Get average rating by cuisine
export function getAverageRatingByCuisine(library) {
  const result = {};
  library.forEach(cuisine => {
    const ratings = cuisine.recipes.map(recipe => recipe.rating);
    const avg = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
    result[cuisine.name] = parseFloat(avg.toFixed(2)); // rounded to 2 decimals
  });
  return result;
}

// 9. Get recipes that include baking
export function getRecipesThatIncludeBaking(library) {
  return library.flatMap(cuisine =>
    cuisine.recipes.filter(recipe =>
      recipe.steps.some(step => step.toLowerCase().includes('bake'))
    )
  );
}

// 10. Get total recipe count
export function getTotalRecipeCount(library) {
  return library.reduce((total, cuisine) => total + cuisine.recipes.length, 0);
}

// 11. Get recipes by ingredient (BONUS)
export function getRecipesByIngredient(library, ingredient) {
  return getRecipesWithIngredient(library, ingredient); // Same logic as #5 — reuse it!
}

// 12. Get vegetarian recipes (BONUS)
// We'll define vegetarian recipes as those that do not contain meat (chicken, pork, beef, pancetta, fish)
const MEAT_INGREDIENTS = ['chicken', 'beef', 'pork', 'pancetta', 'fish'];

export function getVegetarianRecipes(library) {
  return library.flatMap(cuisine =>
    cuisine.recipes.filter(recipe =>
      recipe.ingredients.every(ing =>
        !MEAT_INGREDIENTS.some(meat => ing.toLowerCase().includes(meat))
      )
    )
  );
}

// 13. Get cuisine with most detailed recipe (most steps) (BONUS)
export function getCuisineWithMostDetailedRecipe(library) {
  let maxSteps = -1;
  let cuisineName = '';

  library.forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      if (recipe.steps.length > maxSteps) {
        maxSteps = recipe.steps.length;
        cuisineName = cuisine.name;
      }
    });
  });

  return cuisineName;
}
