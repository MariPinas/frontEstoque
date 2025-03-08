import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const SearchIcon = (props:SvgProps) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_14_805)" />
    <Defs>
      <Pattern
        id="pattern0_14_805"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_14_805" transform="scale(0.0166667)" />
      </Pattern>
      <Image
        id="image0_14_805"
        width={60}
        height={60}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjklEQVR4nO1aTU8UQRAtCWrAg+LXATxyIs4OXW92mdsevMvF4MUDJkQ9Eg8QQY/iwZuC/gFIIMpB+B2aaEgkejCAkBiECCbKhxFTsUmw7cVdmJ4Zd+clnWz2o1+9qe7qquolypAhQ4YMtYM6Zg6ZeQDAJDPPAFgFsKXHqrzHzM+Z+Q6ADvkN/W8oFAoXADxg5gUAO5UM/Zsh3/dbKO3I5/NnADwBsFmpUMvYADAShuFpSiOUUlcBLEcg1BzLzNxFaUGxWKzXXi1l8BcAowB6giDIt7e3nwNwVIa8lvfkMwBjzLy2zzzDwpWo2DAMGwBMlzDwLTN3y3cqmU8pdZ2ZZ0vMOVXJfC48O20JOt+Yufcw3tBz35a5LPO/SMTTzPzU4oGPSqkgKg693Bctoh9TAgFqxzDilVKq2QFXs8xtebhXKMajZ9ni2cjF7kIHuncG5yfP85rINWBEZNlnUS7jUgiC4KK5p5n5URwZ1IZB2ksxAcCgwf3d5coiSRfNoyfOiJnL5U5Ygth9l4XAgvGEuylmALhpCJ5zUnAwc2hmUEkkAQAamXl9ry1yfEVOxL/Lt72CRykhABg3bOl3QTJpkPRQQmDmG8bWeuaCZMb5MioT0igwHv6byEmYecUgOUsJIZfLnTdLyMhJYBT1bW1txyghtLa2HjcEb9Sa4M2aWtLMvOI8aAEoRE5y8JzgdU0dSwAm40g8xighAJgwbOlzfvYx81oSqaUuIL7GkRPUmcWDNNwoZgC4ZTz4eSI64opsyCCbTaA8XDJsGHBG6Pt+i9kAkO4ixQQA9wyx677vn3JNOmK2eOLIqwF4lrbtw6SaeIsxNPHem4U/gJMUB5i5y9amFcMciX1p8P1USl2iOAFg2BQtrVTpLkbI4Vk86ybRKPM6ZMriadlngxJR6XDR+K7tqkVzbMtlAMWNMAwb5K7HZpTuLkrDrbHc+eS7+pz94+hJlehisVgvdz37GCYNt3Gd/3bInpTSUoauejr0g5kwM6i9e1b/ZWI7FaIFctcj1x//8swBxtxugBJxqRLteV6TXH9YkpOKh14ZD82jJ3WiBXImy42APisrFTovldl+GVQqRWvU6TvefmmlSndRd06kXbTFzJ+leNe1dp/O2MoqBNIs2mncsIj+oZS6RtUKZKKReZqqFapEIAPQSTUmep6qGepv0UtU7QDQCeCDeDcIgstJ25MhQ4YMGegA+AXowpohoiG+XwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default SearchIcon;
