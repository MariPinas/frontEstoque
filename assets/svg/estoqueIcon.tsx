import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const EstoqueIcon = (props: SvgProps) => (
  <Svg
    width={31}
    height={30}
    viewBox="0 0 31 30"
    fill="none"
    {...props}
  >
    <Rect x={0.5} width={30} height={30} fill="url(#pattern0_45_18)" />
    <Defs>
      <Pattern
        id="pattern0_45_18"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_45_18"
          transform="translate(-0.037037) scale(0.0123457)"
        />
      </Pattern>
      <Image
        id="image0_45_18"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcklEQVR4nO2czY7cRBCALVD4h6VqF5Gwkbih5AUIPAC8QSIeICiXJJcgFk4I3iD8KPF2rWYFt73kCZITyo9ESM4J3CJBAuzudM0ggQRGZQUlWtle29Pj6p7UJ/Vt2tX9TU9329WeLDMMwzAMwxicIj/0Ajv8hgl3mbCoKX94gsvewali6/Dzw7dyAWDCiw2Cq8pPuw7f1m53UhSfZU95B392FF14gumY4F3t9i+86FK2g3u/0fLL2n1Y5KnjMdn4qXb7k0EWN0/wFTvc6SzbwR3t9i8MxVb2NBN80DCqjwbe4RRJFIc7nuDr4LswT/BDVcAJwUdDTFMcb7kYVDQTfF49ouHKvBdejrjIDkz6Fkz0eAOPVQfCv3dGS6+a6ECUI5Lg18pvdgNOPLFTh8MLoRw/EuVgVPPz2Zz7DoeiK9vewZdzeSTBhMdrRN/vOk/xDJ30Dv/yDj6e0vIbXfsgdTzBmlxjljZk82Q7hyWZk6sCj9fxncFEE6zN2he5RrSiywY6uFIdHL7och2eoZOTfOXQrP2YjF47GLVodnCu5uf8Y6frUP9O9pky9jLdxNWoRft8+UiN6H+7CGDtqcPBJ1GLFpjgbo2ADwdbDAnWFnYx/B9PcL6yAQ4utb0Gz9DJGEo2BBPC92tET4rRm8+1uQZHICt60cVW9gw78FUNkC+hzTU4AlnRiy5FObhU1QCZVlrVJ31ZSYj2Dk5WNsLhz23qcwSykhAtNw2ypasc1fnykf3qa4tKRrTgHdysHtVwbr+62qKSEi233X2TARyBrGREz5IM4AhkJSO6MRlAeLyprraopEQL8tC/TzKAI5CVlOi6ZAA7fNCUDNAWlZzo37/DV+oe0Iw38FhdPW1RyYnumwzgCGQlJ7o+GQA3a+tEICs50Y3JgE1craqjLSpJ0Y3JAAcnqz+vLytJ0V2TARyBrCRFNyYDzmfP7v28tqhkRYvMLskAjkBWkqK7JgM4AlnJiu6SDGAC1pbVuzgYZ5qUqfyWyQAmuKEurHeBa5k2bZMB7PBsuiMaT+sZ3i8ZQHB57+LpHd5Wl9axeMJbcgog06YpGbCdw9Ljn52u4+GUZIvkujvdwXmYDLjfNhlQbgsJz8i8F+cCCcwOr8p0EcVIbpMMYAcj7bYtFH2TAUbAZMCu/TNCnG8GGP2TAfd++fb1F01gIMbrK281rObfyxRS5NkBEx4Alm2R+vYsgRftZ4UdvqcuJ4UX7UPAhHkEYuJ+0T4ERZ4dYMItbTkLL1qQRskuRBqoLSnaF+1D4vOXVuQdbtljy/MQT/iPurRYXrQ3DMMwDMNYPIrytBOeZQfX5SjZw3JdUl1Vx8pSj6vCdBNXmxK180qMasVVoWh59KBM9QccYVpx1eAuh2kCHl7RiqsGdzoeFu44llZcNbjTeQ7g1OOqwV06HPAkp1ZcNdimjqFE4xmVxVAprhqFbLMIb7XaZgU8/6YVV5Wp3Dg0dHquNywKcVUpyn8fw9OPTpYOc5JTK65hGIZhGIZhGEamxX/VAIK4WxmX8QAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default EstoqueIcon;
