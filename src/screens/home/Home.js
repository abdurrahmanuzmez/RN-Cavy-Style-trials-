import * as React from 'react';
import {View, ScrollView, Text} from 'react-native'

import {Header, SearchInput} from '../../components'
import PlayerObject from "./PlayerObject";
import {FabButton} from "../../components";

//import {hook} from 'cavy';

import {homeStyles as styles} from './styles'

class Home extends React.Component{
    onSearchButtonTouched = () => {
        console.warn("pressed");

        //fetchPlayers('some query');
    };

    onChangeSearchQuery = (text) => {
        console.warn('new txt = ' + text);

        //changeSearchQuery(text);
    };
    onFabButtonTouched = ()=>{
        console.warn('fabButton touched');

        //fetchPlayers('');
    };

    render() {

        return(
            <View style={{flex: 1}}>

                <ScrollView style={{flex: 1}}>
                    <Header/>
                    <SearchInput
                        placeholder='search your player'
                        onPress={this.onSearchButtonTouched}
                        onChangeText={this.onChangeSearchQuery}
                        style={{alignSelf: 'center'}}
                    />
                    <View style={styles.line}/>
                    <PlayerObject />
                </ScrollView>
                <FabButton icon='refresh' onPress={this.onFabButtonTouched} style={styles.fabButton}/>
            </View>
        )
    }
}

const stateToProps = (state) => {
    return{};
};

export default Home;
//export default hook(Home);
