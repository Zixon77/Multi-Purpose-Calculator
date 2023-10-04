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
import Currency from "./src/screens/Currency"
import Distance from "./src/screens/Distance"
import Fuel from "./src/screens/Fuel"
import GPA from './src/screens/GPA';
import Mortage from  "./src/screens/Mortage"
import Numbers from "./src/screens/Numbers"
import Percentage from "./src/screens/Percentage"
import Random from "./src/screens/Random"
import Temperature from "./src/screens/Temperature"

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
              name = "Adult BMI"
              component={BMI}
            />
              <Drawer.Screen
              name = "Currency"
              component={Currency}
            />
              <Drawer.Screen
              name = "Distance"
              component={Distance}
            />
              <Drawer.Screen
              name = "Fuel"
              component={Fuel}
            />
              <Drawer.Screen
              name = "GPA"
              component={GPA}
            />
              <Drawer.Screen
              name = "Mortgage"
              component={Mortage}
            />
              <Drawer.Screen
              name = "Percentage"
              component={Percentage}
            />
              <Drawer.Screen
              name = "Numbers"
              component={Numbers}
            />
              <Drawer.Screen
              name = "Random"
              component={Random}
            />
              <Drawer.Screen
              name = "Temperature"
              component={Temperature}
            />
          </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

