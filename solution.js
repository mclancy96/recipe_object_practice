// solutions.js

import recipeLibrary from '../recipeLibrary';

export function getAllCuisineNames() {
  return Object.keys(recipeLibrary);
}

export function getRecipesByCuisine(cuisineName) {
  const cuisine = recipeLibrary[cuisineName];
  if (!cuisine) return [];
  return cuisine.recipes.map(recipe => recipe.title);
}

export function getAllUniqueIngredients() {
  const ingredients = new Set();
  Object.values(recipeLibrary).forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => ingredients.add(ingredient.toLowerCase()));
    });
  });
  return Array.from(ingredients);
}

export function getHighestRatedRecipe() {
  let highest = null;
  Object.values(recipeLibrary).forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      if (!highest || recipe.rating > highest.rating) {
        highest = recipe;
      }
    });
  });
  return highest;
}

export function getRecipesWithIngredient(ingredient) {
  const result = [];
  const lowerIngredient = ingredient.toLowerCase();
  Object.values(recipeLibrary).forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      if (recipe.ingredients.some(i => i.toLowerCase() === lowerIngredient)) {
        result.push(recipe.title);
      }
    });
  });
  return result;
}

export function getCuisinesWithComplexRecipes() {
  const result = [];
  Object.entries(recipeLibrary).forEach(([cuisineName, cuisine]) => {
    if (cuisine.recipes.some(recipe => recipe.ingredients.length > 5)) {
      result.push(cuisineName);
    }
  });
  return result;
}

export function getRecipeCountByCuisine() {
  const result = {};
  Object.entries(recipeLibrary).forEach(([cuisineName, cuisine]) => {
    result[cuisineName] = cuisine.recipes.length;
  });
  return result;
}

export function getAverageRatingByCuisine() {
  const result = {};
  Object.entries(recipeLibrary).forEach(([cuisineName, cuisine]) => {
    const total = cuisine.recipes.reduce((sum, recipe) => sum + recipe.rating, 0);
    const avg = total / cuisine.recipes.length;
    result[cuisineName] = Number(avg.toFixed(2));
  });
  return result;
}

export function getRecipesThatIncludeBaking() {
  const result = [];
  Object.values(recipeLibrary).forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      if (recipe.steps.some(step => step.toLowerCase().includes('bake'))) {
        result.push(recipe);
      }
    });
  });
  return result;
}

export function getTotalRecipeCount() {
  let count = 0;
  Object.values(recipeLibrary).forEach(cuisine => {
    count += cuisine.recipes.length;
  });
  return count;
}

// Bonus Solutions

export function getRecipesByIngredient() {
  const result = {};
  Object.values(recipeLibrary).forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        const key = ingredient.toLowerCase();
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(recipe.title);
      });
    });
  });
  return result;
}

export function getVegetarianRecipes() {
  const nonVeg = ["chicken", "beef", "pork", "fish", "shrimp"];
  const result = [];
  Object.values(recipeLibrary).forEach(cuisine => {
    cuisine.recipes.forEach(recipe => {
      const hasMeat = recipe.ingredients.some(ingredient =>
        nonVeg.some(meat => ingredient.toLowerCase().includes(meat))
      );
      if (!hasMeat) {
        result.push(recipe.title);
      }
    });
  });
  return result;
}

export function getCuisineWithMostDetailedRecipe() {
  let maxSteps = 0;
  let cuisineResult = null;
  Object.entries(recipeLibrary).forEach(([cuisineName, cuisine]) => {
    cuisine.recipes.forEach(recipe => {
      if (recipe.steps.length > maxSteps) {
        maxSteps = recipe.steps.length;
        cuisineResult = cuisineName;
      }
    });
  });
  return cuisineResult;
}
