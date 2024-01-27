import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from '../navigation/stackNavigation/Stack'

const MainNavigation = () => {
  return (
   <NavigationContainer>
    <StackNavigation/>
   </NavigationContainer>
  )
}

export default MainNavigation