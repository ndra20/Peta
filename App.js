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
          latitude:-8.598953,
          longitude: 115.253444
        },
        title: 'Letak Supermarket di Bali',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.684688,
          longitude: 115.182621
        },
        title: 'Supermarket Carefour di Bali',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.688075,
          longitude: 115.263630
        },
        title: 'Hardys Supermarket Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.690279,
          longitude: 115.263103
        },
        title: 'Coco Mart Bali'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak Supermarket di Bali
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
