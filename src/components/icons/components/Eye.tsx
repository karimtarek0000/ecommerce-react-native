import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgEye = ({ size = 24, color = "#000", style }: IconProps) => (
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
    <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
  </Svg>
);
export default SvgEye;
