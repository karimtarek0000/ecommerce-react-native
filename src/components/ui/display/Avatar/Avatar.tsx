import { avatarIcon, personImage } from '@/assets/images'
import Icon from '@/components/icons/Icon'
import { Image } from 'expo-image'
import { Pressable, View } from 'react-native'
import { AvatarProps } from './type'
import { useStyles } from './useStyles'

const Avatar = ({ size = 'md' }: AvatarProps) => {
  const styles = useStyles(size)

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={personImage}
        placeholder={avatarIcon}
        placeholderContentFit="fill"
        contentFit="fill"
        transition={1000}
        // source="https://picsum.photos/seed/696/3000/2000"
      />

      {size === 'lg' && (
        <Pressable style={styles.uploader}>
          <Icon name="camera" size={20} color={styles.icon.color} />
        </Pressable>
      )}
    </View>
  )
}

export default Avatar

// const blurhash =
//   '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['
