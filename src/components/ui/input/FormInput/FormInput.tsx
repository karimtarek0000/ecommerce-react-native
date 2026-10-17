import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { FormInputProps, StatusTypes } from './type'
import { useStyles } from './useStyles'

const FormInput = ({
  label,
  placeholder,
  value,
  type = 'text',
  iconName,
  onChange,
  errorMessage,
  style,
}: FormInputProps) => {
  const [isFocused, setFocus] = useState(false)
  const [isPasswordVisible, setVisablePassword] = useState(false)
  const currentStatusInput: StatusTypes = errorMessage
    ? 'error'
    : isFocused
      ? 'focused'
      : value
        ? 'filled'
        : 'default'
  const iconInput = type === 'password' ? 'lock' : iconName
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

        {type === 'password' && (
          <Pressable onPress={() => setVisablePassword(!isPasswordVisible)}>
            <Icon name={isPasswordVisible ? 'eyeOff' : 'eye'} size={20} color={styles.icon.color} />
          </Pressable>
        )}
      </View>

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
