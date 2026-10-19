import { ImageProps } from 'expo-image'

export type Sizes = 'sm' | 'md' | 'lg'

type AvatarBaseProps = {
  imageProps?: ImageProps
}

export type AvatarProps = AvatarBaseProps &
  (
    | { size?: Exclude<Sizes, 'lg'>; enableUploader?: boolean }
    | { size?: Exclude<Sizes, 'sm' | 'md'>; enableUploader?: never }
  )
