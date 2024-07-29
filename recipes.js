import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  const data = await fs.readFile(fileName, "utf-8");
  const jasonData = JSON.parse(data);
  return jasonData;
}

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
  const data = await fs.readFile(fileName, "utf-8");
  const jasonData = JSON.parse(data);
  console.log(jasonData);
  const result = jasonData.find((object) => object.id === requestId);
  return result;
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  let getrecipes = await getRecipes();
  const storeRecipes = [getrecipes, newRecipe];
  await fs.writeFile(fileName, JSON.stringify(storeRecipes));
  return await getRecipes();
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
