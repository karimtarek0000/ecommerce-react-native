import { TextInput } from '@/components/ui/input'
import { DismissKeyboard } from '@/components/ui/layout'
import { BottomSheet, BottomSheetRef } from '@/components/ui/overlay'
import { useUserPreferences } from '@/hooks'
import { useRef } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Index() {
  const ref = useRef<BottomSheetRef>(null)
  const { setTheme } = useUserPreferences()

  return (
    <DismissKeyboard style={styles.view}>
      <TextInput
        label="Label"
        placeholder="Placeholder"
        value=""
        onChange={() => console.log('change')}
        onClearInput={() => {}}
        iconName="user"
      />

      <View style={styles.sentinel} />
      <View style={styles.sentinel} />
      <View style={styles.sentinel} />
      <Button title="Bottom Sheet" onPress={() => ref.current?.expand()} />
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />

      <BottomSheet
        ref={ref}
        headTitle=" Bottom Sheet Title"
        description="Optional secondary description below the title"
        bottomSheetProps={{
          snapPoints: ['19%', '60%'],
          children: <Text>Testing</Text>,
        }}
      />
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
