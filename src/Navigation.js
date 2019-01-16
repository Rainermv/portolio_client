import React, {Component} from 'react';


class Navigation extends Component {
  render() {

    return(
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Rainer Vieira - Portfolio</a>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About Me</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#projects">My Projects</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navigation;
