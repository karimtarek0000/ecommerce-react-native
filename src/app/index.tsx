import { DismissKeyboard } from '@/components/ui/layout'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function Index() {
  const router = useRouter()

  return (
    <DismissKeyboard style={styles.view}>
      <Pressable onPress={() => router.push('/(main)/(tabs)')}>
        <Text>Go to main</Text>
      </Pressable>

      {/* <RadioGroup
        options={options}
        selectedValue={selectedValue}
        onValueChange={value => setSelectedValue(value)}
      /> */}
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
