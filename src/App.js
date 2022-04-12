import React, { Component } from "react";
import "./App.css";
import { people } from './people';
console.log(people);

class App extends Component {
  constructor(){
    super();
    console.log("constructor invoked");
    this.state = {
      friends: people,
      friendslist: ""
    }
  }

  viewFriends = (e) => {
    console.log(this.state.friends[0].friends)
    console.log(e.target.innerHTML)
    this.state.friends.map(f => {
      if (e.target.innerHTML.includes(f.first_name)) {
        return (
          f.friends.map(person => {
            <h1>{person.firstName}</h1>
        }))
      }
    })
  }

  seeFriends = (e) => {
    console.log(e.target)
  }

  render() {
    console.log("render invoked");
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        {this.state.friends.map(friend => (
          <>
            <div key={friend.id}>{friend.first_name}</div>
              <button onClick={this.viewFriends}>Click her to see all of {friend.first_name}'s' friends</button>
          </>
        ))}
      </div>
    );
  }
}

export default App;
