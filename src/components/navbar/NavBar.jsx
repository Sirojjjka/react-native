import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        width: 414,
        height: 70,
        left: 0,
        top: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#FFFFFF',

    },
    filter: {
        position: 'absolute',
        left: 325,
        top: 20,
        bottom: 0,
    },
    drinks:{
        position: "absolute",
        left: 30,
        top: 25,
    }
})

const NavBar = ({props}) => {
    return (<View style={styles.navBar}>

        <Image  style={styles.drinks} source={require('../../../images/drinks.png')}/>
        <TouchableOpacity style={styles.filter}  onPress={()=>{props.navigation.navigate("filters")}}>
            <Image source={require("../../../images/filter.png")}/>
        </TouchableOpacity>
    </View>)
}
export default NavBar;
