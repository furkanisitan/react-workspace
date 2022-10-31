import StopWatch from 'components/stopwatch';
import {useState} from 'react';
import './App.css';

function App() {

    const [visible, setVisible] = useState({text: 'Hide', value: true});

    const handleClick = (e) => {
        setVisible({text: visible.value ? 'Show' : 'Hide', value: !visible.value});
    };

    return (
        <div className="App">
            {visible.value && <StopWatch second={0}/>}
            <button onClick={handleClick}>{visible.text}</button>
        </div>
    );
}

export default App;
