import React from 'react'
import {
  Box,
  ScrollView,
  Text,
  useColorModeValue,
  VStack,
  Icon
} from 'native-base'
import AnimatedColorBox from '../components/AnimatedColorBox'
import HeroHeader from '../components/HeroHeader'
import Navbar from '../components/Navbar'
import { Feather } from '@expo/vector-icons'
import LinkButton from '../components/LinkButton'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <HeroHeader title="About Me!!" image={require('../assets/about.png')}>
        <Navbar />
      </HeroHeader>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <VStack flex={1} space={4}>
              <Box alignItems="center"></Box>
              <Text fontSize="md" w="full">
                Todo App built using following components:- {"\n"}
                1. React Native {"\n"}
                2. NativeBase {"\n"}
                3. Expo
              </Text>
              <LinkButton
                colorScheme="red"
                size="lg"
                borderRadius="full"
                href="https://ashishsengar.netlify.com"
                leftIcon={
                  <Icon as={Feather} name="globe" size="sm" opacity={0.5} />
                }
              >
                Visit my portfolio website
              </LinkButton>
              <LinkButton
                colorScheme={useColorModeValue('blue', '')}
                size="lg"
                borderRadius="full"
                href="https://www.linkedin.com/in/ashish-sengar212/"
                leftIcon={
                  <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
                }
              >
                LinkedIn Profile
              </LinkButton>
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
