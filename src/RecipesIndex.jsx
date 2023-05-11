export function RecipesIndex(props) {
  return (
    <div>
      <h1>All Recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.prepTime}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}
