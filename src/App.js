import React, { Component } from "react";
import "./App.css";
import { people } from "./people";
console.log(people);

class App extends Component {
  constructor() {
    super();
    console.log("constructor invoked");
    this.state = {
      friends: people
    };
  }

  viewFriends = (e) => {
    let appendTarget = document.getElementById("target");
    this.state.friends.map((f) => {
      if (e.target.textContent.includes(f.first_name)) {
        return f.friends.map((person, index) => {
          let newValue = document.createElement("li");
          newValue.id = index;
          newValue.textContent = `${person.firstName} ${person.lastName}`;
          appendTarget.appendChild(newValue);
        });
      }
    });
  };

  componentDidMount() {
    console.log("CDM invoked!");
  }

  render() {
    console.log("render invoked");
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        {this.state.friends.map((friend) => (
          <>
            <div key={friend.id}>{friend.first_name}</div>
            <button onClick={this.viewFriends}>
              Click her to see all of {friend.first_name}'s' friends
            </button>
            <ul id="target">
              This is the list of {friend.first_name}'s' friends
            </ul>
          </>
        ))}
      </div>
    );
  }
}

export default App;
