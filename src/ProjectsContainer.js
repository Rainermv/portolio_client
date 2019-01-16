import React, {Component} from 'react';
// import ProjectModal from "./ProjectModal";
import ProjectGrid from "./ProjectGrid";
import ProjectDetails from "./ProjectDetails";

//var path = "http://localhost:3000/";
var path = "http://damp-earth-45938.herokuapp.com/";

class ProjectsContainer extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      projectData: [],
      projectIndex: null,
      showDetails:false,
    };

  }

  componentDidMount(){

    fetch(path + "posts").then(results =>{
      return results.json();
    }).then(data => {

      let projects = data.map ( (prj, index) => {

        return(
          <div className="col-md-6 col-lg-4" key={prj._id} >
          <h5 className="text-center"> {prj.title} </h5>
            <a className="portfolio-item d-block mx-auto" onClick={((e) => this.toggleDetails(e, index, null))}>
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fas fa-search-plus fa-3x" ></i>

                </div>
              </div>
              <img className="img-fluid" src={"img/projects/" + prj.key + "/main.png"} alt=""></img>
            </a>
          </div>
        )
      })

      this.setState({projectData: data});
      this.setState({ projects: projects });

    })
  }

  toggleDetails = (e, index, state) => {

    this.setState({projectIndex: index});

    if (state == null){
      this.setState({
        showDetails: !this.state.showDetails
      });
    } else {
      this.setState({
        showDetails: state
      });
    }

  }

  render() {

    if (this.state.showDetails){

      console.log(this.state);

      let projectIndex = this.state.projectIndex;
      let projectData = this.state.projectData;
      let toggleDetails = this.toggleDetails;

      var child = <ProjectDetails projectIndex={projectIndex} projectData={projectData} toggleDetails={toggleDetails}/>
    } else {
        var child = <ProjectGrid projects={this.state.projects}/>
    }

    return(
      <section className="bg-primary portfolio" id="projects">
       <div className="container">
       <h2 className="text-center text-uppercase text-secondary mb-0">My Projects</h2>
       <hr className="star-light mb-5" />
        {child}
       </div>
      </section>
    );
  }
}

export default ProjectsContainer;
