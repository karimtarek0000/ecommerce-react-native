import { type IconProps } from "@/components/icons/types";
import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
const { HS, VS } = scalingMethods;
const SvgCreditCardRefund = ({
  size = 24,
  color = "#000",
  style,
}: IconProps) => (
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
    <Path d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4M3 10h18M7 15h.01M19 16l-3 3 3 3M22 19h-6" />
  </Svg>
);
export default SvgCreditCardRefund;
