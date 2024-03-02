import { FaTrash } from "react-icons/fa";
import './contactcard.css';

export const ContactCard = ({ contactId, contact, deleteContactFn }) => {
  return (
    <>
      <div className='card-head'>
        <div id='card-id' className='card-section'>
          <p>ID: </p><p className='contact-info'>{contact.id || 0}</p>
        </div>
        <div id='card-namelastname' className='card-section'>
          <p>Nombre y apellido: </p><p className='contact-info'>{contact.name} {contact.lastname}</p>
        </div>
      </div>
      <div id='card-emailnumber' className='card-section'>
        <p>Email: </p><p className='contact-info'>{contact.email}</p>
        <p>Numero: </p><p className='contact-info'>{contact.number}</p>
      </div>
      <div id='desc-btn'>
        <p>Descripcion: {contact.description}</p>
        <button type="button" className='delete-btn' onClick={() => deleteContactFn(contactId)}><FaTrash /></button>
      </div>
    </>
  );
};
