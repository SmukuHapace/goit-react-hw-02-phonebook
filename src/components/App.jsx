import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };
    const isContactExist = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (isContactExist) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(e => ({
        contacts: [...e.contacts, newContact],
      }));
    }
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDisplayContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={this.handleDisplayContacts()}
          onDeleteContact={this.handleDeleteContact}
        />
      </section>
    );
  }
}
