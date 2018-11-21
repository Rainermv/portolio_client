import React, {Component} from 'react';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

class App extends Component {
    render() {

        return (

          <div>
            <Navigation />
            <Header />
            <About />
            <ProjectsContainer/>
            <Footer />
            <ScrollTop />
          </div>

        );
    }
}

export default App;
