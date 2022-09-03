import ActiveLink from '../shared/active-link';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <ActiveLink href="/" activeClassName="">
            <a className="navbar-brand">Nextjs</a>
          </ActiveLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ActiveLink href="/" activeClassName="active">
                <a className="nav-link">Home</a>
              </ActiveLink>
              <ActiveLink href="/about" activeClassName="active">
                <a className="nav-link">About</a>
              </ActiveLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
