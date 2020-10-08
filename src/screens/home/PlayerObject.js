import * as React from 'react';
import {View, Text, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

import {colors} from "../../config/colors";

import {playerObjectStyles as styles} from './styles'

class PlayerObject extends React.Component {
    render() {
        const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

        const countryName = 'some players';

        return (
            <TouchableComponent style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.playerFlag}/>
                    <Text style={styles.playerName}>{countryName}</Text>

                </View>
            </TouchableComponent>
        );
    }
}

export default PlayerObject;
