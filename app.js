import express from "express";
import recipies from "./recipes.json" assert { type: "json" };
// console.log(recipies);
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
app.get("/recipes", (result, response) => {
  console.log("ok");
  response.send("ok");
});

//get by id request
app.get("/recipes/:id", (result, response) => {
  console.log("ok");
  response.send("ok");
});

//post request (result.body)
app.post("/recipes", (result, response) => {
  console.log(result.body);
  response.send(result.body);
});

//post request (result.body)
app.post("/recipes", (result, response) => {
  console.log(result.body);
  response.send(result.body);
});

//patch by id (result.body)
app.patch("recipes/:id", (result, response) => {
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
