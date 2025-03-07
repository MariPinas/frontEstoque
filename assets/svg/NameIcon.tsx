import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const NameIcon = (props: SvgProps) => (
  <Svg
    width={25}
    height={22}
    viewBox="0 0 25 22"
    fill="none"
    {...props}
  >
    <Rect width={25} height={22} fill="url(#pattern0_43_2)" />
    <Defs>
      <Pattern
        id="pattern0_43_2"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_43_2"
          transform="matrix(0.00916667 0 0 0.0104167 0.06 0)"
        />
      </Pattern>
      <Image
        id="image0_43_2"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAESklEQVR4nO2dz4tcRRDHWzB6yCSbqtkhF3PR6EUFBUUUvZjkqKDgVf8FCaJHrzFGMbq7OlP1BtxjbvGgF/UueBDNmkRF9BRDLjNVsytK4pPaWX8d1vn1+vV78+oDBcuysFX17a7uft2vXwiO4ziO4ziO4ziO4ziOMyXahweF4bwwXlKCkTLmS20EI4tVCN5RhgeSNZT8fLhTGTeE8VbypHAa242dcD2/EO4oPflC8HnqBGhFTBg+K1UEJXw/ddBaMROGtRJrfnPLju4nAOFN7cH90QWwATd1sFpRE4a3owugBFupA9WKmhB+E18ABk0dqFbVCKQEASoQKFfXXAB2AZK3QvUekD4R6iUoRhLgsjK+ob320wPqHL+2efSg2bC/eq9y+4QSnlWCKy5A8Yn/VhlfyPNw21QThQxPCuFXKYRYxkG4m3fDgVn9zF8PtyvhGRdgkeRn+PLiDQZOew+YI/nC8N6iyf9HBNzwEjRT8vGSlZCiBLAStjeA+xgwTRKG3H42FIwQPu8CTDfjuRwiYDMoZbjqs6BJAhCeCZEQwjddgIk9oH0ilgBKeMoFmCDAoHv4nlgCjFfMvhD7XwGubR49GEuA62udlgswoQVeX+u0Yglwg9uHXIBJJYg6x2MJMOyt3ucC+CC8GNEXM4RnQySE8C3vARMFgCvTPnaeeSFG8J0LMM2zoAyfK1oA20/wRxFTlyHYmmcPYD/s3GZZO2UhNmUEoeOxYL1Anz8oy++ifE4vAJvB6UX9HTG8UqbPYbkEQLPuPEe/bT9BCN4t29+whALke/V71k35r1P4upwC8F8GV3cfKWd40la1fx9LsRUu4SlhPFfGVLPBAmDlzQVgFyB5K1TvAekToV6C0idDE5iPAewCJG+F6j0gfSLUS1AB790yfK8EF+2s0CjDF6V35KlRb+WhQbZy9/DDQ217RGFmP9vvRrzy8O7fEL60dzL6I2X8ocz3mms9BgjDL8p4wZI92FiBony2jf4hHXnGnisJ488uwH9aOuwoAW9z+5FQEtvd9qPK0BeCX5vcA24IwatWPkIi7H8Lw2vmS2MEEMI/hGBTslYnVAQrd3t3Hi08VkR3dkEHfxxm+FioKEOGx4XwpyUVAL6Qbms1VBzJWh1h+HK5BCDYKnJWE5sBHcZ536iJ7twcNf+3Uu7RiXMv0u+1F8Bu1wo1RRm7tRdg2IUnQk2RDJ6svQAxj5vHZp7j7NGdqpxDTYu3cg41Ld5ZHdru4V2hpuz04VjtBRDCj+sowk4fjgnjJ7UXoGkWXAB0AVK3QvUekD4RurwlyC9u1f0EIBjGF8CvLs6TXl08/nJE+q6uFTR7DTa6APbZjvGRkfQBaxOvr98VgXA9dcBaMbPXoUJZ2GEo+2xH6qC1IiYEn5b/HZmxCGtNLkdCeNNafunJ/zdW9+zLETYDaMYUFdRitZjruNXqOI7jOI7jOI7jOI7jhGT8CSckJYou0jlDAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default NameIcon;
