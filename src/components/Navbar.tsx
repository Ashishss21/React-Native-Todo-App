import React, { useCallback } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { HStack, IconButton } from 'native-base'
import { Feather } from '@expo/vector-icons'

const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>()
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  return (
    <HStack w="full" h={40} alignItems="center" alignContent="center" p={4}>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: 'menu',
          size: 6,
          color: 'white'
        }}
      />
    </HStack>
  )
}

export default Navbar
