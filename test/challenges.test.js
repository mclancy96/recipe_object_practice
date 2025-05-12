import { expect } from 'chai';
import { recipeLibrary } from '../recipeLibrary.js';
import * as studentCode from './challenge.js';

describe('Required Challenges', () => {
  it('getAllCuisineNames should return an array of all cuisine names', () => {
    const result = studentCode.getAllCuisineNames?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(['Italian', 'Mexican', 'Japanese', 'Indian', 'French'])
  });

  it('getRecipesByCuisine should return recipes for a given cuisine', () => {
    const italian = [
      {
        title: 'Spaghetti Carbonara',
        ingredients: [
          'spaghetti',
          'eggs',
          'pancetta',
          'pecorino cheese',
          'black pepper'
        ],
        steps: [
          'Boil spaghetti until al dente',
          'Cook pancetta in a pan',
          'Whisk eggs and pecorino together',
          'Combine pasta with pancetta and egg mixture',
          'Season with black pepper and serve'
        ],
        rating: 4.7
      },
      {
        title: 'Margherita Pizza',
        ingredients: [
          'pizza dough',
          'tomato sauce',
          'mozzarella',
          'basil',
          'olive oil'
        ],
        steps: [
          'Roll out pizza dough',
          'Spread tomato sauce evenly',
          'Add mozzarella slices',
          'Bake in a hot oven',
          'Top with basil and drizzle olive oil'
        ],
        rating: 4.5
      },
      {
        title: 'Tiramisu',
        ingredients: [
          'ladyfingers',
          'espresso',
          'mascarpone',
          'cocoa powder',
          'sugar',
          'eggs'
        ],
        steps: [
          'Dip ladyfingers in espresso',
          'Layer mascarpone mixture and soaked ladyfingers',
          'Repeat layers',
          'Dust with cocoa powder',
          'Chill and serve'
        ],
        rating: 4.8
      }
    ];
    const result = studentCode.getRecipesByCuisine?.(recipeLibrary, 'Italian');
    expect(result).to.be.an('array');
    expect(result).to.deep.equal(italian)
    expect(result[0]).to.have.property('title');
  });

  it('getAllUniqueIngredients should return all unique ingredients', () => {
    const uniqueIngredients = [
      'spaghetti', 'eggs', 'pancetta',
      'pecorino cheese', 'black pepper', 'pizza dough',
      'tomato sauce', 'mozzarella', 'basil',
      'olive oil', 'ladyfingers', 'espresso',
      'mascarpone', 'cocoa powder', 'sugar',
      'chicken breast', 'taco shells', 'lettuce',
      'tomato', 'cheddar cheese', 'salsa',
      'avocados', 'lime juice', 'red onion',
      'cilantro', 'salt', 'jalapeño',
      'flour', 'water', 'butter',
      'cinnamon', 'oil', 'corn tortillas',
      'chicken', 'enchilada sauce', 'onions',
      'chicken thighs', 'soy sauce', 'mirin',
      'ginger', 'garlic', 'dashi stock',
      'miso paste', 'tofu', 'wakame seaweed',
      'green onions', 'cabbage', 'green onion',
      'pork belly', 'okonomiyaki sauce', 'kewpie mayo',
      'yogurt', 'tomato puree', 'garam masala',
      'chickpeas', 'onion', 'cumin',
      'potatoes', 'peas', 'zucchini',
      'eggplant', 'bell peppers', 'milk',
      'vanilla extract'
    ];
    const result = studentCode.getAllUniqueIngredients?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result).to.include('tomato');
    expect(result).to.deep.equal(uniqueIngredients)
  });

  it('getHighestRatedRecipe should return the recipe object with the highest rating', () => {
    const bestRecipe = {
      title: 'Chicken Teriyaki',
      ingredients: [
        'chicken thighs',
        'soy sauce',
        'mirin',
        'sugar',
        'ginger',
        'garlic'
      ],
      steps: [
        'Mix soy sauce, mirin, sugar, ginger, and garlic',
        'Marinate chicken in sauce',
        'Cook chicken in pan',
        'Simmer remaining sauce and pour over chicken',
        'Serve with rice'
      ],
      rating: 4.9
    };
    const result = studentCode.getHighestRatedRecipe?.(recipeLibrary);
    expect(result).to.be.an('object');
    expect(result).to.have.property('title');
    expect(result).to.have.property('rating');
    expect(result).to.deep.equal(bestRecipe)
  });

  it('getRecipesWithIngredient should return recipes that contain a specific ingredient', () => {
    const tomatoRecipes = [
      {
        title: 'Chicken Tacos',
        ingredients: [
          'chicken breast',
          'taco shells',
          'lettuce',
          'tomato',
          'cheddar cheese',
          'salsa'
        ],
        steps: [
          'Cook and season chicken',
          'Warm taco shells',
          'Assemble tacos with chicken and toppings',
          'Serve with salsa'
        ],
        rating: 4.6
      },
      {
        title: 'Chana Masala',
        ingredients: [
          'chickpeas',
          'onion',
          'tomato',
          'garam masala',
          'cumin',
          'cilantro'
        ],
        steps: [
          'Sauté onion and spices',
          'Add tomatoes and cook down',
          'Stir in chickpeas',
          'Simmer and garnish with cilantro',
          'Serve with rice'
        ],
        rating: 2.7
      },
      {
        title: 'Ratatouille',
        ingredients: [
          'zucchini',
          'eggplant',
          'bell peppers',
          'tomato',
          'onion',
          'garlic',
          'olive oil'
        ],
        steps: [
          'Slice vegetables thinly',
          'Layer vegetables in baking dish',
          'Drizzle with olive oil and season',
          'Bake until tender',
          'Serve hot'
        ],
        rating: 4.6
      }
    ]
    const result = studentCode.getRecipesWithIngredient?.(recipeLibrary, 'tomato');
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
    expect(result).to.deep.equal(tomatoRecipes)
  });

  it('getCuisinesWithComplexRecipes should return cuisines with recipes that have >5 ingredients', () => {
    const result = studentCode.getCuisinesWithComplexRecipes?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result).to.include('Italian');
    expect(result).to.deep.equal(['Italian', 'Mexican', 'Japanese', 'Indian', 'French'])
  });

  it('getRecipeCountByCuisine should return an object mapping cuisines to recipe counts', () => {
    const result = studentCode.getRecipeCountByCuisine?.(recipeLibrary);
    expect(result).to.be.an('object');
    expect(result).to.have.property('Italian');
    expect(result['Italian']).to.be.a('number');
    expect(result).to.deep.equal({ Italian: 3, Mexican: 4, Japanese: 3, Indian: 3, French: 2 })
  });

  it('getAverageRatingByCuisine should return an object mapping cuisines to avg ratings', () => {
    const result = studentCode.getAverageRatingByCuisine?.(recipeLibrary);
    expect(result).to.be.an('object');
    expect(result).to.have.property('Mexican');
    expect(result['Mexican']).to.be.within(1, 5);
    expect(result).to.deep.equal({
      Italian: 4.67,
      Mexican: 4.52,
      Japanese: 3.63,
      Indian: 4.03,
      French: 4.15
    })
  });

  it('getRecipesThatIncludeBaking should return recipes that require a baking step', () => {
    const bakingNeeded = [
      {
        title: 'Margherita Pizza',
        ingredients: [
          'pizza dough',
          'tomato sauce',
          'mozzarella',
          'basil',
          'olive oil'
        ],
        steps: [
          'Roll out pizza dough',
          'Spread tomato sauce evenly',
          'Add mozzarella slices',
          'Bake in a hot oven',
          'Top with basil and drizzle olive oil'
        ],
        rating: 4.5
      },
      {
        title: 'Enchiladas',
        ingredients: [
          'corn tortillas',
          'chicken',
          'enchilada sauce',
          'cheddar cheese',
          'onions'
        ],
        steps: [
          'Fill tortillas with chicken and onions',
          'Roll and place in baking dish',
          'Pour enchilada sauce over top',
          'Sprinkle with cheese',
          'Bake until heated through'
        ],
        rating: 4.3
      },
      {
        title: 'Ratatouille',
        ingredients: [
          'zucchini',
          'eggplant',
          'bell peppers',
          'tomato',
          'onion',
          'garlic',
          'olive oil'
        ],
        steps: [
          'Slice vegetables thinly',
          'Layer vegetables in baking dish',
          'Drizzle with olive oil and season',
          'Bake until tender',
          'Serve hot'
        ],
        rating: 4.6
      }
    ];
    const result = studentCode.getRecipesThatIncludeBaking?.(recipeLibrary);
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
    expect(result).to.deep.equal(bakingNeeded)
  });

  it('getTotalRecipeCount should return the total number of recipes', () => {
    const result = studentCode.getTotalRecipeCount?.(recipeLibrary);
    expect(result).to.be.a('number');
    expect(result).to.be.greaterThan(5);
    expect(result).to.equal(15)
  });
});

