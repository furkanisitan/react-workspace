import {init, subscribe} from 'api/socket';
import Palette from 'components/Palatte';
import {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [bgColor, setBgColor] = useState('#282c34');

    useEffect(() => {

        init();

        subscribe((color) => {
            setBgColor(color);
        });
    }, []);

    return (
        <div className="App" style={{backgroundColor: bgColor}}>
            <h1>{bgColor}</h1>
            <Palette bgColor={bgColor}/>
        </div>
    );
}

export default App;
