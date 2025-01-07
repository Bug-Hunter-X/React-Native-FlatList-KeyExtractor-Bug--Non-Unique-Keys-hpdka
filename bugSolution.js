The solution is to modify the `keyExtractor` function to always return unique keys.  One way to achieve this is by using the item's index or generating a UUID.

```javascript
import {FlatList, Text, View} from 'react-native';
import uuid from 'react-native-uuid'; //you might need to install this package

const data = [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}];

const App = () => {
  return (
    <View>
      <FlatList
        data={data.map((item) => ({...item, id: uuid.v4()}))}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default App;
```
This revised code uses the `react-native-uuid` package to generate unique IDs for each item, ensuring that the `keyExtractor` function always returns a unique key.