import { template } from "@babel/core";
import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const EyeOpen = (props: SvgProps) => (
  <Svg
    width={25}
    height={22}
    viewBox="0 0 25 22"
    fill="none"
    {...props}
  >
    <Rect width={25} height={22} fill="url(#pattern0_2_31)" />
    <Defs>
      <Pattern
        id="pattern0_2_31"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_2_31"
          transform="matrix(0.00977778 0 0 0.0111111 0.06 0)"
        />
      </Pattern>
      <Image
        id="image0_2_31"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default EyeOpen;