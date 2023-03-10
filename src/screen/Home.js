import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import {data} from '../Data/data';

const {width} = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Home = () => {
 
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Home</Text>
        </View>
  
        {/* Scrollable Content */}
        <View style={styles.scrollContainer}>
          <ScrollView
            indicatorStyle="white"
            contentContainerStyle={[
              styles.scrollContentContainer,
              {paddingBottom: 70},
            ]}>
            {data.map((item) => (
              <View key={item.id} style={styles.imageContainer}>
                <Image
                source={{uri:item.image_url}}
                  style={styles.imageCard}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    scrollContainer: {
      flex: 1,
      backgroundColor:'yellow'
    },
    scrollContentContainer: {
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 14,
    },
    imageCard: {
      borderRadius: 14,
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
    },
  });
  
  export default Home;