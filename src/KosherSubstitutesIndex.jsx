export function KosherSubstitutesIndex(props) {
  return (
    <div>
      <h1>All Kosher Substitutes</h1>
      {props.kosherSubstitutes.map((kosherSubstitute) => (
        <div key={kosherSubstitute.id}>
          <h2>{kosherSubstitute.name}</h2>
          <p>{kosherSubstitute.brand}</p>
          <a target="_blank" rel="noreferrer" href={kosherSubstitute.url}>
            {" "}
            Shop product
          </a>
        </div>
      ))}
    </div>
  );
}
