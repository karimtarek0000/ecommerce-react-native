import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgDotsVertical = ({ size = 24, color = "#000", style }: IconProps) => (
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
    <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgDotsVertical;
