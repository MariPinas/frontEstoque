import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const importIcon = (props:SvgProps) => (
  <Svg
    width={35}
    height={32}
    viewBox="0 0 35 32"
    fill="none"
    {...props}
  >
    <Rect width={35} height={32} fill="url(#pattern0_14_573)" />
    <Defs>
      <Pattern
        id="pattern0_14_573"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_14_573"
          transform="matrix(0.0152381 0 0 0.0166667 0.0428571 0)"
        />
      </Pattern>
      <Image
        id="image0_14_573"
        width={60}
        height={60}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2aTW7CMBCFLbXHoGsWnlwAyc66qoSHBSdsF5RWYseBCsu2KlzAlZNGRSaBJnEUJ31PmgUCD/Pp+WdkWQgICipSiwepeC+V2SWa78XYJZXZkWb7E29i7KJf2CzE2EUAHrkIDo9cBIdHLhqCw1KZO9L8SpqPfsF1w8/dNp+rSWreJLP5NCCs+QhQWFfAWUjNn67W1sCUO2tjB86glVmHAD4OBZg0H0IA2wEBt98ECcAMhwlTmrGGCZtWLuzSGseSxTms0XhYdFpNRWgtGa0lobXk/9NaSmW2SbqYuHB3TXWBs/upYrwy2+iBk3QxKcamaXpLmlc1gFduTPGdyzUo4DJo4akK9uS2NG5gqXnjF34KXZH/DNZ9LlsS0QFTHi8+wHK5vJHaPPr53U1jxW+fmvx3X8C2yjU//6XZMDRgW+b0JbVxNhZg+1foELCxANtr0KFgYwK2VdAhYWMDtj50aNgYgW3ROrqmosk5Ozhg6jgAXFd9OwaHNaa0xRqO6ckDdRhSmS/RVrKDs7JD4OfWwMlsPnVPgvqGuRrKvPu3LY2VdUXKrN0rmd7BzuPgnA0GC0EQBIn+9A0c/WB2yR+84QAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default importIcon;
