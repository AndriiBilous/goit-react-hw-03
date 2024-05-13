import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import '..//../index.module.css';
import css from './App.module.css';

const contactData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContact] = useState(getItem);
  const [filter, setFilter] = useState('');

  //======================AddContact========================================
  const addContact = newContact => {
    setContact(preContacts => {
      return [...preContacts, newContact];
    });
  };
  //======================Delete========================================
  const deleteContact = contactId => {
    setContact(preContacts => {
      return preContacts.filter(contact => contact.id !== contactId);
    });
  };
  //======================Filter========================================
  const contactFilter = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );
  //======================Effect========================================
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} setSearch={setFilter} />
      <ContactList contacts={contactFilter} onDelete={deleteContact} />
    </div>
  );
}
//======================LocalStorage========================================
function getItem() {
  const storageItem = localStorage.getItem('contacts');
  if (storageItem !== null) {
    return JSON.parse(storageItem);
  }
  return contactData;
}
export default App;
