import Icon from '@/components/icons/Icon'
import { IconName } from '@/components/icons/types'
import { Typography } from '@/components/ui/display'
import { useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { FormInputProps } from './type'
import { useStyles } from './useStyles'
import { getCurrentStatusType } from './util'

const FormInput = ({
  label,
  placeholder,
  value,
  type = 'text',
  iconName,
  onChange,
  onClearInput,
  errorMessage,
  style,
}: FormInputProps) => {
  const [isFocused, setFocus] = useState(false)
  const [isPasswordVisible, setVisablePassword] = useState(false)
  const currentStatusInput = getCurrentStatusType(errorMessage, isFocused, value)
  const iconInput: IconName = type === 'password' ? 'lock' : (iconName as IconName)

  const styles = useStyles(currentStatusInput)

  return (
    <View style={[styles.wrapper, style]}>
      {/* Label */}
      <Typography variant="normalBold" color={styles.label.color}>
        {label}
      </Typography>

      {/* Input */}
      <View style={styles.inputWrapper}>
        <Icon name={iconInput} size={20} color={styles.icon.color} />
        <TextInput
          style={styles.textInput}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          placeholderTextColor={styles.placeholder.color}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={type === 'password' && !isPasswordVisible}
        />

        {/* Change password visibility */}
        {type === 'password' && value && (
          <Pressable onPress={() => setVisablePassword(!isPasswordVisible)}>
            <Icon name={isPasswordVisible ? 'eyeOff' : 'eye'} size={20} color={styles.icon.color} />
          </Pressable>
        )}

        {/* Clear input */}
        {type === 'text' && value && (
          <Pressable onPress={onClearInput}>
            <Icon name="x" size={20} color={styles.icon.color} />
          </Pressable>
        )}
      </View>

      {/* Error message */}
      {errorMessage && (
        <Typography
          variant="xsmallRegular"
          color={styles.errorMessage.color}
          style={{ marginTop: styles.errorMessage.marginTop }}
        >
          {errorMessage}
        </Typography>
      )}
    </View>
  )
}

export default FormInput
