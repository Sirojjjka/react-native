import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Button,
    Alert,
    Input,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const Objects=({drinks})=>{
    return(
        <ScrollView style={styles.container}>
            {
                drinks.map(drinks => <View style={styles.flex} key={drinks.idDrink}>
                    <Image style={styles.icon} source={{uri: drinks.strDrinkThumb}}></Image>
                    <Text style={styles.text}>{drinks.strDrink}</Text>

                </View>)
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: 100,
        width: 100,
        marginLeft: 5,
        marginRight: 5,
    },
    container: {
        flex: 1
    },
    text: {
        fontSize:16,
        lineHeight:19,
        flex: 1,
        alignItems: 'center'
    },
    flex: {
        paddingBottom:40,
        flexDirection: 'row'
    },
    heading:{
        flex:0.138
    }
});


export default Objects;
