import { useState } from 'react';
import './addcontact.css';

export const AddContact = ({ addContact, setLoadingFn }) => {
  /**
   * Seteo un estado con valoes vacios y generando un ID de 3 digitos como maximo
   */
  const [newContact, setNewContact] = useState({
    id: parseInt(Math.random() * 1000),
    name: "",
    lastName: "",
    number: "",
    email: "",
    description: "",
  });

  /**
   *  El manejador de cambios, lo que hace es detectar el cambio en el input.
   * 
   * Tomamos el elemento activo, y creamos una "key" con la propiedad "name" del elemento activo 
   * y su "value" será el valor que tenga el elemento activo.
   * 
   * Usando "Destructuring" en el objeto, podremos ir creando objetos de forma dinámica sin perder atributos del objeto.
   */
  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Al finalizar, ejecutamos la función que llega a este componente como propiedad desde el componente padre, "addContact" con el objeto del nuevo contacto.
   * 
   * Al estado actual lo inicializamos con valores vacios excepto el ID que se genera uno nuevo, para vaciar los campos de los input luego de darle en "agregar"
   */
  const newContactSubmit = () => {
    setLoadingFn(true);
    addContact(newContact);
    setNewContact({
      id: parseInt(Math.random() * 1000),
      name: "",
      lastName: "",
      number: "",
      email: "",
      description: "",
    });
    setLoadingFn(false);
  };

  return (
    <div id='contact-container'>
      <div id='name-lastname'>
        <input
          type="text"
          name="name"
          value={newContact.name}
          placeholder='Nombre'
          className='input'
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          value={newContact.lastName}
          placeholder='Apellido'
          className='input'
          onChange={handleChange}
          required
        />
      </div>
      <div id='num-email'>
        <input
          type="number"
          name="number"
          value={newContact.number}
          placeholder='Numero'
          className='input'
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={newContact.email}
          placeholder='Email'
          className='input'
          onChange={handleChange}
          required
        />
        <textarea id="description"
          className='input'
          name="description"
          cols="30"
          rows="10"
          value={newContact.description}
          placeholder='Descripcion'
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div id='buttons-container'>
        <input
          type="button"
          value="Agregar"
          className='btn'
          onClick={newContactSubmit}
        />
        <input
          type="button"
          value="Limpiar"
          className='btn'
        />
      </div>
    </div>
  );
};
