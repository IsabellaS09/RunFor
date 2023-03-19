import { Box, Heading, HStack, Input, NativeBaseProvider, Progress, ScrollView, Switch, Text, VStack } from 'native-base';
import { Animated, AppRegistry, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import AppContextProvider from './components/appProvider';
import Disclaimer from './components/disclaimer';
import Main from './components/main';


export default function App() {

  return (
    <AppContextProvider>
      <SafeAreaView>
        <Animated.View>
          <Main />
        </Animated.View>
      </SafeAreaView>
      <Disclaimer />
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});