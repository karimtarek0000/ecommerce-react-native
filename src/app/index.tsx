import { DismissKeyboard } from '@/components/ui/layout'
import { Accordion } from '@/components/ui/overlay'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'

const items = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    textBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    textBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.',
  },
]

export default function Index() {
  const router = useRouter()

  return (
    <DismissKeyboard style={styles.view}>
      <Pressable onPress={() => router.push('/(main)/(tabs)')}>
        <Text>Go to main</Text>
      </Pressable>

      <Accordion items={items} />
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
  },
  sentinel: {
    marginTop: 30,
  },
})
