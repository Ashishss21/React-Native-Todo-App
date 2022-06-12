import { View } from "native-base";
import React, { useEffect, memo } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg";

const MARGIN = 10;
const vWidth = 64 * MARGIN;
const vHeight = 64 * MARGIN;

const AnimatedCheckBox = () => {
  return (
    <View>
      <Svg
        viewBox={[-MARGIN, -MARGIN, vWidth + vHeight, vHeight + MARGIN].join(
          ""
        )}
      >
          <Path d="" stroke="black" />
          <Path d="" stroke="black" />
        </Svg>
    </View>
  );
};
