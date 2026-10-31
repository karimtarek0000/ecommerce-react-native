import { View } from 'react-native'
import Radio from '../Radio/Radio'
import { RadioGroupProps } from './types'

const RadioGroup = ({ options, selectedValue, onValueChange, style }: RadioGroupProps) => {
  return (
    <View>
      {options.map(({ label, value, disabled }) => {
        const isSelected = selectedValue === value

        return (
          <Radio
            key={label}
            isSelected={isSelected}
            label={label}
            disabled={disabled}
            onChange={() => onValueChange(value)}
            style={style}
            accessibilityRole="radio"
            accessibilityLabel={label}
            accessibilityState={{ selected: isSelected, disabled }}
          />
        )
      })}
    </View>
  )
}

export default RadioGroup
