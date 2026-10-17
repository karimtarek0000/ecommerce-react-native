import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgMailOpened = ({ size = 24, color = "#000", style }: IconProps) => (
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
    <Path d="m3 9 9 6 9-6-9-6z" />
    <Path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9M3 19l6-6M15 13l6 6" />
  </Svg>
);
export default SvgMailOpened;
