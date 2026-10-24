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
        const isSelected = opt.value === value

        return (
          <Pressable
            key={opt.value}
            onPress={() => onSelect(opt.value)}
            style={[styles.optionSelectItem, isSelected && styles.optionSelectItemSelected]}
          >
            <Typography
              variant="normalBold"
              color={isSelected ? styles.optionTextSelected.color : styles.optionText.color}
            >
              {opt.label}
            </Typography>

            {isSelected && <Icon name="check" size={20} color={styles.optionCheckIcon.color} />}
          </Pressable>
        )
      })}
    </>
  )
}

export default DropdownOptions
