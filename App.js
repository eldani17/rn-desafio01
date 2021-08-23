import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from 'react-native';

const App = () => {
  const [list, setList] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    setList([...list, {id: Math.random().toString(), value: itemName}]);
    setItemName('');
  };

  const handleRemoveItem = id => {
    const listFilter = list.filter(item => item.id !== id);
    setList([...listFilter]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.containerAdd}>
        <TextInput
          placeholder="Agregar un item"
          value={itemName}
          style={styles.addInput}
          onChangeText={text => setItemName(text)}
        />
        <Button title="add" onPress={handleAddItem} />
      </View>
      {list.length > 0 && (
        // <View style={styles.containerList}>
        //   {list.map((item, index) => (
        //     <View key={index} style={styles.containerItem}>
        //       <Text>{item}</Text>
        //       <Button title="Remove" onPress={() => handleRemoveItem(item)} />
        //     </View>
        //   ))}
        // </View>
        <FlatList
          style={styles.containerList}
          data={list}
          renderItem={data => {
            console.log('itemlis', data);
            return (
              <View style={styles.containerItem}>
                <Text style={styles.textFlatList}>{data.item.value}</Text>
                <Button
                  title="Remove"
                  onPress={() => handleRemoveItem(data.item.id)}
                />
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  containerAdd: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 3,
    padding: 3,
  },
  containerList: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
  },
  containerItem: {
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 5,
  },
  textFlatList: {
    color: 'red',
  },
});

export default App;
