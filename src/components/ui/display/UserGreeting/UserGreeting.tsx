import { Avatar, Typography } from '@/components/ui/display'
import { View } from 'react-native'
import { UserGreetingProps } from './type'
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

  return (
    <View style={[styles.wrapper, style]}>
      <Avatar imgSrc={imgSrc} size={size} imageOptions={imageOptions} />

      <View style={styles.body}>
        <Typography variant={fontsSizes[size]} color={styles.userName.color}>
          {type === 'default' ? `hi ${userName}` : userName}
        </Typography>

        <Typography variant="smallRegular" style={styles.meta}>
          {type === 'default' ? 'let``s go shopping' : meta}
        </Typography>
      </View>
    </View>
  )
}

export default UserGreeting
