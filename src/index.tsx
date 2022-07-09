import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default App;
