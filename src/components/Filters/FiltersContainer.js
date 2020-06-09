import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Button, Alert, Input, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Filters from './Filters';
import {setFiltersAC,setNullFiltersAC} from "../redux/reducers/filters-reducers";

let mapStateToProps = (state) => {
    return {
        drinks: state.filtersPage.drinks
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        setFilters:(drinks)=>{
            dispatch(setFiltersAC(drinks))
        },
        setNullFilters:(payload)=>{
            dispatch(setNullFiltersAC(payload))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filters);
