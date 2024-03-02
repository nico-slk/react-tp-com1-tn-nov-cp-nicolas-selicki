import { useEffect, useState } from 'react';
import { AddContact } from './AddContact';
import { ContactList } from './ContactList';
import { Search } from './Search';

export const Main = () => {
  const [contacts, setContacts] = useState([]); //Lista completa de contactos
  const [searchList, setSearchList] = useState([]); //Lista de contactos buscados
  const [loading, setLoading] = useState(true); //Flag para actualizar el ciclo de vida del componente, puede usarse para mostrar un "loading"


  /**
   * deleteContact recibe el ID del contacto que se va a borrar, este filtra y guarda todos aquellos contactos que NO coincidan su ID.
   * 
   * luego se guarda en el Local Storage, "pisando" la información anterior.
   * 
   * Se actualiza la lista de contactos buscados y la lista completa de contactos.
   */
  const deleteContact = (contactId) => {
    const deletedList = contacts.filter(contact => contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(deletedList));
    setSearchList(deletedList);
    setContacts(deletedList);
  };

  /**
   * addContact recibe un nuevo contacto que será agregado al Local Storage.
   * 
   * luego se actualiza la lista de contactos buscados y la lista completa de contactos.
   */
  const addContact = (newContact) => {
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
    setSearchList([...contacts, newContact]);
    setContacts([...contacts, newContact]);
  };

  /**
   * handleSearch se ejecuta cuando escribimos algo en el buscador, irá filtrando cada vez que escribimos en el buscador.
   * 
   * Cada vez que escribimos, se actualiza el "string" del buscador y cada vez que se actualiza, 
   * compara si existe un contacto con un nombre que empiece con los mismo caracteres escritos en el buscador.
   * 
   * La condicion, lo que hace es "si el array de contactos filtrados está vacío, entonces muestra la lista entera de contactos. Sino, muestra los elementos del array"
   * y dependiendo de la condicional, la lista de elementos buscados se actualizará con la lista entera de contactos o con la lista de contactos encontrados
   */
  const handleSearch = (event) => {
    const namesSearched = contacts.filter(contact => contact.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
    if (namesSearched.length === 0) setSearchList(contacts);
    else setSearchList(namesSearched);
  };

  /**
   * En el useEffect buscamos los elementos del Local Storage. Si NO está vacío, mostrará la lista de elementos del caché
   * y definirá la lista de contactos completa y la lista de contactos buscados (cuando no se buscó ninguno, muestra la lista completa)
   */
  useEffect(() => {
    const storagedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storagedContacts?.length > 0) {
      setSearchList(storagedContacts);
      setContacts(storagedContacts);
    }
    setLoading(false);
  }, [loading]);


  return (
    <main id='main'>
      <Search handleSearch={handleSearch} />
      <ContactList contacts={searchList} deleteContactFn={deleteContact} />
      <AddContact addContact={addContact} setLoadingFn={setLoading} />
    </main>
  );
};
