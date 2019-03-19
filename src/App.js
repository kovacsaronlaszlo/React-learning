import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'aron', age: 31 },
      { name: 'viki', age: 26 },
      { name: 'janka', age: 2 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('CLICK!');
    this.setState(
      {
        persons: [
          { name: newName, age: 31 },
          { name: 'Viki', age: 26 },
          { name: 'Janka', age: 2.5 }
        ]
      }
    )
  }

  nameChangeHandler = (even) => {
    this.setState(
      {
        persons: [
          { name: 'Áron', age: 31 },
          { name: 'Viki', age: 26 },
          { name: even.target.value, age: 2.5 }
        ]
      }
    )
  }

  render() {
    /**
     * for inline Style
     */
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>hello, I am Lindsay Lohan</h1>
        <p>sálálá</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Áron!!!!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Áron!')} >hobbies: dancing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} changed={this.nameChangeHandler}/>
      </div>
    );
    /*
    return React.createElement(
      'div', 
      {className: 'App'}, 
      React.createElement(
        'h1', 
        null, 
        'Hello, I am Lindsay Lohan'
        )
      );*/
  }
}

export default App;
