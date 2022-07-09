import React, { useState, useCallback } from 'react'
import { Center, VStack, Text } from 'native-base';
import ThemeToggle from '../components/ThemeToggle';
import TaskItem from '../components/TaskItem';

export default function HomeScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
