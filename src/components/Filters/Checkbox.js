import React, {Component} from 'react';
import CheckBox from 'react-native-check-box'
import {Image} from "react-native";


class Checkbox extends Component {

    state = {
        isChecked: true
    };

    handleChecked = async () => {
        await this.setState({isChecked: !this.state.isChecked});

        if (this.state.isChecked) {
            //Пишем логику для активного чекбокса
        } else {
            //Пишем логику для неактивного чекбокса
        }
        ;
    };

    render() {
        const {value} = this.props;
        const {isChecked} = this.state;

        return (
            <CheckBox style={{marginTop: 80, alignItems: 'flex-end', flex: 1, marginRight: 20}}
                      onClick={this.handleChecked} value={value} isChecked={isChecked}
                      checkedImage={<Image source={require('../../../images/Checked.png')}
                      />}
            />
        );
    };
}

export default Checkbox;
