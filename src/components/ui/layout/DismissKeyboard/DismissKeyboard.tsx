import { Keyboard, Pressable } from 'react-native'
import { type DismissKeyboardProps } from './types'

const DismissKeyboard = ({ style, children }: DismissKeyboardProps) => {
  return (
    <Pressable onPress={Keyboard.dismiss} style={style}>
      {children}
    </Pressable>
  )
}

export default DismissKeyboard
