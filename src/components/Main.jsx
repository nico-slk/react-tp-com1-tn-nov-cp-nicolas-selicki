import { useEffect, useState } from 'react';
import { AddContact } from './AddContact';
import { ContactList } from './ContactList';

export const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteContact = (contactId) => {
    const filteredList = contacts.filter(contact => contact.id !== contactId);
    setContacts(filteredList);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    // localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  useEffect(() => {
    // const storagedContacts = JSON.parse(localStorage.getItem('contacts'));
    // if (storagedContacts.length !== 0) {
    //   setContacts(storagedContacts);
    // }
    setLoading(false);
  }, [loading]);


  return (
    <main id='main'>
      <ContactList contacts={contacts} deleteContactFn={deleteContact} />
      <AddContact addContact={addContact} setLoadingFn={setLoading} />
    </main>
  );
};
