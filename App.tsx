import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import {useFonts, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'
import { ActivityIndicator } from 'react-native';
import { StudentList } from './src/screens/StudentList';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <ActivityIndicator size={40} style={{flex:1}}/> : <StudentList/>}
    </ThemeProvider>
  )
}

