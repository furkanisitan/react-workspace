import './index.css';
import React, {useEffect, useState} from 'react';

const List = ({userId, setUserId}) => {

    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setInitialDataAsync();
    }, []);

    const setInitialData = () => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(data => {
                if (data) setUsers(data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    };

    const setInitialDataAsync = async () => {

        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (response.ok) {
            const data = await response.json();
            setUsers(data);
        } else {
            console.log(`HTTP error. Status: ${response.status}`);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h2>Users</h2>
            {isLoading && <div>Loading...</div>}

            {users &&
                <ul>
                    {users.map(user => (
                        <li
                            key={user.id}
                            className={userId === user.id ? 'selected' : ''}
                            onClick={() => setUserId(user.id)}>{user.name}
                        </li>
                    ))}
                </ul>
            }

        </div>
    );
};

export default List;
