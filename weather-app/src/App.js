import Weather from 'components/Weather';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Card, Container, Dropdown, Segment} from 'semantic-ui-react';
import './App.css';

const cityOptions = [
    {key: 1, value: 'Adana', text: 'Adana'},
    {key: 2, value: 'Adıyaman', text: 'Adıyaman'},
    {key: 3, value: 'Afyonkarahisar', text: 'Afyonkarahisar'}
];

function App() {
    return (
        <Container className="app">

            <h2>Wheather App</h2>

            <div className="city-dropdown">
                <Dropdown placeholder="Şehir Seçin" search selection options={cityOptions}/>
            </div>

            <Weather/>

        </Container>
    );
}

export default App;
