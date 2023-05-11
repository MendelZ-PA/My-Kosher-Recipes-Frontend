export function IngredientsIndex(props) {
  return (
    <div>
      <h1>All Ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          <p>{ingredient.isKosher}</p>
        </div>
      ))}
    </div>
  );
}
