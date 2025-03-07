import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const editIconLight = (props:SvgProps) => (
  <Svg
    width={35}
    height={32}
    viewBox="0 0 35 32"
    fill="none"
    {...props}
  >
    <Rect width={35} height={32} fill="url(#pattern0_14_482)" />
    <Defs>
      <Pattern
        id="pattern0_14_482"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_14_482"
          transform="matrix(0.0152381 0 0 0.0166667 0.0428571 0)"
        />
      </Pattern>
      <Image
        id="image0_14_482"
        width={60}
        height={60}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBUlEQVR4nO3YsU4VQRTG8dGKhELOuSgRChpskLew1UQra30DKkosCBQ+AZyDoLVvoNHCwqiJmhgKbC0wMVH3fNxYQLJmIBtujMFF7tydnZ1/sv38MrMzs+tcLpfL5XK1glyZMqEXtsnzrgtYCO1AuTSlr0mjMYCtnmTR+As2WTROwSaHRg1sMmicAdt6NP4D21o0zoFtHRpDwLYGjSFio0cjADZaNAJio0NjBNho0BghtnE0GsA2hkaD2JGj+9qbhtJuk9gB9MvkZxbVI/S5v80zGTuM8sxqosu4XHYXobQCoacm/N6UD5p7b2nXb5hulPW3ecaE3nUCWwWhu53B+rBB1zuDPbl4JLBB1W3vydR4Z7C+snQXwu7WESzjP4Pyt+RndrAgHw+xYn1Qep38Mh7MhB53YmarbJPvJDGzUFqtM4Djnbp3G0JbEH5lwp9M6QuEf7QG+32dLpnQr2EMpNyaHTv6pNTeDSi9iQ7rK5TvhxgQlBaiw/pM6HmozcSE9qLaoPbXJ6+a8GGoped/tkUzsz4IL4Y8Nkz4YRQzW2VKb0PuqH5Xd7H0Uy7PJXNBqBOEHiR1K/pXJvyxVbej8wYlnAV8fDnhNdfWrMZfSH9kmdCzQviev5G5NldsTNw85Z3dMaUlf067lCpk4tbR0SS0b8ofTHm5eDR5relx5XK5XM4l2m/6gNRnYZ1KnwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default editIconLight;
