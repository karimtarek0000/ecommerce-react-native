import Avatar from '@/components/ui/display/Avatar/Avatar'
import Typography from '@/components/ui/display/Typography/Typography'
import { View } from 'react-native'
import { UserGreetingProps } from './types'
import { useStyles } from './useStyles'

const UserGreeting = ({
  type = 'default',
  userName,
  imgSrc,
  meta,
  imageOptions,
  size = 'sm',
  style,
}: UserGreetingProps) => {
  const { styles, fontsSizes } = useStyles(size)
  const userGreeting = (type === 'default' ? `hi ${userName}` : userName) as string
  const userMeta = (type === 'default' ? 'let``s go shopping' : meta) as string

  return (
    <View style={[styles.wrapper, style]}>
      <Avatar imgSrc={imgSrc} size={size} imageOptions={imageOptions} />

      <View style={styles.body}>
        <Typography variant={fontsSizes[size]} color={styles.userName.color}>
          {userGreeting}
        </Typography>

        <Typography variant="smallRegular" style={styles.meta}>
          {userMeta}
        </Typography>
      </View>
    </View>
  )
}

export default UserGreeting
