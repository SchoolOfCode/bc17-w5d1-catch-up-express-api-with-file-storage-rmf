import express from "express";
import fs from "node:fs/promises";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

const recipies = async function readJSON(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const jasonData = JSON.parse(data);
};
console.log(await recipies("./recipes.json"));

//get request
app.get("/recipes", (request, response) => {
  console.log("ok");
  response.send("ok");
});

//get by id request
app.get("/recipes/:id", async (request, response) => {
  const requestId = request.params;
  // console.log(requestId);
  response.status(200).json({
    data: requestId,
  });
});
//response.json(result.id);
//const allRecipes=recipes

//post request (result.body)
app.post("/recipes", (result, request) => {
  console.log(result.body);
  response.send(result.body);
});

//post request (result.body)
app.post("/recipes", (result, request) => {
  console.log(result.body);
  response.send(result.body);
});

//patch by id (result.body)
app.patch("recipes/:id", (result, request) => {
  console.log(result.body);
  response.send(result.body);
});

//patch by id (result.body)
app.delete("recipes/:id", (result, response) => {
  console.log(result.body);
  response.send(result.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
