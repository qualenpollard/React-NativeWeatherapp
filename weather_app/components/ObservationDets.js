import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

const ObservationDets = ({ windDets, atmosDets, astroDets }) => {
    var temp = astroDets.sunrise
    var sunrise = temp.toUpperCase();
    sunrise = sunrise.replace(" ", "")

    temp = astroDets.sunset
    var sunset = temp.toUpperCase();
    sunset = sunset.replace(" ", "")
    
    return (

        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <View style={styles.dataLeft}>
                    <Text style={styles.dataLabel}>Sunrise</Text>
                    <Text style={styles.dataText}>{sunrise}</Text>
                </View>
                <View style={styles.dataRight}>
                    <Text style={styles.dataLabel}>Sunset</Text>
                    <Text style={styles.dataText}>{sunset}</Text>
                </View>
            </View>
            <View style={[styles.dataContainer, {borderTopWidth: .3, borderTopColor: 'rgba(0,0,0,0.5)'}]}>
                <View style={styles.dataLeft}>
                    <Text style={styles.dataLabel}>Wind Speed</Text>
                    <Text style={styles.dataText}>{windDets.speed} mph</Text>
                </View>
                <View style={styles.dataRight}>
                    <Text style={styles.dataLabel}>Feels Like</Text>
                    <Text style={styles.dataText}>{windDets.chill}&#8457;</Text>
                </View>
            </View>
            <View style={[styles.dataContainer, {borderTopWidth: .3, borderTopColor: 'rgba(0,0,0,0.5)'}]}>
                <View style={styles.dataLeft}>
                    <Text style={styles.dataLabel}>Humidity</Text>
                    <Text style={styles.dataText}>{atmosDets.humidity}&#37;</Text>
                </View>
                <View style={styles.dataRight}>
                    <Text style={styles.dataLabel}>Pressure</Text>
                    <Text style={styles.dataText}>{atmosDets.pressure} in</Text>
                </View>
            </View>
            <View style={[styles.dataContainer, {borderTopWidth: .3, borderTopColor: 'rgba(0,0,0,0.5)'}]}>
                <View style={styles.dataLeft}>
                    <Text style={[styles.dataLabel, {paddingTop: 5}]}>Visibility</Text>
                    <Text style={styles.dataText}>{atmosDets.visibility} mi</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopWidth: .3,
        borderTopColor: 'rgba(0,0,0,0.8)',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    dataContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 11
    },
    dataText: {
        fontSize: 20,
        fontWeight: '300',
    },
    dataLabel: {
        fontSize: 15,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.5)'
    },
    dataLeft: {
        paddingLeft: 20,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    dataRight: {
        paddingRight: 20,
        alignItems: 'flex-end'
    },
})

export default ObservationDets