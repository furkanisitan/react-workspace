import React, {useEffect, useState} from 'react';

const Detail = ({userId}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (userId)
            setInitialDataAsync();
    }, [userId]);

    const setInitialData = () => {

        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(data => {
                if (data) setUser(data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    };

    const setInitialDataAsync = async () => {
        setIsLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (response.ok) {
            const data = await response.json();
            setUser(data);
        } else {
            console.log(`HTTP error. Status: ${response.status}`);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h2>User Details</h2>
            {isLoading && <div>Loading...</div>}
            {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
    );
};

export default Detail;
