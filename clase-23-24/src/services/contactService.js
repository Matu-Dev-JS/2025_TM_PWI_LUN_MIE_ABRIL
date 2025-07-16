const contacts = [
    {
        id: 1,
        name: 'Pedro',
        description: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: '15:23',
        connectionStatus: 'offline'
    },
    {
        id: 2,
        name: 'Juan',
        description: 'rie ama y sueña',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: 'ahora',
        connectionStatus: 'online'
    }
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) =>{
    for(const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
    return null
}