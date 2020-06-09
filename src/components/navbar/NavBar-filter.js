import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import DrinksContainer from "../Drinks/DrinksContainer";
import Drinks from "../Drinks/Drinks";

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
    arrow: {
        position: 'absolute',
        left: 20,
        top: 20,
        bottom: 0,
    },
    filters:{
        position: "absolute",
        left: 89,
        top: 25,
    }
})

const NavBarFilter = ({props}) => {
    return (<View style={styles.navBar}>

        <Image  style={styles.filters} source={require('../../../images/Filters.png')}/>
        <TouchableOpacity style={styles.arrow}  onPress={()=>{props.navigation.navigate("title")}}>
            <Image source={require("../../../images/arrow.png")}/>
        </TouchableOpacity>
    </View>)
}
export default NavBarFilter;