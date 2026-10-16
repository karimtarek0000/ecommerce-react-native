import { type IconProps } from '@/components/icons/types'
import { scalingMethods } from '@/utils'
import Svg, { Path } from 'react-native-svg'
const { HS, VS } = scalingMethods
const SvgCircleCheck = ({ size = 24, color = '#000', style }: IconProps) => (
  <Svg
    width={HS(size)}
    height={VS(size)}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    style={style}
  >
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
    <Path d="m9 12 2 2 4-4" />
  </Svg>
)
export default SvgCircleCheck
