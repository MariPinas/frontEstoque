import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const ProfileIcon = (props:SvgProps) => (
  <Svg
    width={69}
    height={69}
    viewBox="0 0 69 69"
    fill="none"
    {...props}
  >
    <Rect width={69} height={69} fill="url(#pattern0_10_182)" />
    <Defs>
      <Pattern
        id="pattern0_10_182"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_10_182" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_10_182"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default ProfileIcon;
