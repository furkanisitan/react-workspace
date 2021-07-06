import Form from 'components/Contacts/Form';
import List from 'components/Contacts/List';

import 'components/Contacts/styles.css';
import React, {useState} from 'react';

const initialContacts = [
    {fullName: 'Ali', phoneNumber: '598984'},
    {fullName: 'Veli', phoneNumber: '14515'},
    {fullName: 'Ayşe', phoneNumber: '92592'}
];

function Contacts() {

    const [contacts, setContacts] = useState(initialContacts);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form contacts={contacts} setContacts={setContacts}/>
        </div>
    );
}

export default Contacts;
