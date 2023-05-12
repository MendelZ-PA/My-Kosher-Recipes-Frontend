import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { RecipesIndex } from "./RecipesIndex";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log(response.data);
      setPantryItems(response.data);
    });
  };

  const handleIndexRecipes = () => {
    console.log("handleIndexRecipes");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);
  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <IngredientsIndex ingredients={ingredients} />
      <RecipesIndex recipes={recipes} />
      <PantryItemsIndex pantryItems={pantryItems} />
    </div>
  );
}
