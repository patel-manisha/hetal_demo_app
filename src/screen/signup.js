import React ,{useState,useEffect}from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {

  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  
} from 'react-native';
const SignupScreen = (props) => {
 
  return (
    <SafeAreaView style={{flex:1}}>

      <View style={{flex:1,}}>
        <View style={{paddingHorizontal:10, flexDirection:'row',backgroundColor:'pink',height:50,alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{
            props.navigation.goBack();
          }} style={{ height:40,width:40,alignItems:'center',justifyContent:'center',}}>
          <Icon name='chevron-back-outline' size={25} color={'black'}/>
          </TouchableOpacity>
        <View style={{flex:1,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.txtTitle}>{"Signup Screen"}</Text>
        </View>
       
        </View>
       <View style={{flex:1,backgroundColor:'yellow'}}>

       </View>
      </View>
    </SafeAreaView>
  );
};
export const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height:50
  },
  profileIconStyle:{
    width:100,
    height:100,
    //justifyContent:'center',
    borderRadius:200/2,
    marginTop:10,
  
  },
  txtTitle:{
    fontSize:20,fontWeight:'bold',color:'blue'
  }
  
});

export default SignupScreen;
