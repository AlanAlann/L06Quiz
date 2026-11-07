import React, {useState} from 'react';
import {ScrollView, Text, Button, Alert} from 'react-native';
import Player from './components/Player';
import {Picker} from '@react-native-picker/picker';

const AllSoccerPlayer = () => {
    const [p1, setPlayer1] = useState('');
    const [p2, setPlayer2] = useState('');
    const [p3, setPlayer3] = useState('');

    const checkAnswers = () => {
        let marks = 0;

        if (p1 === 'Messi') {
            marks = marks + 1;
        }

        if (p2 === 'Ronaldo') {
            marks = marks + 1;
        }

        if (p3 === 'Neymar') {
            marks = marks + 1;
        }
        if (p1 === '' || p2 === '' || p3 === '') {
            Alert.alert('Error', 'Please select all 3 players!');
        }
    else if (marks === 3) {
            Alert.alert('Good Job!', 'Your Score: 3/3');
        }
        else {
            Alert.alert('Incorrect Answer', 'Try Again! Your Score: ' + marks + '/3');
        }
    };

    return (
        <ScrollView>
            <Text></Text>
            <Text>Whats the player name?:</Text>
            <Player
                SoccerPlayer_name={p1}
                icon_name="soccer-ball"
                icon_color="black"
                poster={{uri: 'https://tse2.mm.bing.net/th/id/OIP.5QBGXFv0r8gxHA4wOgaIawHaEK?r=0&pid=Api&h=220&P=0'}}
            />
            <Picker
                onValueChange={(value) => setPlayer1(value)}
                style={{backgroundColor: 'grey'}}>
                <Picker.Item label="Select Player" value="" />
                <Picker.Item label="Messi" value="Messi" />
                <Picker.Item label="Ronaldo" value="Ronaldo" />
                <Picker.Item label="Neymar" value="Neymar" />
            </Picker>

            <Text>Whats the player name?:</Text>
            <Player
                SoccerPlayer_name={p2}
                icon_name="soccer-ball"
                icon_color="black"
                poster={{uri: 'https://tse2.mm.bing.net/th/id/OIP.b2n1Ry4VTDFzb25Mtj0f6wHaHa?r=0&pid=Api&h=220&P=0'}}
            />
            <Picker
                onValueChange={(value) => setPlayer2(value)}
                style={{backgroundColor: 'grey'}}>
                <Picker.Item label="Select Player" value="" />
                <Picker.Item label="Messi" value="Messi" />
                <Picker.Item label="Ronaldo" value="Ronaldo" />
                <Picker.Item label="Neymar" value="Neymar" />
            </Picker>

            <Text>Whats the player name?:</Text>
            <Player
                SoccerPlayer_name={p3}
                icon_name="soccer-ball"
                icon_color="black"
                poster={{uri: 'https://tse1.mm.bing.net/th/id/OIP.0h-piJbQskosqy12ea0uMgHaLH?r=0&pid=Api&h=220&P=0'}}
            />
            <Picker
                onValueChange={(value) => setPlayer3(value)}
                style={{backgroundColor: 'grey'}}>
                <Picker.Item label="Select Player" value="" />
                <Picker.Item label="Messi" value="Messi" />
                <Picker.Item label="Ronaldo" value="Ronaldo" />
                <Picker.Item label="Neymar" value="Neymar" />
            </Picker>

            <Button title="Submit" onPress={checkAnswers} />

        </ScrollView>
    );
};

export default AllSoccerPlayer;