import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

const Day = ({ day }) => {
    return (
        <View style={styles.dayContainer}>
            <View style={styles.dayTextContainer}>
                <Text style={styles.forecastDataText}>{ day.day }</Text>
            </View>
            <View style={styles.dayTempContainer}>
                <View style={{flex: 2.3, justifyContent: 'flex-start'}}>
                    <Text style={styles.forecastDataText}>{ day.high }</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                    <Text style={styles.forecastDataText}>{ day.low }</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 11,
        paddingBottom: 11,
        borderTopWidth: .3,
        borderTopColor: 'rgba(0,0,0,0.5)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    dayTextContainer: {
        flex: 2.6,
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },
    forecastDataText: {
        fontSize: 20,
        fontWeight: '300',
    },
    dayTempContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20
    },
})

export default Day