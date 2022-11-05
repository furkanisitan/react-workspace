import './index.css';
import Detail from 'components/Users/Detail';
import List from 'components/Users/List';

import React, {useState} from 'react';

const Users = () => {

    const [userId, setUserId] = useState(null);

    return (
        <div className="user-page">
            <List userId={userId} setUserId={setUserId}/>
            <Detail userId={userId}/>
        </div>
    );
};

export default Users;
