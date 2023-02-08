import React, { useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {isSignedIn} from '../service/asyncstoragenretrive';

export const AuthLoading = (props) => {
  useEffect(() => {
    isSignedIn().then(isLoggedin => {
      if (isLoggedin == true) 
      {
        props.navigation.navigate('SignedInStack');
       // NavigationService.navigateAndReset('SignedInStack');
      } else 
      {
       props.navigation.navigate('SignedOutStack');
       // NavigationService.navigateAndReset('SignedOutStack');
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});