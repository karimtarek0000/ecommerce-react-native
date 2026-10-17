import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgImageOff = ({ size = 24, color = "#000", style }: IconProps) => (
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
    <Path d="m3 3 18 18M15 8h.01M21 15v3m0 3h-3M3 21V9a2 2 0 0 1 2-2h12M5 21h12a2 2 0 0 0 2-2V7" />
    <Path d="m5 15 4-4c.928-.893 2.072-.893 3 0l5 5" />
    <Path d="m14 14 1-1c.617-.593 1.328-.793 2.009-.598" />
  </Svg>
);
export default SvgImageOff;
