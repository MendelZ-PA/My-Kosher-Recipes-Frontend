export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Kosher Recipes App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                What is Kosher?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ingredients
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Pantry Items
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kosher Substitute
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
