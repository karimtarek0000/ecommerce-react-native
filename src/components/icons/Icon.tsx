import { Text, View } from 'react-native'
import { iconMapper } from './components/iconMapper'
import { IconRenderProps } from './types'

const Icon = ({ name, size, color, style, isRTL }: IconRenderProps) => {
  const RenderIconComponent = iconMapper[name]

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
      style={[style, { transform: [{ scaleX: isRTL ? -1 : 1 }] }]}
    />
  )
}

export default Icon
