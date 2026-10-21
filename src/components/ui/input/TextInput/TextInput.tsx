import Icon from '@/components/icons/Icon'
import { IconName } from '@/components/icons/types'
import { useState } from 'react'
import { TextInput as TextInputField, View } from 'react-native'
import TextInputActions from './TextInputActions'
import TextInputErrorMessage from './TextInputErrorMessage'
import TextInputLabel from './TextInputLabel'
import { TextInputProps } from './types'
import { useStyles } from './useStyles'
import { getCurrentStatusType } from './util'

const TextInput = ({
  label,
  placeholder,
  value,
  type = 'text',
  iconName,
  onChange,
  onClearInput,
  errorMessage,
  style,
}: TextInputProps) => {
  const [isFocused, setFocus] = useState(false)
  const [isPasswordVisible, setVisablePassword] = useState(false)
  const currentStatusInput = getCurrentStatusType(errorMessage, isFocused, value)
  const iconInput: IconName = type === 'password' ? 'lock' : (iconName as IconName)

  const styles = useStyles(currentStatusInput)

  return (
    <View style={[styles.wrapper, style]}>
      <TextInputLabel label={label} />

      <View style={styles.inputWrapper}>
        <Icon name={iconInput} size={20} color={styles.icon.color} />

        <TextInputField
          style={styles.textInput}
          value={value}
          onChangeText={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          placeholderTextColor={styles.placeholder.color}
          secureTextEntry={type === 'password' && !isPasswordVisible}
        />

        <TextInputActions
          type={type}
          isPasswordVisible={isPasswordVisible}
          onChangeVisibility={() => setVisablePassword(!isPasswordVisible)}
          onClearInput={onClearInput}
          hasValue={!!value}
        />
      </View>

      <TextInputErrorMessage errorMessage={errorMessage} />
    </View>
  )
}

export default TextInput
