'use strict'

import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View, TouchableHighlight } from 'react-native';
import ArticleListCell from './articleListCell'

export default class ArticleListView extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this._listData = [];
    this.state = { ds: dataSource.cloneWithRows(this._listData) };
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.ds}
        renderRow={this._renderRow.bind(this)}
        renderSeparator={this._renderSeparator.bind(this)}
        enableEmptySections={true}
      />
    )
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <ArticleListCell article={rowData} onPress={() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }} />
    )
  }

  _pressRow(rowID) {
    console.log("You tapped the button!")
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 2 : 0.5,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    )
  }

  componentWillMount() {
    fetch('http://app.idaxiang.org/api/v1_0/art/list?pageSize=20')
    .then((response) => response.json())
    .then((responseJson) => {
      let articles = responseJson.body.article
      articles = articles.map((a) => {
        let update_date = new Date(a.update_time * 1000)
        a.date = update_date.toLocaleDateString()
        return a
      })
      this._listData = this._listData.concat(articles)
      this.setState({ds: this.state.ds.cloneWithRows(this._listData)})
    })
    .catch((error) => {
      console.error(error);
    })
  }
}

const styles = StyleSheet.create({
  listView: {
    paddingTop: 64,
  }
})
