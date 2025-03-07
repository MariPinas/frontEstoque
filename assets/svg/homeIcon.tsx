import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const homeIcon = (props:SvgProps) => (
  <Svg
    width={27}
    height={30}
    viewBox="0 0 27 30"
    fill="none"
    {...props}
  >
    <Rect width={27} height={30} fill="url(#pattern0_45_17)" />
    <Defs>
      <Pattern
        id="pattern0_45_17"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_45_17"
          transform="matrix(0.0130719 0 0 0.0123457 -0.0882353 0)"
        />
      </Pattern>
      <Image
        id="image0_45_17"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZUlEQVR4nO2cvU8UYRDG3wSDWii8c9go0UYL7bTB/0Ab7U20sLHyo7TUDtTKxoSbAUwwFtdppf+AH41YWWilUSg0gX3nDkw0rlkiucsB8nF7+87OzpNMQ7i95/nd3NxOdrPOmUwmk8lkMpk6lM4c28cE9wL5+YB+gREmsr91/o+pR7WodpjRv2GCtLMCwrvlSX+01+ObnHNNGjodCD53Q27D9t+SKRgzWD2oSbUrAf3KZpA7YK8wDl/ezjHThhtcG0HdH9jqOGq4wcp8aGnDDQSEB1sBXlcI97PX/u/YGcwtjjHhqqDvVDvA6J/tGPJaZxK8WJwZGt7s+N2dvMG3Y8Fp1xIeOs7kP+wWcrsr/ceAcHKj99jO651mNev+HCMs9gy5DTskOHyh+30qDTqgvxYIfuUGuX369zuQv+2qDjp96PYy+pm8AW8wt5+mjdH9lQTd2mQJ6Rvsf8tNpUAnUzC2et5aEOQ27O29p9MgrvtLAf1y0ZB3Uq7MShtuYMtlQUi5Ui8hBM9jA1QNOpkeOZHLEmKgC1xCyDp6nZjgVrYwxIbGWkdHdtUjEMzGhsU9lPgrN0UvIdynEn3lpjk9ciYgfIkNifOCTX4+qcNZJ0llWEJ4V7DhZ4JwNTbfUi0h3FtNpnfcniiQf8zCwTItIdxrd6N/ufRoyBcKuYxLCOdS/lOYglOFQG6iP1/GJYTzvHJDtYt9hVzmJYRzrIDwh9HfzR1wdq9DQHgSOyALq2wxy/U+ECYYjx2K5dZ4bqBjXA3hEi02BpoKAI3+a26gK7KUpNFHx+qNgQgTNkIgzk2RAropLbL6DtRAg4Fm6+j4X3W20QHRodmMpvhA7ceQDHT0bmPr6PiAbHTQegiSz/Hz30QUhGHB3lSFYcHeVIVhwd5UhWHB3lSFYcHeVIVhwd5UhWHB3lSFYcHeVIVhwd5UhWHB3lSFYcHeVIVhwd5UhWHB3lSFYcHeVIVhwd5UhWHB3lSFYcHeVIVhwd5UhWHB3lSFYcHeVIVhwd5UhWHB3lSFYcHedhHGcz8CscRCn8QE/TY6ACqq/Ot4oBFuVqej4XrUZ4sGhPfRIVB/KxDMRX9SeqsOo5phB4K51mM44sQ8NZfgRjbHdPxAemaEV9m4iN7JJpPJZDKZTCaTyWQymUxOnv4CBL39TWLVjqsAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default homeIcon;
