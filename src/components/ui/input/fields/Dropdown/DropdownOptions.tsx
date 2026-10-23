import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Pressable } from 'react-native'
import { useSharedStyles } from '../shared/useSharedStyles'
import { DropdownOptionProps } from './types'

const DropdownOptions = ({ options, value, onSelect }: DropdownOptionProps) => {
  const styles = useSharedStyles()

  return (
    <>
      {options.map(opt => {
        return (
          <Pressable
            key={opt.value}
            onPress={() => onSelect(opt.value)}
            style={[
              styles.optionSelectItem,
              opt.value === value && styles.optionSelectItemSelected,
            ]}
          >
            <Typography
              variant="normalBold"
              color={
                opt.value === value ? styles.optionTextSelected.color : styles.optionText.color
              }
            >
              {opt.label}
            </Typography>

            {opt.value === value && (
              <Icon name="check" size={20} color={styles.optionCheckIcon.color} />
            )}
          </Pressable>
        )
      })}
    </>
  )
}

export default DropdownOptions
