import React from "react";
import {
  Text,
  Center,
  Box,
  VStack,
  useColorModeValue
} from "native-base";
import ToggleSupport from "../components/ThemeToggle";
import AnimatedCheckBox from "../components/animated-checkbox";

export default function HomeScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.100" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <AnimatedCheckBox/>
        </Box>
        <Box bg={useColorModeValue('red.500', 'yellow.500')} p={10}>
          <Text>Hello</Text>
        </Box>
        <ToggleSupport/>
      </VStack>
    </Center>
  );
}
