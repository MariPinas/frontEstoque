import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const EmailIcon = (props : SvgProps) => (
  <Svg
    width={25}
    height={22}
    viewBox="0 0 25 22"
    fill="none"
    {...props}
  >
    <Rect width={25} height={22} fill="url(#pattern0_2_33)" />
    <Defs>
      <Pattern
        id="pattern0_2_33"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_2_33"
          transform="matrix(0.00977778 0 0 0.0111111 0.06 0)"
        />
      </Pattern>
      <Image
        id="image0_2_33"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjklEQVR4nO2aPWgUQRTH1w9E0Hg7c4kRLGJhYyOIIlhpo5VWdn40ltrZWKbQwsIihYjJe3KJH41WWplGK0G0sbFRUcEiYCC5m3dJVNSVvRCQI9md3du9mU3+P3hwxe3s7o93szP/2yAAAAAAAAAAAAAAAAAAAAAABTLfqIXC+pWwjlB6TQeG1FszvnOwJ9kz94d3GFLTEK1Xl8zq5SzXBwrp7OhxsE1YPYFs3S36WdQY2Z5daBRsSpC9RUg1IFuvdPJkNBpszeMyMKwfpB1sWN/a6LINq9vRaLA5pSl5TdG2PwfD6prrmxVXRfqm7TSbJtpqgjccXjas/2yYLib9V1hdzbJwSBVtu2QRUucM618bQPLvFutLSS6ad2qqeylsJbpTpN4vTOq9SSdoTYSnDanFdSuZ9Q/D+mySg3ZjaI8h/a77WHvRHdn6S5OG9iedyNwLjwuplmspUnSRagvpk0n3Pt+o7RNWH1c7Ppvo5WlkRig8mHTCBRo8LKxnncvhwmquxepYYoORPmBYfVtrjMyiizqxVKSsGovrR9IaK6/ozk+pzfpU6k+J1AfXsiRvWUyVQvUTNlNlftHLT+CfaQ8Hod3Dqz0cxPeyefhTeMaQWrIZryfRtsudqiV/htWb1OUsh+ezLGd7Fp1pAc/6eQUkp27QZKJ+JesGrRDRebak4meVFjkUKzpDyCLupXZdd7khWuGi+3HRUrjk8pujFNGVSv6oP9NdmaK9Tv5MjgTOW9G+Jn8mZwLntWjfkj/TQwLnv2hfkj/qLYGrhmj3yd+cyyCsr6Jd3bApKIGrmujIJvlb5HCkoOTvc1EJXPVEc5+Sv4ITuEqKlpKTvzISuMqKlpKSP0PqRRkJXKVFS9FbYVJPfdz6+yOaO504lvrOH+vxhDHuxt9JDLNIjbm4N69Ei8ULg/89wKaF9Pe44s/xzjLpmHjMeGxX9+WdaOnlFViP/3DwVXRU1Evdvrw8761oiYvU6ybt0nklx8fGYzi/D+9Fc2f597VJ+mhWyW2uHRLWn1xff2VEy/JqZElIXbfp7tbUQF1Y3ejHbm/diZaVImUM6YdC4YU4JIpz47g6n7l+0bB+FH/H+XVWXjRXtyCaITpy3YXoaHYvDlMHu5eKOZohOnLdcehodi8JUwe7F4g5mv0qbFgYoiPXXYiOZvfiMHWwe6mYo9lD0QAAAAAAAAAAAAAAAAAAACBI5x8TVcJDDnad8wAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default EmailIcon;
