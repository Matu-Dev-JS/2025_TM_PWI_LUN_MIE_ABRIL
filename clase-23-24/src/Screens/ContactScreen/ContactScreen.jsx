import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';




const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

  return (
    <div>
      <ContactList contacts={contactsState} />
    </div>
  );
};

export default ContactScreen;

/* 
v1:
Hace un componente de React llamado ContactScreen, que tenga un estado con la lista de contactos, dicha lista debera renderizarse dentro del componente, por cada contacto quiero que crees un <div></div> con la informacion del contacto. Observa las propiedades de cada contacto para mostrarlas en la pantalla, necesito que dividas el renderizado de la lista en un componente aparte llamado ContactList que reciba el estado de la lista y cada ContactItem tambien sera un componente aparte. 
*/