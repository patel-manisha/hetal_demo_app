import React ,{useState,useEffect}from 'react';

import {

  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
  
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { setIsLogin } from '../service/asyncstoragenretrive';
const Loginpage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const onSubmit=()=>{

    setIsLogin(true);
    props.navigation.navigate('SignedInStack')
  
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      
      <View style={{flex:1,margin:20,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'blue'}}>{"Let's Login"}</Text>
        <View style={{marginTop:20,width:'100%'}}>
        <TextInput 
      style={styles.input} 
      onChangeText={(text)=>{
        console.log("Here is:-   ",text)
        setEmail(text)
      }} 
       placeholder="Enter email" 
      value={email}
      />
      <TextInput style={[styles.input,{marginTop:20}]} onChangeText={(text)=>{
        console.log("Here is:-   ",text)
      setPassword(text)
      }} 
       placeholder="Enter Password" 
      value={password}
      />
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember Me</Text>
      </View>
<TouchableOpacity
 onPress={onSubmit} 
 style={styles.btnButton}>
  <Text style={{color:'white'}} >{"Submit"}</Text>
</TouchableOpacity>
</View>
</ScrollView>
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
  btnButton:{
    height:50,width:200,
    backgroundColor:'blue',borderRadius:20
    ,alignItems:'center',justifyContent:'center',marginTop:20,alignSelf:'center'
  },
  checkboxContainer: {
  flexDirection: 'row',
  marginTop: 20,
  alignItems:'center'
},
checkbox: {
  alignSelf: 'center',
  marginRight:10
},
label: {
  margin: 8,
},
});

export default Loginpage;