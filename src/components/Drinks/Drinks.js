import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Button,
    Alert,
    Input,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    SectionList
} from 'react-native';
import axios from "axios";
import NavBar from "../navbar/NavBar";
import Pagination,{Icon,Dot} from 'react-native-pagination';
import Objects from "./Object";


class Drinks extends Component{
    constructor() {
        super();
        this.state={
            page:1,

        }
        this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this)
    }
    UNSAFE_componentWillMount() {

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary%20Drink`).then(response => {
            this.props.setDrinks(response.data.drinks)
        });

    }
    onViewableItemsChanged = ({ viewableItems, changed }) =>this.setState({viewableItems})
 render(){
const currentDrinks = this.props.drinks;
     //попытка реализовать пагинацию закоментирована.   

     {/*  const Objects=(currentDrinks)=>{
         console.warn(currentDrinks)
         return(
             <View style={styles.container}>

             </View>
         )
     }
   const  _renderItem = ({item}) => {
         return (<Objects index={item.idDrink}

                              name={item.strDrink}
                              avatar={item.strDrinkThumb}
                              description={item.email}
                              tag={item.group}
                              createTagColor
         />)
     };
 */}
    return (
        <View style={styles.container}>
        <View style={styles.heading}>
            <NavBar props={this.props}/>
        </View>
            <View style={{marginTop:20, fontSize:14, lineHeight: 16,marginLeft:20,paddingBottom: 30}}>
                <Text>Ordinary Drink</Text>
            </View>
            {/*
<View style={{flex:1}}>

    <FlatList data={currentDrinks}
              ref={r=>(this.refs=r)}
              keyExtractor={this.item.id}
              renderItem={this._renderItem}
              onViewableItemsChanged={this.handleViewableItemsChanged}/>
    <Pagination
        // dotThemeLight //<--use with backgroundColor:"grey"
        listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
        paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
        paginationItems={currentDrinks}//pass the same list as data
        paginationItemPadSize={3} //num of items to pad above and below your visable items
    />


</View>*/}
        <ScrollView style={styles.container}>
            <Objects drinks={currentDrinks}/>
        </ScrollView>
        </View>
    )

}
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading:{
        flex:0.138
    }
});

export default Drinks;
