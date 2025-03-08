import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const EyeClosed = (props: SvgProps) => (
  <Svg
    width={25}
    height={22}
    viewBox="0 0 25 22"
    fill="none"
    {...props}
  >
    <Rect width={25} height={22} fill="url(#pattern0_2_32)" />
    <Defs>
      <Pattern
        id="pattern0_2_32"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_2_32"
          transform="matrix(0.00977778 0 0 0.0111111 0.06 0)"
        />
      </Pattern>
      <Image
        id="image0_2_32"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default EyeClosed;
