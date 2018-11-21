import React, {Component} from 'react';

class ProjectDetails extends Component {

  render() {

    var index = this.props.projectIndex;
    var project = this.props.projectData[ index ];


    var length = this.props.projectData.length;

    var nav = {
      "previous": Math.abs((index - 1) % length),
      "next":     Math.abs((index + 1) % length),
    };

    return(
      <div>


        <div className="row">
          <div className="col-md-6">

            <img className="img-fluid" src="img/portfolio/cabin.png" alt=""></img>

          </div>
          <div className="col-md-6">
            <h3> {project.title} </h3>
            <p>{project.body}</p>
          </div>


        </div>

        <nav aria-label="Project navigation">
          <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item">
              <a className="page-link"  onClick={((e) => this.props.toggleDetails(e, nav.previous, true))}>Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link"  onClick={((e) => this.props.toggleDetails(e, nav.next, true))}>Next</a>
            </li>
          </ul>
        </nav>


      </div>



    );
  }
}

export default ProjectDetails;
