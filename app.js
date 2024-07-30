import express from "express";
import { v4 as uuidv4 } from "uuid";

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
  const result = await getRecipes();
  response.status(200).json({
    response: true,
    payload: result,
  });
});

//get by id (request.params)
app.get("/recipes/:id", async (request, response) => {
  const requestId = request.params.id;
  const result = await getRecipeByID(requestId);

  response.status(200).json({
    response: true,
    payload: result,
  });
});

//post request (result.body)
app.post("/recipes", async (request, response) => {
  const newRecipe = { id: uuidv4(), ...request.body };
  const result = await createRecipe(newRecipe);

  response.status(200).json({
    response: true,
    payload: result,
  });
});

//patch by id (request.params)
app.patch("/recipes/:id", async (request, response) => {
  const requestId = request.params.id;
  const requestBody = { id: uuidv4(), ...request.body };

  const data = await updateRecipeByID(requestId, requestBody);

  response.status(200).json({
    response: true,
    payload: data,
  });
});

//patch by id (result.body)
app.delete("/recipes/:id", async (request, response) => {
  const requestId = request.params.id;

  const data = await deleteRecipeByID(requestId);
  response.status(200).json({
    response: true,
    payload: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
