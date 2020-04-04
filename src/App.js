import React, { Component } from 'react';
import ContactList from './components/contactlist';


class App extends Component {
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]


  }
  remove=(contact)=>{
    this.setState(
      {
        contacts:[...this.state.contacts.filter(remov=> remov.id !== contact.id )]
      }
    )
  }
  render() {
    return (
      <div>
        
        <ContactList contacts={this.state.contacts} onDelete={this.remove}/>
      </div>
    );
  }
}

export default App;
