import React, { Component } from 'react';

class ContactList extends Component {
    state = {
        query: ''
    }

    // updateQuery=()=>{
    //     this.setState({
    //         query:this.state.query.trim()
    //     })
    // }

    handleChange = (e) => {
        this.setState({ query: e.target.value })

    }

    render() {
        const{query} = this.state;
        const {contacts} = this.props;
        

        const showContacts = query===''? contacts: contacts.filter(c=> c.name.toLowerCase().includes(query.toLowerCase()))

        return (<div>
            <div className='list-contacts' >
                <div className='list-contacts-top'>
                    <input className='search-contacts' type='name'
                        value={query} placeholder='Search for Contact...'
                        onChange={this.handleChange} />
                    <button className='add-contact'></button>
                </div>
            </div>
        {showContacts.length !== contacts.length &&(<div className='showing-contacts'>
            <span >Showing {showContacts.length} of {contacts.length}</span></div>)}
            
            <ol className="contact-list">
                {showContacts.map(contact => (
                    <li key={contact.id} className="contact-list-item">
                        <div className='contact-avatar'
                            style={{ backgroundImage: `url(${contact.avatarURL})` }}>

                        </div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <div  className='contact.remove'>
                            <button onClick={()=>{this.props.onDelete(contact)}}>x</button>
                        </div>
                    </li>

                ))}

            </ol>

        </div>);
    }
}

export default ContactList;