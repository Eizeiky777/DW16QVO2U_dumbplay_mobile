import React, {Component} from 'react';
import {
  View,  StyleSheet, Text, 
  ScrollView, Image, Modal, 
  Alert} from 'react-native';
import BannerComponent from '../Components/BannerComponent';
import MusicList from '../Components/MusicList';
import SongsComponent from '../Components/SongsComponent';
import {Surface} from 'react-native-paper';
import {  
  Left, Button, 
  Right, Container, Header,
  Content, Form, Item, Input } from "native-base";
// const {width, height} = Dimensions.get('window');

function ModalLogin({modalVisible, setModalVisible}){
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          <View style={styles.modalLoginView} >
            <Container 
              style={{
                backgroundColor: '#3A3A3A', borderWidth: 2, borderColor: 'white' }}>
              <Header style={{backgroundColor: 'black'}} >
                  <Text style={styles.modalLoginText}>
                    LOGIN
                  </Text>
              </Header>
              <Content>
                <Form>
                  <Item>
                    <Input placeholder="Username" placeholderTextColor={'#eae5e1'} />
                  </Item>
                  <Item>
                    <Input placeholder="Password" placeholderTextColor={'#eae5e1'} />
                  </Item>
                </Form>
              </Content>
              <Button
                style={styles.buttonModalLogin}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{color: 'white', paddingLeft: 67, fontSize: 20}}>Login</Text>
            </Button>
            </Container>
          </View>
      </Modal>
  )
}


class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

  const { modalVisible } = this.state;

    return (
      <>
      <View>
        <ModalLogin modalVisible={modalVisible} setModalVisible={this.setModalVisible} />
      </View>
      <View style={styles.container}>
            <Header style={{backgroundColor: '#3A3A3A'}}>
              <Left>
                <Image source={require('../Assets/DUMBSOUND.png')} />
              </Left>
              <Right>
                  
              </Right>
            </Header>

        <View style={{height: 200}}>
          <BannerComponent navigation={this.props.navigation} />
        </View>
          

          <ScrollView>
            <View style={styles.motto}>
              <Text style={styles.textMotto}>Dengarkan dan Rasakan </Text>
            </View>
            <MusicList navigation={this.props.navigation} />
            <MusicList navigation={this.props.navigation} />
            <View style={{backgroundColor: '#3A3A3A', height: 20}}></View>
            <SongsComponent navigation={this.props.navigation} />
          </ScrollView>
          {/* <Text style={[styles.title, {marginTop: 0}]}>Songs</Text> */}
          {/* <SongsComponent navigation={this.props.navigation} />  */}

      </View>
    </>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    height: 220,
    width: 220,
    elevation: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    height: 50,
    width: '100%',
    backgroundColor: 'black',
    paddingLeft: 5,
  },
  btn: {
    height: 40,
    marginRight: 5,
    width: '30%',
    textAlign: 'center',
    borderRadius: 7,   
  },
  btnRegis: {
    height: 40,
    marginRight: 5,
    width: '30%',
    textAlign: 'center',
    borderRadius: 7,
    backgroundColor: '#EE4622'    
  },
  fixToText: {
    flexDirection: 'row',
  },
  motto: {
    paddingTop: 20,
    paddingBottom: 23,
    backgroundColor: '#3A3A3A',
  },
  textMotto: {
    textAlign: 'center', color: '#EE4622', fontSize: 16
  }, 


  // modal style css

  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalLoginText: {
    padding: 10,
    textAlign: 'center', 
    fontSize: 24,
    color: 'white',
  },
  modalLoginView: {
    height: 300, 
    width: 350, 
    marginTop: 150,
    marginLeft: 30,
    marginRight: 10,
  },
  buttonModalLogin: {
    backgroundColor: '#EE4622',
    width: '50%',
    left: 90,
    bottom: 20,
    borderRadius: 15
  },

});

