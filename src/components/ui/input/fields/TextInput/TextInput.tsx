import { IconName } from '@/components/icons/types'
import { useState } from 'react'
import { TextInput as TextInputField } from 'react-native'
import FieldWrapper from '../shared/FieldWrapper'
import { useSharedStyles } from '../shared/useSharedStyles'
import TextInputActions from './TextInputActions'
import { TextInputProps } from './types'

const TextInput = ({
  label,
  placeholder,
  value,
  type = 'text',
  iconName,
  errorMessage,
  style,
  onChange,
  onClearInput,
}: TextInputProps) => {
  const styles = useSharedStyles()

  const [isFocused, setFocus] = useState(false)
  const [isPasswordVisible, setVisablePassword] = useState(false)

  const inputIcon: IconName = type === 'password' ? 'lock' : (iconName as IconName)

  return (
    <FieldWrapper
      label={label}
      errorMessage={errorMessage}
      iconName={inputIcon}
      isFocused={isFocused}
      value={value}
      style={style}
    >
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
    </FieldWrapper>
  )
}

export default TextInput
