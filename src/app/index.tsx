// import Icon from '@/components/icons/Icon'
// import Typography from '@/components/ui/display/Typography/Typography'
// import { useUserPreferences } from '@/hooks'
// import useTranslations from '@/hooks/useTranslations'
// import { Button, View } from 'react-native'
import { Button } from '@/components/ui/input'
import { Modal } from '@/components/ui/overlay'
import { useUserPreferences } from '@/hooks'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Index() {
  const [toggleModal, setToggleModal] = useState(false)
  // const [title, setTitle] = useState('')
  // const theme = useTheme()
  // const { currentLanguage, isRTL, t } = useTranslations()
  // const [selected, setSelected] = useState(false)
  const { setTheme } = useUserPreferences()

  return (
    <View style={styles.view}>
      <Modal
        visible={toggleModal}
        headTitle="modal title"
        description="This is a description"
        closeModal={() => setToggleModal(false)}
        modalBody={() => (
          <View>
            <Button title="Dark Mode" onPress={() => setTheme('dark')} />
            <Button title="Light Mode" onPress={() => setTheme('light')} />
          </View>
        )}
      />

      <View style={styles.sentinel} />
      <Button title="Open Modal" onPress={() => setToggleModal(true)} />
      <Button title="Dark Mode" onPress={() => setTheme('dark')} />
      <Button title="Light Mode" onPress={() => setTheme('light')} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    paddingHorizontal: 10,
  },
  sentinel: {
    marginTop: 30,
  },
})
