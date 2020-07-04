import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, 
  Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import BannerComponent from '../Components/BannerComponent';
import MusicList from '../Components/MusicList';
import SongsComponent from '../Components/SongsComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Transaction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <Header style={{backgroundColor: '#3A3A3A'}}>
              <Left>
                <Image source={require('../Assets/DUMBSOUND.png')} />
              </Left>
              <Right>
                  
              </Right>
          </Header>
          <View>
            <View style={styles.title}>
              <Text style={styles.titleText}>Premium</Text>
            </View>
            <View style={styles.paragrafBody}>
              <Text style={styles.paragrafText}>Bayar sekarang dan nikmati streaming music yang kekinian </Text>
              <Text style={styles.paragrafText}><Text style={{color: '#EE4622'}}>DUMB</Text>SOUND : 0981312323</Text>
            </View>
          </View>
          <View style={styles.containerTransaksi}>
              <TextInput
                style={styles.input}
                placeholder='input your account number'

              />
              <TouchableOpacity
                style={styles.btnFile}
              >
                  <Text style={styles.btnFileText}>attach proof of transfer</Text>
                  <Icon
                    name='cloud-upload'
                    size={24}
                    color='#EE4622'
                    style={{paddingTop: 4, paddingLeft: 80}}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
              >
                  <Text style={{textAlign: 'center', paddingTop: 5, color: 'white', fontSize: 20}}>Send</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    );
  }
}

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3A3A',
  },
  title: {
    margin: 30,
  },
  titleText:{
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragrafBody: {
    marginBottom: 5
  },
  paragrafText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 5,
  },
  loggedIn: {
    padding: 10, 
    color: 'white', 
    fontSize: 25,
  },
  input: { 
    width: 280,
    height: 40, 
    borderColor: 'white', 
    borderWidth: 1,
    margin: 10,
    paddingLeft: 5,
    backgroundColor: 'rgba(210, 210, 210, 0.25)',
    borderRadius: 5,
  },
  btnFile: {
    width: 280,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#161616',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row'
  },
  btnFileText:{
    paddingTop: 7,
    paddingLeft: 6,
    color: '#EE4622', 
    fontSize: 14,
  },
    btn: {
    width: 280,
    height: 40,
    marginTop: 10,
    backgroundColor: '#F58033',
    borderRadius: 5
  },
  containerTransaksi:{
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    marginTop: 10,
  }


});
