import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgWifiOff = ({ size = 24, color = "#000", style }: IconProps) => (
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
    <Path d="M3 8a16 16 0 0 1 4.5-2.5M13 4.2a15.6 15.6 0 0 1 8 3.7M6 11a10 10 0 0 1 3-1.7M14 9.7a10 10 0 0 1 4 2.3M9 14a4 4 0 0 1 6 0M3 3l18 18M12 18h.01" />
  </Svg>
);
export default SvgWifiOff;
