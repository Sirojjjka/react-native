import React, {useState, Component} from 'react';
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
    Switch

} from 'react-native';
import CheckBox from 'react-native-check-box'
import NavBarFilter from "../navbar/NavBar-filter";
import axios from "axios";
import Checkbox from "./Checkbox";

class Filters extends Component {
    constructor() {
        super();
        this.state = {isChecked: false};
        this.handleChecked = this.handleChecked.bind(this);


    }

    UNSAFE_componentWillMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            .then(response => {
                this.props.setFilters(response.data.drinks),
                    this.setState({isChecked: !this.state.isChecked})
            });
    }

    let

    handleChecked() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {

        return (
            <View style={styles.main}>

                <View style={styles.NavBar}>
                    <NavBarFilter props={this.props}/>

                </View>

                <ScrollView style={styles.container}>
                    {
                        this.props.drinks.map((drinks) => <View style={styles.flex} key={drinks.id}>
                            <Text style={styles.text}>{drinks.strCategory}</Text>
                            <Checkbox/>

                        </View>)
                    }

                </ScrollView>

                <TouchableOpacity style={styles.apply}>
                    <Image source={require("../../../images/Apply.png")}/>
                </TouchableOpacity>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,

    },
    text: {
        marginTop: 80,
        fontSize: 16,
        marginLeft: 35
    },
    apply: {
        alignItems: 'center',
        marginBottom: 27
    },
    main: {
        flex: 1
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
});

export default Filters;
