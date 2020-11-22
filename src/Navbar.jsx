import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light" id="navtop">
              <NavLink exact className="navbar-brand" to="/">
                Sammy's World
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto bg-light">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/"
                    >
                      Home <span class="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/credentials"
                    >
                      Credentials
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/achievements"
                    >
                      Achievements
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
