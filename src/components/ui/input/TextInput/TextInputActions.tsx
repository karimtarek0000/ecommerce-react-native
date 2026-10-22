import Icon from '@/components/icons/Icon'
import { Pressable } from 'react-native'
import { type TextInputActionsProps } from './types'
import { useStyles } from './useStyles'

const TextInputActions = ({
  type,
  isPasswordVisible,
  onChangeVisibility,
  onClearInput,
  hasValue,
}: TextInputActionsProps) => {
  const styles = useStyles()

  return (
    <>
      {type === 'password' && hasValue && (
        <Pressable onPress={onChangeVisibility}>
          <Icon
            name={isPasswordVisible ? 'eyeOff' : 'eye'}
            size={20}
            color={styles.iconsClose.color}
          />
        </Pressable>
      )}

      {type === 'text' && hasValue && (
        <Pressable onPress={onClearInput}>
          <Icon name="x" size={20} />
        </Pressable>
      )}
    </>
  )
}

export default TextInputActions
