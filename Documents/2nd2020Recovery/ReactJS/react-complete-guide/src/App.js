import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
class App extends Component {
  state = {
    persons: [
      {id: "1", name: "Tadele", age: "30"},
      {id: "2", name: "Unknown", age: "45"},
      {id: "3", name: "ThirdPerson", age: "67"}
    ], 
    sampleText: "This is extra", 
    displayPersonList: false
  }

  

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }
  
  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(person => {
        return person.id == id
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person; 

    this.setState({
      persons: persons
    })
  }

  manipulateDisplay = () => {
    const isDisplay = this.state.displayPersonList;
    this.setState({
      displayPersonList: !isDisplay
    })
  }

  render() {

   const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
    `
    let persons = null; 

    if(this.state.displayPersonList){
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return (<Person 
                    click={() => this.deletePersonHandler(index)} 
                    changed={(event) => {this.nameChangedHandler(event, person.id)}}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    />);
        })}
        
      </div>);
    }

    const classes = [];

    if(this.state.persons.length <= 3){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
     
    <div className="App">
      <h1>Hello I am react App</h1>
    <p className={classes.join(' ')}>Ready to toggle and length is {this.state.persons.length}</p>
      <StyledButton alt={this.state.displayPersonList} onClick={this.manipulateDisplay}>Switch Person Display</StyledButton>
      {persons}
    </div>
    
    );
    
    //return React.createElement("div", {className: "pp"}, React.createElement("h1", null, "Hello I am react App"))
      
  }
}

export default App;
