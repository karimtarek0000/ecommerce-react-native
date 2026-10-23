import Icon from '@/components/icons/Icon'
import { Pressable } from 'react-native'
import { useSharedStyles } from '../shared/useSharedStyles'
import { TextInputActionsProps } from './types'

const TextInputActions = ({
  type,
  isPasswordVisible,
  hasValue,
  onChangeVisibility,
  onClearInput,
}: TextInputActionsProps) => {
  const styles = useSharedStyles()

  return (
    <>
      {type === 'password' && hasValue && (
        <Pressable onPress={onChangeVisibility}>
          <Icon
            name={isPasswordVisible ? 'eyeOff' : 'eye'}
            size={20}
            color={styles.iconClose.color}
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
