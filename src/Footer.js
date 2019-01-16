import React, {Component} from 'react';

class Footer extends Component {
  render() {

    return(
      <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 mb-lg-0">
              <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/rainermv" target="blank">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/rainervieira/" target="blank">
                    <i className="fab fa-fw fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="mailto:rainermv@gmail.com" >
                    <i className="fas fa-fw fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright Rainer Vieira 2019</small>
        </div>
      </div>

      </div>

    );
  }
}

export default Footer;
