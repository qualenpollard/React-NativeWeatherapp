import React from 'react';
import { View } from 'react-native';
import Day from './Day'

const Forecast = ({ forecast }) => {
    forecast = forecast.map((day) => {
        return (
            <Day
                key={day.date}
                day={day} />
        )
    })
    
    return (
        <View>
            { forecast }
        </View>
    )
}

export default Forecast