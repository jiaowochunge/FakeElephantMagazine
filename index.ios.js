/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';
import * as config from './config'
import Setting from './scene/setting'
import ArticleList from './scene/articleList'


export default class FakeElephantMagazine extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{scene: 'articleList'}}
        renderScene={(route, navigator) =>
          {
            switch (route.scene) {
              case 'articleList':
                return (<ArticleList />)
              case 'setting':
                return (<Setting />)
              default:
                return (<Text style={{marginTop: 64}}>404 not found</Text>)
            }
          }
        }
        navigationBar={
          <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              {
                if (route.scene === 'articleList') {
                  return (
                    <TouchableHighlight onPress={() => navigator.push({scene: 'setting'})}>
                      <Text style={styles.navBar_leftButton}>Setting</Text>
                    </TouchableHighlight>
                  )
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text style={styles.navBar_leftButton}>Back</Text>
                    </TouchableHighlight>
                  )
                }
              },
             RightButton: (route, navigator, index, navState) =>
               {
                 if (route.scene === 'setting' || route.scene === 'articleList') {
                   return null
                 } else {
                   return (
                     <Text>Done</Text>
                   )
                 }
               },
             Title: (route, navigator, index, navState) =>
               {
                 switch (route.scene) {
                   case 'setting':
                     return (<Text style={styles.navBar_title}>Setting</Text>)
                   default:
                     return (<Text style={styles.navBar_title}>daxiang gonghui</Text>)
                 }
               },
           }}
           style={{backgroundColor: config.main_color}}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  navBar_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 44,
  },
  navBar_leftButton: {
    fontSize: 14,
    color: 'white',
    lineHeight: 44,
    marginLeft: 6,
  },
});

AppRegistry.registerComponent('FakeElephantMagazine', () => FakeElephantMagazine);
