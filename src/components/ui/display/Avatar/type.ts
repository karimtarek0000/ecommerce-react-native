export type sizes = 'sm' | 'md' | 'lg'

type AvatarBaseProps = {}

export type AvatarProps = AvatarBaseProps &
  (
    | { size?: Exclude<sizes, 'lg'>; uploaderImage?: boolean }
    | { size?: Exclude<sizes, 'sm' | 'md'>; uploaderImage?: never }
  )
