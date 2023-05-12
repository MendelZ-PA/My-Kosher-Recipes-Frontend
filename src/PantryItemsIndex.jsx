export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>All Pantry Items</h1>
      {props.pantryItems.map((pantryItem) => (
        <div key={pantryItem.id}>
          <h2>{pantryItem.name}</h2>
          <p>{pantryItem.measurement}</p>
          <p>{pantryItem.isKosher}</p>
        </div>
      ))}
    </div>
  );
}
