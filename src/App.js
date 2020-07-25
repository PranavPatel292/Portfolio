import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './main.css'

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <div class="footer">
          <Footer/>
        </div>
     </div>
    );
  }
}

export default App;
