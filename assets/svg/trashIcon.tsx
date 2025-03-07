import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const trashIcon = (props:SvgProps) => (
  <Svg
    width={34}
    height={32}
    viewBox="0 0 34 32"
    fill="none"
    {...props}
  >
    <Rect
      x={0.13916}
      width={33.2278}
      height={32}
      fill="url(#pattern0_14_703)"
    />
    <Defs>
      <Pattern
        id="pattern0_14_703"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_14_703"
          transform="matrix(0.0160508 0 0 0.0166667 0.0184762 0)"
        />
      </Pattern>
      <Image
        id="image0_14_703"
        width={60}
        height={60}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVR4nO3UsUoDURSE4fsgWvsqiUXeU5u8UQQxRSAEr8y/rRKx2CohJGd31PngdFvc4YdtLSIi/jFgJWkLfJ66n29W7bcDdufGjm7XXEh6lPRyweMnueObJC0rBr/OPe7E6LcMvpakpaSNYd2NpMXVAyPib8LgRzW+DL41DKqmcCUMqqZwJQyqpnAlDKqmcCUMqqZwJQyqpnAlDKqmcCUMqqZwJQyqpnAlDKqmcCUMqqZwJQyqpnAlDKqmcCUMqqZwJQyqpnAl4GPuqqN7b9UkrQ2Gfp+kp/LBvfcH4DD3WGAP3LUpDMNwL+kZ6DMM7ceyk42NiIiIditf5tJKB7hMMl8AAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default trashIcon;
