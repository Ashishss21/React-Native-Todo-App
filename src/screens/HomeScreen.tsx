import React from "react";
import {
  Text,
  Center,
  Box,
  VStack,
  useColorModeValue
} from "native-base";
import ToggleSupport from "../components/ThemeToggle";

export default function HomeScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.100" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box bg={useColorModeValue('red.500', 'yellow.500')} p={10}>
          <Text>Hello</Text>
        </Box>
        <ToggleSupport/>
      </VStack>
    </Center>
  );
}
