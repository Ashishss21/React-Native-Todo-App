import { Button, IButtonProps, Icon, useColorModeValue } from 'native-base'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icons: string
  children: React.ReactNode
}

const MenuButton = ({ active, icons, children, ...props }: Props) => {
  const colorScheme = useColorModeValue('blue', 'darkblue')
  const inactiveTextColor = useColorModeValue('blue.500', undefined)
  const pressedBgColor = useColorModeValue('primary.100', 'primary.600')

  return (
    <Button
      size="lg"
      colorScheme={colorScheme}
      bg={active ? undefined : 'transparent'}
      _pressed={{
        bg: pressedBgColor
      }}
      _text={{
        color: active ? 'blue.50' : inactiveTextColor
      }}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icons} size="sm" opacity={0.5} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton