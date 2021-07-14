import WeatherCard from 'components/WeatherCard';
import React from 'react';
import {Card} from 'semantic-ui-react';

const weathers = [
    {day: 'Pzt', icon: '01d', min: 22, max: 34},
    {day: 'Sa', icon: '02d', min: 25, max: 45},
    {day: 'Çar', icon: '03d', min: 18, max: 23},
    {day: 'Per', icon: '09d', min: 14, max: 24},
    {day: 'Cum', icon: '11d', min: 19, max: 28},
    {day: 'Cmt', icon: '10d', min: 33, max: 55},
    {day: 'Paz', icon: '04d', min: 10, max: 16}
];

function Weather() {
    return (
        <Card.Group itemsPerRow={weathers.length}>

            {weathers.map(value =>
                <WeatherCard {...value}/>
            )}
        </Card.Group>
    );
}

export default Weather;
