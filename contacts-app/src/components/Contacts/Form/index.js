import React, {useEffect, useState} from 'react';

const initialFormValues = {fullName: '', phoneNumber: ''};

function Form({setContacts, contacts}) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullName === '' || form.phoneNumber === '') {
            return false;
        }

        setContacts([...contacts, form]);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={onChangeInput}
                />
            </div>

            <div>
                <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={onChangeInput}
                />
            </div>

            <div className="btn">
                <button type="submit">Add</button>
            </div>
        </form>
    );
}

export default Form;
