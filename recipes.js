import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {}
// create a get request to response with the activities.json file

// GET A RECIPE BY ID
export async function getRecipeByID(id) {}
// create a get request wich contain the ID in the request parameter
// store the ID value from the get request ID parameter in a variable (requestId)
// pass the variable(requestId) in the getRecipeByID(id) parameter
// compare each recipe object ID with the requestId variable
// return the object that match the request paramenter ID
// send a response containing the returned object

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
