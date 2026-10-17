import Icon from '@/components/icons/Icon'
import { Pressable } from 'react-native'
import { TextInputType } from './type'
import { useStyles } from './useStyles'

type TextInputActionsProps = {
  type: TextInputType
  isPasswordVisible: boolean
  onChangeVisibility: VoidFunction
  onClearInput?: VoidFunction
  hasValue: boolean
}

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
