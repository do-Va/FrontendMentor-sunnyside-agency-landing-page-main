import React, { Component } from 'react';
import {
  Navbar,
  Header,
  About,
  Services,
  Testimonials,
  Projects,
  Contact,
} from './Components/App/index';

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Header />
        <About />
        <Services />
        {/* <Testimonials />
        <Projects />
        <Contact /> */}
      </main>
    );
  }
}

export default App;
