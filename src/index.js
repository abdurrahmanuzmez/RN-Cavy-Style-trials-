import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import Home from "./screens/home/Home";

import {hook} from 'cavy';


class Index extends React.Component{

    render() {

        return(
            <View>
                <Home />

                <TextInput
                    ref={this.props.generateTestHook('SearchBar.TextInput')}
                    placeholder='Search'
                />
            </View>
        )
    }
}

//export default Index;
export default hook(Index);

