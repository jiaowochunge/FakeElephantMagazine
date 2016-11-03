'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class ArticleListCell extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.cell} activeOpacity={0.5} underlayColor='lightgray' onPress={()=>{console.log('hi')}}>
        <View style={styles.cell_container}>
          <Text style={styles.cell_title}>{this.props.article.title}</Text>
          <Text style={styles.cell_author}>{this.props.article.author}</Text>
          <Text style={styles.cell_brief}>{this.props.article.brief}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 18}}>
            <Text style={styles.cell_date}>{this.props.article.date}</Text>
            <Text style={styles.cell_readNum}>阅读量:{this.props.article.read_num}</Text>
          </View>
          <Image source={{uri: this.props.article.headpic}} style={styles.cell_img} />
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'white',
  },
  cell_container: {
    marginBottom: 10,
    marginLeft: 18,
  },
  cell_title: {
    marginTop: 22,
    marginRight: 85,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cell_author: {
    marginTop: 8,
    fontSize: 15,
    color: 'darkgray',
  },
  cell_brief: {
    marginTop: 8,
    marginRight: 25,
    marginBottom: 10,
    fontSize: 15,
    color: 'darkgray',
  },
  cell_img: {
    width: 46,
    height: 46,
    borderWidth: 3,
    borderColor: 'white',
    position: 'absolute',
    right: 15,
    top: 18,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 1},
  },
  cell_date: {
    fontSize: 12,
    color: 'lightgray',
  },
  cell_readNum: {
    fontSize: 12,
    color: 'lightgray',
  },
})
