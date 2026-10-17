import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgShoppingCart = ({ size = 24, color = "#000", style }: IconProps) => (
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
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M17 17H6V3H4" />
    <Path d="m6 5 14 1-1 7H6" />
  </Svg>
);
export default SvgShoppingCart;
