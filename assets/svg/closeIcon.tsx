import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const CloseIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={22}
    viewBox="0 0 25 22"
    fill="none"
    {...props}
  >
    <Rect width={25} height={22} fill="url(#pattern0_14_456)" />
    <Defs>
      <Pattern
        id="pattern0_14_456"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_14_456"
          transform="matrix(0.0146667 0 0 0.0166667 0.06 0)"
        />
      </Pattern>
      <Image
        id="image0_14_456"
        width={60}
        height={60}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVR4nO3aS47CMBAEUB+BmIuxGMRiONnEpyM36FqCNMjzlZAigtPuD3RJ2SFKj4REbielSCQSiUQibkJlu6MyTN/HdvfU/Sh5TyWfUfJnPWjMF4ybY9dSrX7clEmjRfsxUyaFFu2nr//MfNlfaf3MOBwSc+p3Lu1n+U9TGaZ7Zb3QS7H//cMkCgYj+lHsz6V9ErukwYhuwnJd0jX0kd8afu2mG8m9G9RsV9m8J86QANoMVgJtDtsTbRbbA20ey4l2g+VAu8Ouf2bKPtvVz7S7MyuFNonthTaN5Ua7wHKhXWHXol1ia1qesxqDQVWsSzRWYl2hwYR1gQYz1jQanbAm0XilxQNWLPEkB4Ms4VjPukGDcfFuHo0OkwqzaHQcy5hDQ2AGZQYNwYGbOppebTONPG2XSu8Pk/aGuOT+MD3LKw9LbiS9xzIq/TRTKjWDUumnm1LpgZtKP/2++jfmk+qrh0r9kUgkEolEUnOuUVhzKxXHbYwAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default CloseIcon;
