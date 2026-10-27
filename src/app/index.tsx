import { useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function Index() {
  const router = useRouter()

  return (
    <Pressable onPress={() => router.push('/(main)/(tabs)')}>
      <Text>Go to main</Text>
    </Pressable>
  )
}
