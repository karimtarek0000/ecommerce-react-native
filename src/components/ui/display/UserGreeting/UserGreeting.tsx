import { avatarIcon, personImage } from '@/assets/images'
import { Typography } from '@/components/ui/display'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { UserGreetingProps } from './type'
import { useStyles } from './useStyles'

const UserGreeting = ({
  type = 'welcome',
  userName,
  email,
  imageProps,
  size = 'sm',
}: UserGreetingProps) => {
  const { styles, fontsSizes } = useStyles(size)

  return (
    <View style={styles.wrapper}>
      <View>
        <Image
          style={styles.image}
          source={personImage}
          placeholder={avatarIcon}
          placeholderContentFit="fill"
          contentFit="fill"
          transition={1000}
          {...imageProps}
        />
      </View>

      <View style={styles.body}>
        <Typography variant={fontsSizes[size]} color={styles.userName.color}>
          {type === 'welcome' ? `Hi ${userName}` : userName}
        </Typography>

        <Typography variant="smallRegular" style={styles.email}>
          {type === 'welcome' ? 'Let``s go shopping' : email}
        </Typography>
      </View>
    </View>
  )
}

export default UserGreeting
