import React, {Component} from 'react';

class Header extends Component {
  render() {

    return(

      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <img className="img-fluid mb-5 d-block mx-auto rounded-circle" src="img/profile.png" alt="" />
          <h1 className="text-uppercase mb-0 text-primary">Rainer Vieira</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0 text-primary">Web Developer - Game Developer</h2>
        </div>
      </header>

    );
  }
}

export default Header;
