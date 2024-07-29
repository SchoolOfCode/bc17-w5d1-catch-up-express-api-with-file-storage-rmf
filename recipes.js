import fs from "node:fs/promises";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    const jasonData = JSON.parse(data);
    return jasonData;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    const jasonData = JSON.parse(data);
    console.log(jasonData);
    const result = jasonData.find((object) => object.id === requestId);
    return result;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    const jasonData = JSON.parse(data);
    const addRecipies = [newRecipe, ...jasonData];
    const recipes = JSON.stringify(addRecipies);
    console.log(recipes);
    await fs.writeFile(fileName, recipes, "utf-8");
    return await getRecipes();
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
