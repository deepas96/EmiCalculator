/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EMI from './src/EMI'



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/xiaotian/repos').then(
      resp => resp.json() // this returns a promise
    ).then(repos => {
      var gitData = []
      for (const repo of repos) {
        // console.log(repo.name);
        gitData.push(repo.name + "\n")

      }
      setData(gitData)
    }).catch(ex => {
      console.error(ex);
    })
  });
      

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <EMI/>
  );
};


export default App;
