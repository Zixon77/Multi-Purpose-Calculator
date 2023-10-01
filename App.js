import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import Generic from './src/screens/Generic';
import Tip from './src/screens/Tip';
import Units from "./src/screens/Units"
import BMI from "./src/screens/BMI"
import colors from './src/assets/colors';
import CustomDrawerContent from './src/components/CustomDrawerContent';

//test

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar style='light'/>
      <NavigationContainer>
          <Drawer.Navigator screenOptions={{
            headerStyle:{backgroundColor:colors.payneGray},
            headerShadowVisible:false,
            drawerStyle:{backgroundColor:colors.payneGray},
            headerTitleStyle:{color:colors.platnium},
            drawerLabelStyle:{fontSize:20, color:colors.platnium,margin:"3%"},
            drawerActiveTintColor:colors.frenchGray,
            }} drawerContent={props => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen
              name = "Generic"
              component={Generic}
            />
            <Drawer.Screen
              name = "Tip"
              component={Tip}
            />
             <Drawer.Screen
              name = "Units"
              component={Units}
            />
            <Drawer.Screen
              name = "BMI"
              component={BMI}
            />
          </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

