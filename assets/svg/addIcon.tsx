import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const addIcon = (props: SvgProps) => (
  <Svg
    width={35}
    height={32}
    viewBox="0 0 35 32"
    fill="none"
    {...props}
  >
    <Rect width={35} height={32} fill="url(#pattern0_3_101)" />
    <Defs>
      <Pattern
        id="pattern0_3_101"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_3_101"
          transform="matrix(0.0101587 0 0 0.0111111 0.0428571 0)"
        />
      </Pattern>
      <Image
        id="image0_3_101"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACK0lEQVR4nO2cO05DMRBFXQGtDUj8JDYIoeKzDUrwSFCzED5VYCm8eSmojCyaKFCQ5MUeJ+dI01CND3cmUSzZOQAAAAAAAAAAcOnhdEclXKj4N42+VwlpLSv6XqN/1RhG6dZtF/3XT+7DSSfho7oEKVtdDO/57MWSvImSdUp2kWT/rIv6B9a6dV5AtH8zcNBUt/xLCdFa/6ChtmgtILr2IYOJQrQgOtVOIYmW+uJYHVJfKjtaED14groYvj7FX/Z3e4e5uuiv8t9I9OCi/dXsV6pO/DWiBxbd3+0dzoruH/YPEF3ow0f5MET0UlhLkBrrZzCsHUyN9YNoQXQi0Q2Mqhrrh9UhiE4kuoFRVWP9sDoE0YlENzCqaqwfVocgOpHoAUZ1+mbEGWOZmxqDon/fjFhjkZualTc1b0MWkzzETY1bNfM2NJHdI2ecyWM4bl50HktnnC76m/ZFx/CVZVtMdu4p97YWH4ZDlWukH0QLohOJbmBU1Vg/rA5BdCLRDYyqGuuH1SGITiS6gVFVY/2wOgTRiUQ3MKpqrB9WhyA6kWhDozr54/fsRW5GWB0y/03NIjcjiJb/39QsczOCaGmr1vZbhxorRAuiU+0UkmipL47VIRu7o3mOTaP/LCGaBwalxAODMYxqj63WrhjOVi46P4CaH0KtflipU52EcXpyW67Ys8YbKLuTMM4/ZLmS5GTnV2fzvlrvD0ivGsNzXhfFkgwAAAAAAAAA4GzzDduX/yuxTwLSAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default addIcon;
