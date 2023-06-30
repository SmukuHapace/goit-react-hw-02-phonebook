import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import { ContactForm } from './ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson' },
      { id: nanoid(), name: 'Hermione Kline' },
      { id: nanoid(), name: 'Eden Clements' },
      { id: nanoid(), name: 'Annie Copeland' },
    ],
  };

  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };
    this.setState(e => ({
      contacts: [...e.contacts, newContact],
    }));
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ul className="contacts-content">
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
