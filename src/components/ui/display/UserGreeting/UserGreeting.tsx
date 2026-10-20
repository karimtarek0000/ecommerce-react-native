import { Avatar, Typography } from '@/components/ui/display'
import { View } from 'react-native'
import { UserGreetingProps } from './type'
import { useStyles } from './useStyles'

const UserGreeting = ({
  type = 'welcome',
  userName,
  imgSrc,
  meta,
  imageOptions,
  size = 'sm',
}: UserGreetingProps) => {
  const { styles, fontsSizes } = useStyles(size)

  return (
    <View style={styles.wrapper}>
      <Avatar imgSrc={imgSrc} size={size} imageOptions={imageOptions} />

      <View style={styles.body}>
        <Typography variant={fontsSizes[size]} color={styles.userName.color}>
          {type === 'welcome' ? `Hi ${userName}` : userName}
        </Typography>

        <Typography variant="smallRegular" style={styles.meta}>
          {type === 'welcome' ? 'Let``s go shopping' : meta}
        </Typography>
      </View>
    </View>
  )
}

export default UserGreeting
