import { expect } from 'chai';
import { recipeLibrary } from '../recipeLibrary.js';

let studentCode = {};
try {
  studentCode = await import('../challenges');
} catch (err) {
  // file may not exist or have syntax errors
}

describe('Recipe Library Challenge Tests', () => {

  it('getAllCuisineNames should return an array of cuisine names', () => {
    if (typeof studentCode.getAllCuisineNames !== 'function') return;
    const result = studentCode.getAllCuisineNames();
    expect(result).to.be.an('array');
    expect(result).to.have.members(Object.keys(recipeLibrary));
  });

  it('getRecipesByCuisine should return recipe titles for given cuisine', () => {
    if (typeof studentCode.getRecipesByCuisine !== 'function') return;
    const cuisine = Object.keys(recipeLibrary)[0];
    const expectedTitles = recipeLibrary[cuisine].recipes.map(r => r.title);
    const result = studentCode.getRecipesByCuisine(cuisine);
    expect(result).to.be.an('array');
    expect(result).to.have.members(expectedTitles);
  });

  it('getAllUniqueIngredients should return unique ingredients', () => {
    if (typeof studentCode.getAllUniqueIngredients !== 'function') return;
    const allIngredients = new Set();
    Object.values(recipeLibrary).forEach(cuisine => {
      cuisine.recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => allIngredients.add(ingredient.toLowerCase()));
      });
    });
    const result = studentCode.getAllUniqueIngredients();
    expect(result).to.be.an('array');
    expect(result).to.have.members(Array.from(allIngredients));
  });

  it('getHighestRatedRecipe should return recipe with highest rating', () => {
    if (typeof studentCode.getHighestRatedRecipe !== 'function') return;
    let highest = null;
    Object.values(recipeLibrary).forEach(cuisine => {
      cuisine.recipes.forEach(recipe => {
        if (!highest || recipe.rating > highest.rating) {
          highest = recipe;
        }
      });
    });
    const result = studentCode.getHighestRatedRecipe();
    expect(result).to.be.an('object');
    expect(result.title).to.equal(highest.title);
  });

  it('getRecipesWithIngredient should return recipes with specific ingredient', () => {
    if (typeof studentCode.getRecipesWithIngredient !== 'function') return;
    const ingredient = 'garlic';
    const expected = [];
    Object.values(recipeLibrary).forEach(cuisine => {
      cuisine.recipes.forEach(recipe => {
        if (recipe.ingredients.some(i => i.toLowerCase() === ingredient)) {
          expected.push(recipe.title);
        }
      });
    });
    const result = studentCode.getRecipesWithIngredient(ingredient);
    expect(result).to.be.an('array');
    expect(result).to.have.members(expected);
  });

  // BONUS TESTS

  it('getCuisineWithMostRecipes should return the cuisine name with most recipes', () => {
    if (typeof studentCode.getCuisineWithMostRecipes !== 'function') return;
    let maxCuisine = '';
    let maxCount = 0;
    Object.entries(recipeLibrary).forEach(([cuisine, data]) => {
      if (data.recipes.length > maxCount) {
        maxCount = data.recipes.length;
        maxCuisine = cuisine;
      }
    });
    const result = studentCode.getCuisineWithMostRecipes();
    expect(result).to.equal(maxCuisine);
  });

  it('getAverageRatingByCuisine should return average rating of a cuisine', () => {
    if (typeof studentCode.getAverageRatingByCuisine !== 'function') return;
    const cuisine = Object.keys(recipeLibrary)[0];
    const recipes = recipeLibrary[cuisine].recipes;
    const avgRating = recipes.reduce((sum, r) => sum + r.rating, 0) / recipes.length;

    const result = studentCode.getAverageRatingByCuisine(cuisine);
    expect(result).to.be.a('number');
    expect(result).to.be.closeTo(avgRating, 0.01);
  });

  it('getRecipesUnderTimeLimit should return recipes under given time limit', () => {
    if (typeof studentCode.getRecipesUnderTimeLimit !== 'function') return;
    const timeLimit = 45;
    const expected = [];
    Object.values(recipeLibrary).forEach(cuisine => {
      cuisine.recipes.forEach(recipe => {
        if (recipe.prep_time_minutes <= timeLimit) {
          expected.push(recipe.title);
        }
      });
    });
    const result = studentCode.getRecipesUnderTimeLimit(timeLimit);
    expect(result).to.be.an('array');
    expect(result).to.have.members(expected);
  });

});

/**
 * 🛠️ SETUP INSTRUCTIONS:
 *
 * 1️⃣ Install dependencies:
 * ```
 * npm install mocha chai
 * ```
 *
 * 2️⃣ To run the tests:
 * ```
 * npx mocha
 * ```
 * Or add this script to package.json:
 * ```
 * "scripts": {
 *   "test": "mocha"
 * }
 * ```
 * Then run:
 * ```
 * npm test
 * ```
 */
