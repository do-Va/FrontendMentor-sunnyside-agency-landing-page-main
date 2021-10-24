import React, { Component } from 'react';
import {
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
        <Header />
        {/* <About />
        <Services />
        <Testimonials />
        <Projects />
        <Contact /> */}
      </main>
    );
  }
}

export default App;
