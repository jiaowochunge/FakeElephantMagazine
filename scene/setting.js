'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableHighlight } from 'react-native';

export default class SettingView extends Component {
  constructor() {
    super();
    let blob = []
    let section1 = {}
    section1.sectionTitle = ''
    section1.rows = [
      {title: '文章字号', subTitle: '标准', hasIndicator: true},
      {title: '清除缓存', subTitle: '0 MB', hasIndicator: false}
    ]
    blob.push(section1)
    let section2 = {}
    section2.sectionTitle = 'contact us'
    section2.rows = [
      {title: '微信公众号', subTitle: 'idxgh2013', hasIndicator: false},
      {title: '新浪微博', subTitle: '@大象公会', hasIndicator: false},
      {title: '电子邮件', subTitle: 'bd@idaxiang.org', hasIndicator: false}
    ]
    blob.push(section2)
    let section3 = {}
    section3.sectionTitle = 'others'
    section3.rows = [
      {title: '分享大象公会应用', subTitle: '', hasIndicator: false},
      {title: '分享大象公会微信公众号', subTitle: '', hasIndicator: false},
      {title: '给大象公会报选题', subTitle: '', hasIndicator: true},
      {title: '用户体验改进计划', subTitle: '', hasIndicator: true},
      {title: '关于开发者', subTitle: '', hasIndicator: true}
    ]
    blob.push(section3)
  }
  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        style={styles.scrollView}>
        <View style={styles.section}>
          <TouchableHighlight style={{borderTopLeftRadius: 5, borderTopRightRadius: 5}} activeOpacity={0.5} underlayColor='lightgray' onPress={()=>{console.log('hi')}}>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>文章字号</Text>
              <Text style={styles.cell_subTitle}>标准</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>清除缓存</Text>
              <Text style={styles.cell_subTitle}>0 MB</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.section_head}>联系我们</Text>
        <View style={styles.section}>
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>微信公众号</Text>
              <Text style={styles.cell_subTitle}>idxgh2013</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>新浪微博</Text>
              <Text style={styles.cell_subTitle}>@大象公会</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>电子邮件</Text>
              <Text style={styles.cell_subTitle}>bd@idaxiang.org</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.section_head}>其他</Text>
        <View style={styles.section}>
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>分享大象公会应用</Text>
              <Text style={styles.cell_subTitle}></Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>分享大象公会微信公众号</Text>
              <Text style={styles.cell_subTitle}></Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>给大象公会报选题</Text>
              <Text style={styles.cell_subTitle}></Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>用户体验改进计划</Text>
              <Text style={styles.cell_subTitle}></Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separateLine} />
          <TouchableHighlight>
            <View style={styles.cell}>
              <Text style={styles.cell_title}>关于开发者</Text>
              <Text style={styles.cell_subTitle}></Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ECECEC',
    marginTop: 64,
  },
  section_head: {
    marginTop: 5,
    marginLeft: 24,
    color: 'gray',
    fontSize: 16,
  },
  section: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cell: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell_title: {
    marginLeft: 18,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cell_subTitle: {
    marginRight: 24,
    color: 'gray',
    fontSize: 14,
  },
  cell_arrow: {
    marginRight: 10,
  },
  separateLine: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  },
});
