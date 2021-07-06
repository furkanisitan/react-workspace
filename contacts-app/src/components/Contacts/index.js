import Form from 'components/Contacts/Form';
import List from 'components/Contacts/List';
import React, {useState} from 'react';

const initialContacts = [
    {fullName: 'User 1', phoneNumber: '123456789'},
    {fullName: 'User 2', phoneNumber: '123456788'},
    {fullName: 'User 3', phoneNumber: '123456787'}
];

function Contacts() {

    const [contacts, setContacts] = useState(initialContacts);

    return (
        <div>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form contacts={contacts} setContacts={setContacts}/>
        </div>
    );
}

export default Contacts;
