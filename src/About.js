import React, {Component} from 'react';

class About extends Component {
  render() {

    return(
      <section className="bg-white --text-white mb-0" id="about">
        <div className="container">
          <h2 className="text-center text-uppercase --text-white">About Me</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">I am a Full Stack Developer with 3+ years of experience on the field working with Javascript (Jquery, React), PHP, MySQL, Sql Server, Html5 and CSS, also having 5+ years working with other languages, including C, C++, C#, Objective-C, Java (Android) and Swift.</p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead"> You can contact me anytime by Linkedin, Facebook and Email (links on footer). </p>
              <p className="lead">In the meantime, check some of the projects I created below.</p>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default About;
