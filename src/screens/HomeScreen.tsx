import React from 'react'
import { Center, VStack, Text } from 'native-base';
import ThemeToggle from '../components/ThemeToggle';

export default function HomeScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        {/* <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} /> */}
        <ThemeToggle />

        <Text>Hello hello</Text>
      </VStack>
    </Center>
  )
}
