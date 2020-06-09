import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Button, Alert, Input, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Drinks from './Drinks';
import {setDrinksAC, setPageAC} from "../redux/reducers/drinks-reducers";

let mapStateToProps = (state) => {
    return {
        drinks: state.drinksPage.drinks,
        page:state.drinksPage.page
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        setDrinks:(drinks)=>{
            dispatch(setDrinksAC(drinks))
        },
        setPage:(page)=>{
            dispatch(setPageAC(page))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
