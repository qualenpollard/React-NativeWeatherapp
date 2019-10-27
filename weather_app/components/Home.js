import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import param from 'jquery-param'
import Current from './Current'
import Forecast from './Forecast';
import ObservationDets from './ObservationDets';
import { API_KEY, BASE_URL, CONSUMER_KEY, CONSUMER_SECRET } from '../utils/APIInfo'
import { conditions } from '../utils/ConditionStyles'

var concat = '&';
var query = { 'location': 'kansascity,mo', 'format': 'json' };
var oauth = {
    'oauth_consumer_key': CONSUMER_KEY,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'PLAINTEXT',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
};
var merged = {}

class Home extends Component {
    constructor() {
        super()
        this.state = {
            dataLoaded: false,
            city: 'City',
            conditionCode: 0,
            currentTemp: 80,
            wind: {},
            atmosphere: {},
            astronomy: {},
            forecast: []
        }
    }

    componentDidMount() {
        Object.assign(merged, query)
        Object.assign(merged, oauth)

        oauth['oauth_signature'] = CONSUMER_SECRET + concat;
        var auth_header = 'OAuth ' + Object.keys(oauth).map(function (k) {
            return [k + '="' + oauth[k] + '"'];
        }).join(',');

        
        var url = BASE_URL + '?' + param(query)
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Yahoo-App-Id': API_KEY,
                'Authorization': auth_header
            }
        }).then((response) => response.json())
          .then((responseJson) => {
                this.setState({
                    dataLoaded: true,
                    city: responseJson.location.city,
                    conditionCode: responseJson.current_observation.condition.code,
                    currentTemp: responseJson.current_observation.condition.temperature,
                    wind: responseJson.current_observation.wind,
                    atmosphere: responseJson.current_observation.atmosphere,
                    astronomy: responseJson.current_observation.astronomy,
                    forecast: responseJson.forecasts
                })
          })
          .catch((error) => {
              console.log("Received error")
              console.error(error);
          })
    }

    render() {
        let { currentTemp, city, forecast, dataLoaded, 
              conditionCode, wind, atmosphere, astronomy } = this.state;
        
        if (!dataLoaded) {
            return (
                <View style={styles.dataLoad}>
                    <Text style={styles.dataLoadText}>Fetching Data</Text>
                    <ActivityIndicator size="small" />
                </View>
            )
        } else {
            return (
                <SafeAreaView style={{flex: 1, backgroundColor: conditions[conditionCode].color}}>
                    <Current temp={currentTemp} city={city} weather={conditions[conditionCode].title} />
                    <View style={{flex:1.5}}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.forecastLabel}>Day</Text>
                            <View style={styles.tempLabelContainer}>
                                <Text style={[styles.forecastLabel, {paddingRight: 58}]}>&uarr;</Text>
                                <Text style={styles.forecastLabel}>&darr;</Text>
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <ScrollView>
                                <Forecast forecast={forecast} />
                                <ObservationDets windDets={wind} atmosDets={atmosphere} astroDets={astronomy} />
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
            )
        }
    }
}

const styles = StyleSheet.create({
    dataLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataLoadText: {
        fontSize: 20,
        fontWeight: '200'
    },
    labelContainer: {
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 30,
        paddingBottom: 10
    },
    tempLabelContainer: {
        flexDirection: 'row',
    },
    forecastLabel: {
        fontSize: 20,
        fontWeight: '500',
    },
})

export default Home