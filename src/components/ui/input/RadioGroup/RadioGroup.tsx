import { View } from 'react-native'
import Radio from '../Radio/Radio'
import { RadioGroupProps } from './types'
import { useStyles } from './useStyles'

const RadioGroup = ({
  options,
  selectedValue,
  onValueChange,
  children,
  direction = 'column',
  style,
}: RadioGroupProps) => {
  const styles = useStyles(direction)

  return (
    <View style={styles.wrapper}>
      {options.map(option => {
        const isSelected = selectedValue === option.value

        return (
          <Radio
            key={option.label}
            isSelected={isSelected}
            label={option.label}
            disabled={option.disabled}
            onChange={() => onValueChange(option.value)}
            style={style}
            accessibilityRole="radio"
            accessibilityLabel={option.label}
            accessibilityState={{ selected: isSelected, disabled: option.disabled }}
          >
            {children?.(option)}
          </Radio>
        )
      })}
    </View>
  )
}

export default RadioGroup
