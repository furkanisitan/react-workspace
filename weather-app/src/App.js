import Weather from 'components/Weather';
import {AppProvider} from 'context/AppContext';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Dropdown} from 'semantic-ui-react';
import './App.css';

const cityOptions = [
    {key: 1, value: 'Adana', text: 'Adana'},
    {key: 2, value: 'Adıyaman', text: 'Adıyaman'},
    {key: 3, value: 'Afyonkarahisar', text: 'Afyonkarahisar'}
];

function App() {
    return (
        <AppProvider>
            <Container className="app">

                <h2>Wheather App</h2>

                <div className="city-dropdown">
                    <Dropdown placeholder="Şehir Seçin" search selection options={cityOptions}/>
                </div>

                <Weather/>

            </Container>
        </AppProvider>
    );
}

export default App;
