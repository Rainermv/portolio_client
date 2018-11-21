import React, {Component} from 'react';
import { render } from 'react-dom';
import Lightbox from 'react-images';
import Gallery from "./Gallery";

class ProjectDetails extends Component {

  constructor() {
    super();
    this.state = {
			lightboxIsOpen: true,
			currentImage: 0,
    };

  }

  closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

  gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

  render() {

    var projectIndex = this.props.projectIndex;
    var project = this.props.projectData[ projectIndex ];

    var length = this.props.projectData.length;

    let projects = this.props.projectData.map ( (proj, index) => {

      var c = (projectIndex == index? "active" : "");

      return <li className={"page-item " + c} key={proj._id}>
              <a className="page-link" onClick={((e) => this.props.toggleDetails(e, index, true))}>
                {index+1}
              </a>
            </li>

    });

    var nav = {
      "previous": Math.abs((projectIndex - 1) % length),
      "next":     Math.abs((projectIndex + 1) % length),
      "projects": projects
    };

    var images = [
      { src: "../img/projects/" + project.key + "/main.png" },
      { src: "../img/projects/" + project.key + "/1.png" },
      { src: "../img/projects/" + project.key + "/2.png" }
    ];

    return(

      <div>
        <div className="card">

          <div className="card-header">
          <h3 className="card-title float-left"> {project.title} </h3>
            <button className="btn btn-primary float-right close-project" onClick={((e) => this.props.toggleDetails(e, 0, false))}>
              <i className="fa fa-times fa-lg"></i>
            </button>
          </div>

          <div className="row no-gutters">

            <div className="col-lg-6 card-body">
                <img className="img-fluid"  src={"img/projects/" + project.key + "/main.png"} alt=""></img>
            </div>

            <div className="col-lg-6">

              <div className="card-block px-2">

                <p className="card-text">{project.body}</p>
              </div>

            </div>

          </div>

          <div className="card-footer">
            <Gallery display= {project.gallery} images={images}/>
          </div>

        </div>



        <nav aria-label="Project navigation" className="project-pagination">
          <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item">
              <a className="page-link"  onClick={((e) => this.props.toggleDetails(e, nav.previous, true))}>
                <i className="fas fa-angle-left"></i>
              </a>
            </li>
            {nav.projects}
            <li className="page-item">
              <a className="page-link"  onClick={((e) => this.props.toggleDetails(e, nav.next, true))}>
                <i className="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>

      </div>



    );
  }
}

export default ProjectDetails;
