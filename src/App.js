import { Link, Outlet } from "react-router-dom";

function App() {
  
  return (
    

    <>
      <div>
        <header>
          <h1 className="site-heading text-center text-faded d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">
              A Free Bootstrap Business Theme
            </span>
            <span className="site-heading-lower">Business Casual</span>
          </h1>
        </header>

        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div className="container">
            <a
              className="navbar-brand text-uppercase fw-bold d-lg-none"
              href="index.html"
            >
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase" to='/'>Home</Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase" to='/about'>About</Link>

                </li>
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase" to='/product'>Product</Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase" to='/store'>Store</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
      <hr></hr>
      <div>
        <Outlet></Outlet>
      </div>
      <hr></hr>
      <div>
        <footer className="footer text-faded text-center py-5">
          <div className="container">
            <p className="m-0 small">Copyright © Your Website 2021</p>
          </div>
        </footer>
      </div>

    </>
  );


}

export default App;