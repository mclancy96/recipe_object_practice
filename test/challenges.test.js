import { expect } from 'chai';
import { recipeLibrary } from '../recipeLibrary.js';
import * as studentCode from './challenge.js';

describe('Required Challenges', () => {
  it('getAllCuisineNames should return an array of all cuisine names', () => {
    const result = studentCode.getAllCuisineNames?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result).to.include('Italian');
    expect(result).to.include('Mexican');
  });

  it('getRecipesByCuisine should return recipes for a given cuisine', () => {
    const result = studentCode.getRecipesByCuisine?.(recipeLibrary, 'Italian');
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
  });

  it('getAllUniqueIngredients should return all unique ingredients', () => {
    const result = studentCode.getAllUniqueIngredients?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result).to.include('tomato');
  });

  it('getHighestRatedRecipe should return the recipe object with the highest rating', () => {
    const result = studentCode.getHighestRatedRecipe?.(recipeLibrary);
    expect(result).to.be.an('object');
    expect(result).to.have.property('title');
    expect(result).to.have.property('rating');
  });

  it('getRecipesWithIngredient should return recipes that contain a specific ingredient', () => {
    const result = studentCode.getRecipesWithIngredient?.(recipeLibrary, 'tomato');
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
  });

  it('getCuisinesWithComplexRecipes should return cuisines with recipes that have >5 ingredients', () => {
    const result = studentCode.getCuisinesWithComplexRecipes?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result).to.include('Italian');
  });

  it('getRecipeCountByCuisine should return an object mapping cuisines to recipe counts', () => {
    const result = studentCode.getRecipeCountByCuisine?.(recipeLibrary);
    expect(result).to.be.an('object');
    expect(result).to.have.property('Italian');
    expect(result['Italian']).to.be.a('number');
  });

  it('getAverageRatingByCuisine should return an object mapping cuisines to avg ratings', () => {
    const result = studentCode.getAverageRatingByCuisine?.(recipeLibrary);
    expect(result).to.be.an('object');
    expect(result).to.have.property('Mexican');
    expect(result['Mexican']).to.be.within(1, 5);
  });

  it('getRecipesThatIncludeBaking should return recipes that require a baking step', () => {
    const result = studentCode.getRecipesThatIncludeBaking?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
  });

  it('getTotalRecipeCount should return the total number of recipes', () => {
    const result = studentCode.getTotalRecipeCount?.(recipeLibrary);
    expect(result).to.be.a('number');
    expect(result).to.be.greaterThan(5);
  });
});

describe('Bonus Challenges (Optional)', () => {
  it('getRecipesByIngredient should return recipes that contain a specific ingredient', () => {
    const result = studentCode.getRecipesByIngredient?.(recipeLibrary, 'cheddar cheese');
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
  });
  const MEAT_INGREDIENTS = ['chicken', 'beef', 'pork', 'pancetta', 'fish'];
  it('getVegetarianRecipes should return only vegetarian recipes', () => {
    const result = studentCode.getVegetarianRecipes?.(recipeLibrary);
    expect(result).to.be.an('array');
    result.forEach(recipe => {
      const hasNoMeat = recipe.ingredients.every(ingredient =>
        !MEAT_INGREDIENTS.some(meat => ingredient.toLowerCase().includes(meat))
      );
      expect(hasNoMeat).to.be.true;
    });
  });

  it('getCuisineWithMostDetailedRecipe should return the cuisine with recipe that has most steps', () => {
    const result = studentCode.getCuisineWithMostDetailedRecipe?.(recipeLibrary);
    expect(result).to.be.a('string');
    expect(['Italian', 'Mexican', 'Indian', 'Japanese']).to.include(result);
  });
});
