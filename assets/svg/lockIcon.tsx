import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const LockIcon = (props:SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_14_946)" />
    <Defs>
      <Pattern
        id="pattern0_14_946"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_14_946" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_14_946"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/0lEQVR4nO1dS28cRRBuCRJAEA48xfsSYe902RCthIw93SMFjCzZnuoBBpEQwS0HFGIgnJCQuEPM6xTET0BcUYI4RNwScSE2HCKOGA4QiYRYMuSBau1DosQzszu7Uz0z9UklWTvrnerv66p+TG+tUgKBQCAQeIxxkzw0YXG/Nu5zsHgcjDurrTunLf67ae4cvUbXtMHP6L30P9x+1xpPh+n92uDb2uKPYN3VQUwbd1pbt0Sfxd2e2iCYWXhcW/xCW1wflPgbhLC4TtGjDT7G3T5v0e0e3EG9FQxeGBbxNxcCP3wieuN27vZ6hc7MogbrVkZF/I2pCc8EYRxwt9sLBJHbp627WBX514wP/4B1r6g2A4w7BBYvV03+NXYFLB5RbYS2+CYj8ddZEMbvqLalnf57Pq5p445B6A50bLxn/Dl3bxRFt5LR3/QaXQODX4LB3/v87MutSUc04PaT87V1J8Ek82ma3lL0HvReHboFMPhDP2OCtq6jmozdc3O3FZ/t4BqE6MreUxt8Caz7raAIPwVBulM1FWDwg4JEnH5q7/wjw7ovrYTB4vfFIg7fVw1e4eaubrVx30xNpXcM/f5BuhOs+7pAyrs4ESWPqqaBthdye6DBU6Mg/3oR8iOBNvRU4zbWcns/rg0z7WyHyWeTB3rjS3YaWm/UBh7Ns3N7f1h+wO3Dn5cL+POWagrytpS1dSer9il3imrwlGoCxqbjh/NzfzJftV/a4mKOX1dg7+KDqu4Ak7yWl/vTPhZZw0JvsWbcH5mRGSavqrpj8zFi5rTzGJdvYN1XOWnoU1V39J7hZg527gCXb9rGr+cI8K2qO7TFX7Ma2bHxHi7fJkLXzRbAnVV1B1j8K6uRwVR6D5dvT0YL9+VEwJ+q7gCLG1mN7HYP7uDybWt7ImuCsKHqjrwpqBL/RADwuIOUhkQAM0QAnjM+n9CTr62jH1frbHqzDSvaumWvzxLRjKJ3pNDgJW7SYGRi4CV6VsA5c9uefOO+4yYIqhPihFciFHra1TQznuwT9Y6ZNDjtwLZR4P7z4hgL9QRuMoBNBDzqwzRztcUCnPEhAkZ2nh/8t/PeL7Saboob3ASACMBPAkgE8BMBTMadgSQFcYO7B4JEAD8JICmInwhgMu4MJCmIG9w9ECQC+EkASUH8RACTtTEFrVAZG3oOMTk7eycZ/b31JZDKd2ZbJABuUGmDrKPsdA1scpiKOIkAQyZ/IoqfL94pktmqRFDcqKSnGXeoX796tYdEgKEIsDLIN2iohgQY/FkioKQA2rolNSDAundFgJICBCVOo01GCYgAZQWI0rsGFWBsOt4lApQUYGw63jWoALufmbtbBCgpQGdmUQ8qgKQg5nJi2uB7EgHlRVgddBqqDf4iAgxlLZAcHkmBkCGY4kYVjdS9bYVktqhP2rgXZCtiBCJo65YotWxHPF2jni+bcaONiFVa4dIMh9YIZJuzHTxSxdZDK1MQeGzc/IsA3ODugSARwE8CSAriJwKYjDsDSQriBncPBIkAfhJAUhA/EcBk3BlIUhA3uHsgSATwkwAtT0HnuUkAPvvbBwEq+wE28My8KFVAlaS4iQA++4ibf3r0F7S1XA1EL44rH0BlvFongHXLyqtfQjV4gpsUqMzwuFclywjkEBVv6oVms6tkLXtH/k3GhKM0Q2hELSGDF6gt2riPvShRJhAIBAKBQCAQCFTd8T+mWJIkhdQuCQAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default LockIcon;
