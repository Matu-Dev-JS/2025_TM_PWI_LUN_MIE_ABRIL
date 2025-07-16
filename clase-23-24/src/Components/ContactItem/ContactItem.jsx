import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <div>
        <h2>{contact.name}</h2>
        <img src={contact.avatar} alt={contact.name} width={100} />
        <span>Last Connection: {contact.lastConnection}</span>
        <span>Connection Status: {contact.connectionStatus}</span>
    </div>
  );
};

export default ContactItem;