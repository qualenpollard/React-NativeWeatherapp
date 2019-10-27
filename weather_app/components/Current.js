import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const Current = ({ temp, city, weather}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cityText}>{ city }</Text>
            <Text style={styles.weatherText}>{ weather }</Text>
            <Text style={styles.tempText}>{ temp }&#8457;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    cityText: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '200'
    },
    weatherText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '200'
    },
    tempText: {
        textAlign: 'center',
        fontSize: 50, 
        fontWeight: '200'
    }
})

export default Current