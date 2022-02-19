import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import MyCard from '../components/MyCard';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      productList: [
        {
          "productID": "P01",
          "productName": "MEN'S JACKET",
          "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
          "price": 1000,
          "discription": "This is mens jacket discription",
          "quantity":1
        },
        {
          "productID": "P02",
          "productName": "Tracking Shoes",
          "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
          "price": 500,
          "discription": "This is shoes discription",
          "quantity":1
        },
        {
          "productID": "P03",
          "productName": "Travel Bag",
          "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
          "price": 200,
          "discription": "This is Travel Bag discription",
          "quantity":1
        },
        {
          "productID": "P04",
          "productName": "Jeans Travel Bag",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "price": 200,
          "discription": "This is bag discription",
          "quantity":1
        },
      ],
    }
  }
  /* 
   @Description : add product into cart when user click on add to cart
   @Params : NA
   @Author : Ronak Patel
   @Date : 19 Feb 2022
   */
  addToCart(productValue) {

    try {
      var myCartlist = [];
      //check cart already has value or not if having values then fetch old value and append new item
      AsyncStorage.getItem('cartProducts')
        .then(value => {
          if (value != null) {
            myCartlist = JSON.parse(value);
            // myCartlist.push(productValue);
            // const jsonValue = JSON.stringify(myCartlist)
            // AsyncStorage.setItem('cartProducts', jsonValue);
          }
          myCartlist.push(productValue);
          const jsonValue = JSON.stringify(myCartlist)
          AsyncStorage.setItem('cartProducts', jsonValue)
          alert('Item added sucessfully to cart')
        })
    } catch (error) {
      console.log(error);
    }
  }

  /* 
   @Description : go to cart when user click cart icon 
   @Params : NA
   @Author : Ronak Patel
   @Date : 19 Feb 2022
   */
  goToCart() {
    this.props.navigation.navigate('Cart');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Appbar.Header style={{ backgroundColor: '#004c8c' }}>
          <Appbar.Content title="My Shop" />
          <Appbar.Action icon="cart" onPress={() => this.goToCart()} />
        </Appbar.Header>
        <View>
          <FlatList
            data={this.state.productList}
            renderItem={({ item }) =>
              <MyCard
                proName={item.productName}
                proImage={item.image}
                proDiscription={item.discription}
                proPrice={item.price}
                onPressAddToCart={() => this.addToCart(item)}
                screenType='Home'
              />
            }
            keyExtractor={item => item.RID}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputLabel: {
    color: "#B71C1C",
    fontSize: 16,
  },
});

export default HomeScreen;