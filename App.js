import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import {Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Player from './App/Screens/Player';
import CategoriesDetails from './App/Components/CategoriesDetails';
import Home from './App/Screens/Home';
import Login from './Auth/login';
import Register from './Auth/register';

import Tabs from './App/config/router';

class App extends Component {
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

  goToTabs() {
    this.props.navigation.navigate('Tabs');
  }
  goToRegister() {
    this.props.navigation.navigate('Register');
  }

  // componentDidMount(){
  //   this.props.navigation.navigate('Tabs');
  // }

  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const zoomIn = {
      0: {
        scale: 0,
      },
      0.5: {
        scale: 0.5,
      },
      1: {
        scale: 0.5,
      },
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text style={styles.title}>Music App</Text>
        <Animatable.Image
          animation={zoomIn}
          source={require('./App/Assets/DUMBSOUND.png')}
          style={styles.logo}
        />
        {/* <TouchableOpacity style={styles.btn} onPress={() => this.goToTabs()}>
          <Text style={styles.text}>Start Listening</Text>
        </TouchableOpacity> */}
        <Login register={() => this.goToRegister()} tabs={() => this.goToTabs()}/>
      </View>
    );
  }
}

/// STACK /////////////////////////////////////
const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

/// MAINSCREEN /////////////////////////////
function MainScreen() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

export default MainScreen;

////////////////////////////////////////////////////////// STYLE //////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    height: 50,
    width: '100%',
    marginBottom: 40,
    marginTop: 20
  },
  btn: {
    width: '30%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#EE4622',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});
