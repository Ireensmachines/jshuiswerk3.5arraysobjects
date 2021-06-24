/*const ingredients = ["kaas", "knof", "spinazie", "bladen"]
console.log(ingredients)

//console.log(ingredients[3])


//const step1 = "doe een beetje " + ingredients[3] + "in de pan."

//console.log(step1)

ingredients[2] = "volkoren"
console.log(ingredients)

const ingredientsLength = ingredients.length
console.log(ingredientsLength)

const lastIndex = ingredients.length -1
console.log(lastIndex)
console.log(ingredients[lastIndex])*/

const recipe = {
    name: "spinazie lasagne",
    cookingTime: 45,
    inGlutenFree: false,
    ingredients: ["kaas", "knof", "spinazie", "bladen"],
    nutritionInfo: {
        natrium: 34,
        calorieen: 670,
    },
}

const amountOfCalories = recipe.nutritionInfo.calorieen + "kCal"
const amountOfDough = recipe.ingredients[2]
recipe.nutritionInfo.calorieen = 700

console.log(amountOfDough)