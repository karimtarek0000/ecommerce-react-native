import Icon from '@/components/icons/Icon'
import { useRouter } from 'expo-router'
import { Pressable, View } from 'react-native'
import { GoToActionProps } from './types'
import { useStyles } from './useStyle'

const GoToAction = ({ goTo, toPage }: GoToActionProps) => {
  const styles = useStyles()
  const router = useRouter()

  const handleNavigate = () => {
    if (goTo === 'back' && router.canGoBack()) {
      router.back()
    }

    if (goTo === 'specific' && toPage) {
      router.push(toPage)
    }
  }

  if (goTo === 'none') {
    return <View style={styles.emptySpace} />
  }

  return (
    <Pressable onPress={handleNavigate}>
      <Icon name="chevron" color={styles.icon.color} />
    </Pressable>
  )
}

export default GoToAction
