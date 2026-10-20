import { ImageProps } from 'expo-image'

export type Sizes = 'sm' | 'md'

type UserGreetingBaseProps = {
  userName: string
  imageProps?: ImageProps
}

export type UserGreetingProps = UserGreetingBaseProps &
  (
    | {
        size?: Exclude<Sizes, 'md'>
        type?: 'welcome'
        email?: never
      }
    | {
        type?: 'email'
        size: Exclude<Sizes, 'sm'>
        email: string
      }
  )
