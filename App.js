import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922*10,
      longitudeDelta: 0.8421*10,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.1122561,
          longitude: 115.0787794
        },
        title: 'Letak Singaraja Futsal',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.1153024,
          longitude: 115.0817594
        },
        title: 'Metro Sport Singaraja',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.0869582,
          longitude: 115.1393703
        },
        title: 'ARI FUTSAL'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.0999925,
          longitude: 115.0928627
        },
        title: 'G2 Futsal'
      }
      ,
      {
        key:5,
        latlng: {
          latitude:-8.1422082,
          longitude: 115.1706071
        },
        title: 'Gonk Futsal'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak Lapangan Futsal di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> peta_coba_Ndra </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
