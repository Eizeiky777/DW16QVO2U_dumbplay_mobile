import React, { Component } from 'react';
import { StyleSheet, Image, View, ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, 
Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{ height: 200}}>
        <Content style={styles.containerMainJumbotron}>
          <Card>
            <CardItem cardBody>
              {/* <Image source={require('../Assets/jumbotron.png')}/> */}
              <ImageBackground source={require('../Assets/jumbotron.png')}  style={styles.containerJumbotron} >
                <View style={styles.jumbotronCenter}>
                  <Text style={styles.jumbotronTextCenter}>Connect on DumbSound</Text>
                  <Text style={styles.jumbotronTextCenterSmall}>
                    Discovery, Stream, and share a constantly expanding 
                    mix of music from emerging and major artists around the world
                  </Text>
                </View>
              </ImageBackground>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerMainJumbotron: {
    backgroundColor: '#3A3A3A',
    borderColor: 'black',
    height: 200,
  },
  containerJumbotron: {
    height: 200, width: null, flex: 1
  },
  containerMotto: {
    backgroundColor: '#3A3A3A'
  },
  jumbotronCenter: {
    position: 'absolute', 
    top: 0, left: 0, right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  jumbotronTextCenter: {
    color: 'white',
    fontSize: 24,
  },
  jumbotronTextCenterSmall: {
    width: 350,
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },

})