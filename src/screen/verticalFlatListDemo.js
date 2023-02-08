import react, { useState,useEffect } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';


const VerticalFlatListDemo=(props)=>{
    const dummyArray = [
        {id: '1', value: 'A'},
        {id: '2', value: 'B'},
        {id: '3', value: 'C'},
        {id: '4', value: 'D'},
        {id: '5', value: 'E'},
        {id: '6', value: 'F'},
        {id: '7', value: 'G'},
        {id: '8', value: 'H'},
        {id: '9', value: 'I'},
        {id: '10', value: 'J'},
        {id: '11', value: 'K'},
        {id: '12', value: 'L'},
        {id: '13', value: 'M'},
        {id: '14', value: 'N'},
        {id: '15', value: 'O'},
        {id: '16', value: 'P'},
        {id: '17', value: 'Q'},
        {id: '18', value: 'R'},
        {id: '19', value: 'S'},
        {id: '20', value: 'T'},
        {id: '21', value: 'U'},
        {id: '22', value: 'V'},
        {id: '23', value: 'W'},
        {id: '24', value: 'X'},
        {id: '25', value: 'Y'},
        {id: '26', value: 'Z'},
      ];
      const [listItems, setListItems] = useState(dummyArray);
      const [getEmail, setEmail] = useState(props?.route?.params?.email);

      props.navigation.navigate('gridFlatListScreen')

      useEffect(()=>{
        fetch('https://api.publicapis.org/entries')
        .then(response => response.json())
        .then(json => {
            const entriesData=json.entries;
           // setListItems(entriesData)
            console.log("json data::",entriesData)
          //return json.movies;
        })
        .catch(error => {
          console.error(error);
        });
      },[])
  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item

   // alert('Id: ' + item.id + ' Value: ' + item.value);
  };
      const ItemView = ({item}) => {
       // const {Category,Description}=item
        console.log("Item View:::",item)
        return (
          // FlatList Item
          <View style={{flex:1, margin:10}}>
             {/* <Text
              style={styles.item}
              onPress={() => getItem(item)}>
              {Category}
            </Text>
            <Text
              style={styles.item}
              onPress={() => getItem(item)}>
              {Description}
            </Text> */}
            <Text
              style={styles.item}
              onPress={() => getItem(item)}>
              {item.value}
            </Text> 
          </View>
        );
      };
return(<SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
      <Text style={{marginVertical:20}}>{getEmail}</Text>
    <FlatList
          data={listItems}
          //horizontal
          //numColumns={3}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
</SafeAreaView>)
}
const styles = StyleSheet.create({
    container: 
    {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
    item: 
    {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
  });
export default VerticalFlatListDemo;