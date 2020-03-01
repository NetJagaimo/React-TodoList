import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <Header />
            <Route exact path="/" render={() => (
              <React.Fragment>
                <AddTodo />
                <Todos />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
