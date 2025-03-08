import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const BackIcon = (props:SvgProps) => (
  <Svg
    width={30}
    height={31}
    viewBox="0 0 30 31"
    fill="none"
    {...props}
  >
    <Rect y={0.5} width={30} height={30} fill="url(#pattern0_14_931)" />
    <Defs>
      <Pattern
        id="pattern0_14_931"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_14_931" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_14_931"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVR4nO3cPawMURQH8BEhERJ7zobX0EkUhJKgVFD4aEVJSa2moiAiFG/PGYVCoVPoiEKro9BJnsjT+NhzNsTnyn2xihf2zc7c2Xsn+f+S07/5/2fmzc7HLQoAAAAAAAAAAAAAAICWDaV3woSXTOnNqKTjCHyOhto/acrfXHkcJhSBAubESz5qQl8m4U8GBczBcJEOuZKvDh8FzCP8kg+4kP0rfMcR0C6X3j5Xfv+/8B0FtGeo/d2m9G5a+I4C2vFJtu0yobdrhe8oIL7Pd2mnC7+uEr6jgLhcti+40Kuq4TsKiMfKLdtM+eUs4TsKiOPDIm01peezhu8ooLnlewubXfhZnfAdBTQzfrBjkyk9rRu+o4Am4RcbTflRk/AdBdQMf7HY4EIPm4bvKKDWnr/elO/HCN9RwIzhj4t1riyxwncUMGP4wndihu8ooDpXvhY7fEcBVcOnK22E710coVH4xW9CN11pb9E2U7qUfKM1zzHln+G0HC7JWwnflS+m3kjvwJjSk+glmNB5E/6VeuO8I2NKt6OF79o7u3J4ZbBh3pEx4R8+oD2Nwzftnzbl76k3yDs4pnSjUfjhTTUT/pp6Q7yjY8Iv6u/5JR0Jl1ipN8K7PEJWK/zhgA9Oe3cHw5UzqPsQ/SNC5jQFxLyzieEaBQgtIziOtvOgAE17JOIUpB0rAP+EOW0BAS5DOW0BgQkdxg8xblaA0LBoYiR0DLciOM2tiFU34/5+SIfhWQq4XsTgAzqzcnsVBYznfjt6wko+hwcyPEMBdKuIzYUv4CjgKuE/bu25MB7K89TTTtjzWwt/wpUu40jgP8GTh6ud8PQr6jl/zRKEr7ZRQgHV4NXEfEoY4AhICK+nZwAfaGQAnyhlAB/pZQCfqWYAH2pnAEsVZACLdWQAy9VkAAs2ZQBLlmVgVPb2Y9G+xLBsZQamvXNUwHxg6eIM2KB/Cot351CC8FKY8CZe6r8HAAAAAAAAAAAAAACgiOw3YX3W39SbdiUAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default BackIcon;
