import AsyncStorage from '@react-native-async-storage/async-storage';

export const onSignOut = () => AsyncStorage.removeItem('AUTH_TOKEN');
export const isLogout = () => AsyncStorage.removeItem('isLogin');

export const isSignedIn = () => {
  return new Promise(async (resolve, reject) => {

    const isLogin = await AsyncStorage.getItem('isLogin');


    if (isLogin != undefined && isLogin !== null && isLogin !== '') {
      resolve(true);
    } else {
      resolve(false);
    }
   
  });
};

export const setIsLogin = async data => {
  if (data != null) {
    try {
      await AsyncStorage.setItem('isLogin', JSON.stringify(data));
    } catch (error) {}
  }
};