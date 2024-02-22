import { useState } from 'react';
import './addcontact.css';

export const AddContact = ({ addContact, setLoadingFn }) => {
  const [newContact, setNewContact] = useState({});

  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    });
  };

  const newContactSubmit = (newContact) => {
    setLoadingFn(true);
    setNewContact({
      ...newContact,
      id: parseInt(Math.random() * 1000),
    });
    addContact(newContact);
    setLoadingFn(false);
  };

  return (
    <div id='contact-container'>
      <div id='name-lastname'>
        <input type="text" name="name" placeholder='Nombre' className='input' onChange={handleChange} />
        <input type="text" name="lastname" placeholder='Apellido' className='input' onChange={handleChange} />
      </div>
      <div id='num-email'>
        <input type="text" name="number" placeholder='Numero' className='input' onChange={handleChange} />
        <input type="text" name="email" placeholder='Email' className='input' onChange={handleChange} />
        <textarea id="description" className='input' name="description" cols="30" rows="10" placeholder='Descripcion' onChange={handleChange} ></textarea>
      </div>
      <div id='buttons-container'>
        <input type="button" value="Agregar" className='btn' onClick={() => newContactSubmit(newContact)} />
        <input type="button" value="Limpiar" className='btn' />
      </div>
    </div>
  );
};
