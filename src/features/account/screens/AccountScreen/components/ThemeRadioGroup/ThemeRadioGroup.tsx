import { RadioGroup } from '@/components/ui/input'
import { RadioGroupProps } from '@/components/ui/input/RadioGroup/types'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { useStyles } from './useStyles'

const ThemeRadioGroup = ({ options, selectedValue, onValueChange }: RadioGroupProps) => {
  const styles = useStyles()

  return (
    <RadioGroup
      options={options}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      direction="row"
      style={styles.radioGroup}
    >
      {option => {
        return (
          <View style={styles.imageWrapper}>
            <Image source={option.img} style={styles.preview} contentFit="fill" />
          </View>
        )
      }}
    </RadioGroup>
  )
}

export default ThemeRadioGroup
