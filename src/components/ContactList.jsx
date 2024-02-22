import { ContactCard } from './ContactCard';
import './contactlist.css';

export const ContactList = ({ contacts, deleteContactFn }) => {

  return (
    <div id='contactlist-container'>
      {console.log(contacts)}
      {
        contacts && contacts.map(contact => <div id='contactcard-container' key={contact.id}>
          <ContactCard contactId={contact.id} contact={contact} deleteContactFn={deleteContactFn} />
        </div>
        )
      }
    </div>
  );
};
