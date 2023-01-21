import { Link } from 'react-router-dom';

import '../../../styles/navbar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-code-slash fs-6 " />
          <h1 className="fs-6 fw-bold d-inline">
            {' '}
            {import.meta.env.VITE_BRAND}
          </h1>
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active fs-6" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stack" className="nav-link fs-6">
                Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/contact" className="nav-link"> */}
              <span
                className="nav-link pointer"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Contact
              </span>
              {/* </Link> */}
            </li>
          </ul>
          <div className="d-flex">
            <div className="row">
              <div className="col">
                <a
                  href="https://www.linkedin.com/in/flaviojoaofelix/"
                  className="text-center"
                  target="_blank"
                  rel="external noreferrer"
                >
                  <i
                    className="bi bi-linkedin fs-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title="LinkedIn"
                  />
                  <span className="d-none">LinkedIn</span>
                </a>
              </div>
              <div className="col">
                <a
                  href="https://github.com/flaviojoaofelix"
                  className="text-center"
                  target="_blank"
                  rel="external noreferrer"
                >
                  <i
                    className="bi bi-github fs-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title="Github"
                  />
                  <span className="d-none">Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
