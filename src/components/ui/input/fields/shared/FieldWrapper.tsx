import Icon from '@/components/icons/Icon'
import { View } from 'react-native'
import FieldErrorMessage from './FieldErrorMessage'
import FieldLabel from './FieldLabel'
import { FieldWrapperProps } from './sharedTypes'
import { useSharedStyles } from './useSharedStyles'

const FieldWrapper = ({
  label,
  iconName,
  errorMessage,
  currentStatusInput,
  children,
  style,
}: FieldWrapperProps) => {
  const styles = useSharedStyles(currentStatusInput)

  return (
    <View style={[styles.wrapper, style]}>
      <FieldLabel label={label} />

      <View style={styles.fieldWrapper}>
        <Icon name={iconName} size={20} color={styles.icon.color} />

        {children}
      </View>

      <FieldErrorMessage errorMessage={errorMessage} />
    </View>
  )
}

export default FieldWrapper