describe('Bonus Challenges (Optional)', () => {
  it('getRecipesByIngredient should return recipes that contain a specific ingredient', () => {
    const cheddarRecipes = [
      {
        title: 'Chicken Tacos',
        ingredients: [
          'chicken breast',
          'taco shells',
          'lettuce',
          'tomato',
          'cheddar cheese',
          'salsa'
        ],
        steps: [
          'Cook and season chicken',
          'Warm taco shells',
          'Assemble tacos with chicken and toppings',
          'Serve with salsa'
        ],
        rating: 4.6
      },
      {
        title: 'Enchiladas',
        ingredients: [
          'corn tortillas',
          'chicken',
          'enchilada sauce',
          'cheddar cheese',
          'onions'
        ],
        steps: [
          'Fill tortillas with chicken and onions',
          'Roll and place in baking dish',
          'Pour enchilada sauce over top',
          'Sprinkle with cheese',
          'Bake until heated through'
        ],
        rating: 4.3
      }
    ];
    const result = studentCode.getRecipesByIngredient?.(recipeLibrary, 'cheddar cheese');
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title');
    expect(result).to.deep.equal(cheddarRecipes)
  });

  const MEAT_INGREDIENTS = ['chicken', 'beef', 'pork', 'pancetta', 'fish'];
  it('getVegetarianRecipes should return only vegetarian recipes', () => {
    const vegetarianOptions = [
      {
        title: 'Margherita Pizza',
        ingredients: [
          'pizza dough',
          'tomato sauce',
          'mozzarella',
          'basil',
          'olive oil'
        ],
        steps: [
          'Roll out pizza dough',
          'Spread tomato sauce evenly',
          'Add mozzarella slices',
          'Bake in a hot oven',
          'Top with basil and drizzle olive oil'
        ],
        rating: 4.5
      },
      {
        title: 'Tiramisu',
        ingredients: [
          'ladyfingers',
          'espresso',
          'mascarpone',
          'cocoa powder',
          'sugar',
          'eggs'
        ],
        steps: [
          'Dip ladyfingers in espresso',
          'Layer mascarpone mixture and soaked ladyfingers',
          'Repeat layers',
          'Dust with cocoa powder',
          'Chill and serve'
        ],
        rating: 4.8
      },
      {
        title: 'Guacamole',
        ingredients: [
          'avocados',
          'lime juice',
          'red onion',
          'cilantro',
          'salt',
          'jalapeño'
        ],
        steps: [
          'Mash avocados',
          'Stir in lime juice and salt',
          'Mix in chopped onion, cilantro, and jalapeño',
          'Serve fresh'
        ],
        rating: 4.8
      },
      {
        title: 'Churros',
        ingredients: ['flour', 'water', 'butter', 'sugar', 'cinnamon', 'oil'],
        steps: [
          'Boil water and butter',
          'Stir in flour to form dough',
          'Pipe dough into hot oil',
          'Fry until golden',
          'Roll in cinnamon sugar'
        ],
        rating: 4.4
      },
      {
        title: 'Miso Soup',
        ingredients: [
          'dashi stock',
          'miso paste',
          'tofu',
          'wakame seaweed',
          'green onions'
        ],
        steps: [
          'Heat dashi stock',
          'Dissolve miso paste into stock',
          'Add tofu and wakame',
          'Garnish with green onions',
          'Serve hot'
        ],
        rating: 4.4
      },
      {
        title: 'Chana Masala',
        ingredients: [
          'chickpeas',
          'onion',
          'tomato',
          'garam masala',
          'cumin',
          'cilantro'
        ],
        steps: [
          'Sauté onion and spices',
          'Add tomatoes and cook down',
          'Stir in chickpeas',
          'Simmer and garnish with cilantro',
          'Serve with rice'
        ],
        rating: 2.7
      },
      {
        title: 'Samosas',
        ingredients: ['flour', 'potatoes', 'peas', 'cumin', 'garam masala', 'oil'],
        steps: [
          'Make dough for samosa shells',
          'Prepare spiced potato and pea filling',
          'Fill and fold samosas',
          'Fry until golden',
          'Serve with chutney'
        ],
        rating: 4.5
      },
      {
        title: 'Ratatouille',
        ingredients: [
          'zucchini',
          'eggplant',
          'bell peppers',
          'tomato',
          'onion',
          'garlic',
          'olive oil'
        ],
        steps: [
          'Slice vegetables thinly',
          'Layer vegetables in baking dish',
          'Drizzle with olive oil and season',
          'Bake until tender',
          'Serve hot'
        ],
        rating: 4.6
      },
      {
        title: 'Crêpes',
        ingredients: ['flour', 'milk', 'eggs', 'butter', 'sugar', 'vanilla extract'],
        steps: [
          'Whisk together batter',
          'Pour thin layer into hot pan',
          'Cook on both sides',
          'Fill with toppings of choice',
          'Fold and serve'
        ],
        rating: 3.7
      }
    ]
    const result = studentCode.getVegetarianRecipes?.(recipeLibrary);
    expect(result).to.be.an('array');
    result.forEach(recipe => {
      const hasNoMeat = recipe.ingredients.every(ingredient =>
        !MEAT_INGREDIENTS.some(meat => ingredient.toLowerCase().includes(meat))
      );
      expect(hasNoMeat).to.be.true;
    });
    expect(result).to.deep.equal(vegetarianOptions)
  });

  it('getCuisineWithMostDetailedRecipe should return the cuisine with recipe that has most steps', () => {
    const result = studentCode.getCuisineWithMostDetailedRecipe?.(recipeLibrary);
    expect(result).to.be.a('string');
    expect(['Italian', 'Mexican', 'Indian', 'Japanese']).to.include(result);
    expect(result).to.equal("Italian")
  });
});
