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

//get request
app.get("/recipes", async (request, response) => {
  const data = await getRecipes();
  response.status(200).json(data);
});

//get by id request
app.get("/recipes/:id", async (request, response) => {
  const requestId = request.params.id;
  const result = await getRecipeByID(requestId);
  response.status(200).json({
    status: "ok",
    data: result,
  });
});

//post request (result.body)
app.post("/recipes", async (request, response) => {
  const newRecipe = request.body;
  const result = await createRecipe(newRecipe);
  response.status(200).json({
    status: "ok",
    data: result,
  });
});

//patch by id (result.body)
app.patch("recipes/:id", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

//patch by id (result.body)
app.delete("recipes/:id", (result, response) => {
  console.log(request.body);
  response.send(request.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
