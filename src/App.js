import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import router from './router'


class App extends Component {

  render() {
    return (
      <div>
		<HashRouter>
        { router }
		</HashRouter>

      </div>
    );
  }
  
}

export default App;