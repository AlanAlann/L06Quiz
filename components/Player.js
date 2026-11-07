import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const Player = ({SoccerPlayer_name, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>

            <Text>
                <FontAwesome6
                    name={icon_name}
                    size={40}
                    color={icon_color}
                />
                {' '}{SoccerPlayer_name}
            </Text>

            <Image
                source={poster}
                style={{width: 400, height: 500}}
            />

        </View>
    );
};

export default Player;