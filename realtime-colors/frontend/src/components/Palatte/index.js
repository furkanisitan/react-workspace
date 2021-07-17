import {send} from 'api/socket';
import React, {useEffect, useState} from 'react';

function Palette({bgColor}) {

    const [color, setColor] = useState(bgColor);

    const handleChange = (e) => {
        setColor(e.target.value);
    };

    const handleClick = () => {
        send(color);
    };

    useEffect(() => {

        setColor(bgColor);
    }, [bgColor]);

    return (
        <div className="palette">

            <input type="color" value={color} onChange={handleChange}/>

            <button onClick={handleClick}>Submit</button>

        </div>
    );
}

export default Palette;
