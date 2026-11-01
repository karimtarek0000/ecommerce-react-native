import { personImage } from '@/assets/images'
import { Avatar } from '@/components/ui/display'
import { View } from 'react-native'

const EditProfile = () => {
  return (
    <>
      <Avatar imgSrc={personImage} enableUploader size="lg" />
      <View></View>
    </>
  )
}

export default EditProfile
