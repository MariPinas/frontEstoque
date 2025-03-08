import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const EditIconDark = (props:SvgProps) => (
  <Svg
    width={35}
    height={32}
    viewBox="0 0 35 32"
    fill="none"
    {...props}
  >
    <Rect width={35} height={32} fill="url(#pattern0_14_345)" />
    <Defs>
      <Pattern
        id="pattern0_14_345"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_14_345"
          transform="matrix(0.0152381 0 0 0.0166667 0.0428571 0)"
        />
      </Pattern>
      <Image
        id="image0_14_345"
        width={60}
        height={60}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVR4nO3YsWsUQRTH8TkrwSKlaAqbiObeL0lhp/vewWmq5Pa9CwRL0f/AyjIWEgv/CEnvf6BoYSFRUCGkiK2FgoWFgoVCwoB3BJG4MTe3s7Pzhe3nw1tmZte5XC6Xy+Uqhf7gLNied4uy61qBFduF2D6xfU4ajUPY0ZMsGn/BJovGEdjk0KiATQaNY2Abj8Z/YBuLxgmwjUNjAtjGoDFBbPRoBMBGi0ZAbHRoTAEbDRpTxNaORg3Y2tCoETt19KWr5XkS3asTO37YXiQ/WYyx+mGpvzKbsZMoT1YSfY2d2zgF1gcQewK2t8T2s7ZdWXTPb5humi31V2aJ7U0rsKOI9WZrsL75awNqDdbnF5DIBlWtxeXlM63B/q4TcreO4jX+M7B9acNkxwX5eIgV6yPWV8m/xocD21YrJjsKUg6TmCyJblZcQAeFGok9ButLYt0h1o/E9rUx2Cs31mfA+mMSC7nQu3Xaf1IuFHodotvRYX0QuxNiQYu9IaLD+kjsWajNBKyfotqgLvPwHLH+CvXq+Z9t0UzW1y3KuyGPDYg9imKyo8D6OvCO2nGx1O0N5pK5IFSJWO8ndSv6VxB936jb0UkD67dj3n395eSha2pU4S+kP7KI7Sl65W1/I3NNjgpbPQK7uyB6z5/TLqVIdOCPJmL7DrZ3ENuYl7WLda8rl8vlci7RDgDDh0uGWIgXfQAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default EditIconDark;
