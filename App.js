import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Button, Alert, Input, TouchableOpacity} from 'react-native';
import NavBar from "./src/components/navbar/NavBar";
import store from './src/components/redux/redux-store'
import {Provider} from 'react-redux';
import {MODES} from './src/components/constants/index'
import DrinksContainer from "./src/components/Drinks/DrinksContainer";
import FiltersContainer from "./src/components/Filters/FiltersContainer";
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";



const Stack = createStackNavigator();


const App = () => {

    return (

      <Provider store={store}>

          <View style={styles.container}>
              <StatusBar hidden={true} />
            <NavigationContainer>

                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>

                    <Stack.Screen name='title' component={DrinksContainer}/>
                    <Stack.Screen name = 'NavBar' component={NavBar}/>
                    <Stack.Screen name='filters' component={FiltersContainer}/>
                </Stack.Navigator>
            </NavigationContainer>
          </View >
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    heading:{
        flex: 1,
    }
});


export default App;
