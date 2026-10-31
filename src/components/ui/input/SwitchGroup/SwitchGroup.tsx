import { View } from 'react-native'
import Swicth from '../Switch/Switch'
import { SwitchGroupProps } from './types'

const SwitchGroup = ({ options, onValueChange, style }: SwitchGroupProps) => {
  return (
    <View>
      {options.map(({ label, value, disabled, isSelected }) => {
        return (
          <Swicth
            key={label}
            isSelected={isSelected}
            label={label}
            disabled={disabled}
            onChange={() => onValueChange(value)}
            style={style}
            accessibilityRole="switch"
            accessibilityLabel={label}
            accessibilityState={{ selected: isSelected, disabled }}
          />
        )
      })}
    </View>
  )
}

export default SwitchGroup
