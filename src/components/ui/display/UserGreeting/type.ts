import { ImageProps } from 'expo-image'
import { StyleProp, ViewProps } from 'react-native'

export type Sizes = 'sm' | 'md'

type UserGreetingBaseProps = {
  userName: string
  imgSrc: string
  imageOptions?: ImageProps
  style?: StyleProp<ViewProps>
}

export type UserGreetingProps = UserGreetingBaseProps &
  (
    | {
        size?: Exclude<Sizes, 'md'>
        type?: 'welcome'
        meta?: never
      }
    | {
        type?: 'meta'
        size: Exclude<Sizes, 'sm'>
        meta: string
      }
  )
