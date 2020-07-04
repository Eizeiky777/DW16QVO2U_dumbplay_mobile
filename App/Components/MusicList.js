import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { block } from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');



const imageMusic = [
  {
    id: 1,
    name: 'Yiruma',
    img: require('../Assets/1.jpg'),
  },
  {
    id: 2,
    name: 'Henry',
    img: require('../Assets/2.png'),
  },
  {
    id: 3,
    name: 'Rich B',
    img: require('../Assets/3.png'),
  },
  {
    id: 4,
    name: 'Michele',
    img: require('../Assets/4.png'),
  },
  {
    id: 5,
    name: 'Louis Fonsi',
    img: require('../Assets/5.png'),
  },
];

function Item({ title, img }) {
  return (
    <View style={{ padding: 5}}>
      <Image source={img} style={styles.imgMusic}/>
      <View style={styles.statAlbum}>
        <Text style={{color: 'white'}}>{title.slice(0,7)}</Text>
        <Text style={{color: 'white'}}>2001</Text>
      </View>
      <Text style={{color: 'white', paddingHorizontal: 2}}>artist</Text>
    </View>
  );
}

class MusicList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View >

        <View style={styles.itemContainer}>
            <FlatList
                data={imageMusic}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View>
                    <Item title={item.name} img={item.img}/> 
                  </View> 
                  )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

      </View>
    );
  }
}

export default MusicList;



const styles = StyleSheet.create({

  imgMusic: {
    width: 90,
    height: 90,
  },
  itemContainer: {
    backgroundColor: '#3A3A3A',
    alignItems: 'center',

  },
  statAlbum: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2
  },

});
