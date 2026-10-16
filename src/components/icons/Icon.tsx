import useTranslations from '@/hooks/useTranslations'
import { Text, View } from 'react-native'
import { iconMapper } from './components/iconMapper'
import { IconRenderProps } from './types'

const Icon = ({ name, size, color, style, flip }: IconRenderProps) => {
  const { isRTL } = useTranslations()
  const RenderIconComponent = iconMapper[name]

  const reverse = flip && isRTL

  if (!RenderIconComponent) {
    return (
      <View>
        <Text>`This icon name ${name} does not exist.`</Text>
      </View>
    )
  }

  return (
    <RenderIconComponent
      size={size}
      color={color}
      style={[style, { transform: [{ scaleX: reverse ? -1 : 1 }] }]}
    />
  )
}

export default Icon
