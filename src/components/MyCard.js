import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import * as String from '../common/String';

const MyCard = ({ proName, proImage, proDiscription, proPrice, onPressAddToCart, addQty, removeQty, screenType,proQuantity }) => {
    function getButtons(screenType) {
        if (screenType == 'Home') {
            return (
                <Button mode="contained" color='#004c8c' labelStyle={{ fontSize: 12 }} onPress={onPressAddToCart} style={{ width: 300, alignSelf: 'center' }}>Add to cart</Button>
            );
        } else {
            return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                <Button mode="contained" color='#004c8c' labelStyle={{ fontSize: 12 }} onPress={removeQty} style={{ width: 50, alignSelf: 'center' }}>-</Button>
                <Text style={{ fontSize: 20 }}>{proQuantity}</Text>
                <Button mode="contained" color='#004c8c' labelStyle={{ fontSize: 12 }} onPress={addQty} style={{ width: 50, alignSelf: 'center' }}>+</Button>
            </View>
            );
        }
    }
    return (
        <View style={{ margin: 10 }}>
            <Card style={{ elevation: 6 }}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Card.Cover style={{ height: 90, width: 90, borderRadius: 50 }} source={{ uri: proImage }} />
                    <Card.Content>
                        <Title style={{ fontSize: 18 }} >{proName}</Title>
                        <Paragraph>{proDiscription}</Paragraph>
                        <Text style={{ fontSize: 14, }}>{'Price : ' + proPrice}</Text>
                    </Card.Content>
                </View>
                {getButtons(screenType)}
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    inputTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default MyCard;