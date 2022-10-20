import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Input } from './FilterContacts/Filter';
import { useState, useEffect } from 'react';

const LS_KEY = 'Contacts'
const contactsFromLS = localStorage.getItem(LS_KEY)

const contactsFromStart = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

export const App = () => {
  const [contacts, setContacts] = useState(contactsFromLS ? JSON.parse(contactsFromLS) : contactsFromStart);
  const [filter, setFilter] = useState('');
  
  const addNewContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    const overlap = contacts.filter(contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.number.toLowerCase() === newContact.number.toLowerCase()
    );
    if (overlap.length === 0) {
      setContacts(prevContacts => [...prevContacts, newContact])
    } else {
      alert('This contact has been added')
    }
  };

  const deleteContact = (id) => {
    setContacts(prevContact=> prevContact.filter(contact => contact.id !== id))
  };

  const filterContact = (filterInput) => {
    setFilter(filterInput)
  }

  useEffect(() => {    
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts]
  );

    return (
      <>
        <Section title="Phonebook">
          <FormAddContact
            addNewContact={addNewContact}            
          />
        </Section>        
        <Section title="Contacts">
          <Input filterContact={ filterContact } />
          <ListContacts
            contacts={contacts}
            filter={filter}
            userDelete={deleteContact}
          />
        </Section>
      </>
    );
  }
