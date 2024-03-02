import { ContactCard } from './ContactCard';
import './contactlist.css';

export const ContactList = ({ contacts, deleteContactFn }) => {

  return (
    <div id='contactlist-container'>
      {
        contacts && contacts.map(contact => <div key={contact.id} id='contactcard-container' >
          <ContactCard contactId={contact.id} contact={contact} deleteContactFn={deleteContactFn} />
        </div>
        )
      }
    </div>
  );
};
