import { ImageProps } from 'expo-image'

export type Sizes = 'sm' | 'md'

type UserGreetingBaseProps = {
  userName: string
  imgSrc: string
  imageOptions?: ImageProps
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
