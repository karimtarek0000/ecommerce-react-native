import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgBoxOff = ({ size = 24, color = "#000", style }: IconProps) => (
  <Svg
    width={HS(size)}
    height={VS(size)}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    style={style}
    viewBox="0 0 24 24"
  >
    <Path d="M3 10a2 2 0 0 1 .98-1.7l8-4.6a2 2 0 0 1 2 0l3 1.72M21 10v8a2 2 0 0 1-1 1.7l-8 4.6a2 2 0 0 1-2 0l-7-4M12 12v9M3 3l18 18" />
  </Svg>
);
export default SvgBoxOff;
