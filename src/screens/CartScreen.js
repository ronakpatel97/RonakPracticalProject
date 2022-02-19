import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import MyCard from '../components/MyCard';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

class CartScreen extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      cartTotalAmount: 0,
    }
  }
  //to increase Qty of item
  increaseQty(itemId) {
    this.updateProfileList(itemId,true,this.state.productList)
  }
  //to decrese Qty of item
  decreaseQty(itemId) {
    this.updateProfileList(itemId,false,this.state.productList)
  }
  componentDidMount() {
    try {
      //check cart already has value or not if having values then fetch old value and append new item
      AsyncStorage.getItem('cartProducts')
        .then(value => {
          if (value != null) {
            this.setState({ productList: JSON.parse(value) })
            this.getTotalCount(JSON.parse(value));
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  //getTotalCount function will count total amount of cart
  getTotalCount(arraylist) {
    var TotalAmount = 0;
    for (var i in arraylist) {
      TotalAmount += arraylist[i].price
    }
    this.setState({ cartTotalAmount: TotalAmount })
  }

  //this function will update profile list array
  updateProfileList(itemID,updateFlag,arraylist) { 
    for (var i in arraylist) {
      if(arraylist[i].productID == itemID)
      {
        if(updateFlag){
          //add qty
          arraylist[i].quantity++
        }else{
          //remove qty
          arraylist[i].quantity--
        }
        this.setState({ productList: arraylist });
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.productList}
          renderItem={({ item }) =>
            <MyCard
              proName={item.productName}
              proImage={item.image}
              proDiscription={item.discription}
              proPrice={item.price}
              proQuantity={item.quantity}
              addQty={() => this.increaseQty(item.productID)}
              removeQty={() => this.decreaseQty(item.productID)}
              screenType='Cart'
            />
          }
          keyExtractor={item => item.RID}
        />

        {/* Total Cart Value */}
        <Card style={{ elevation: 6 }}>
          <Card.Content>
            <Title>Total Amount {this.state.cartTotalAmount}</Title>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CartScreen;