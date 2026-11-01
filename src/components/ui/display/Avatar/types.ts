import { ImageProps } from 'expo-image'
import { StyleProp, ViewProps } from 'react-native'

export type Sizes = 'sm' | 'md' | 'lg'

type AvatarBaseProps = {
  imgSrc: string
  imageOptions?: Omit<ImageProps, 'source' | 'style'>
  style?: StyleProp<ViewProps>
}

export type AvatarProps = AvatarBaseProps &
  (
    | { size?: Exclude<Sizes, 'lg'>; enableUploader?: never }
    | { size: Exclude<Sizes, 'sm' | 'md'>; enableUploader?: boolean }
  )
