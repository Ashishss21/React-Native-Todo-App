import React from "react";
import {
  Text,
  Center,
  Box,
  VStack,
  useTheme,
  themeTools,
  useColorMode,
  useColorModeValue,
} from "native-base";

export default function HomeScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.100" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box>
          <Text>Hello</Text>
        </Box>
      </VStack>
    </Center>
  );
}
