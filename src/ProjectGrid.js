import React, {Component} from 'react';


class ProjectGrid extends Component {

  render() {

    //const projects = this.props;

    return(

      <div>
        
        <div className="row">
          {this.props.projects}
        </div>
      </div>

    );
  }
}

export default ProjectGrid;
