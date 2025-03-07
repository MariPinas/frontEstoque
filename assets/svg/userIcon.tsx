import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const userIcon = (props:SvgProps) => (
  <Svg
    width={31}
    height={22}
    viewBox="0 0 31 22"
    fill="none"
    {...props}
  >
    <Rect x={0.5} width={30} height={22} fill="url(#pattern0_45_19)" />
    <Defs>
      <Pattern
        id="pattern0_45_19"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_45_19"
          transform="matrix(0.0107527 0 0 0.0133333 0.0322581 -0.08)"
        />
      </Pattern>
      <Image
        id="image0_45_19"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default userIcon;
