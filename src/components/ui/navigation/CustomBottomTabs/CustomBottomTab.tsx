import Icon from '@/components/icons/Icon'
import { Pressable, View } from 'react-native'
import { Typography } from '../../display'
import { CustomBottomTabProps } from './types'
import { useStyles } from './useStyles'

const CustomBottomTab = ({ label, iconName, badge, isFocused, ...rest }: CustomBottomTabProps) => {
  const styles = useStyles(isFocused)

  const customLabel = badge ? `${label},(${badge})` : label

  return (
    <Pressable
      style={styles.tabItem}
      role="tab"
      aria-selected={isFocused}
      accessibilityLabel={customLabel}
      {...rest}
    >
      <View style={styles.tabContent}>
        <Icon name={iconName} color={styles.tabColor.color} />
        <Typography variant="xsmallBold" color={styles.tabColor.color}>
          {label}
        </Typography>
      </View>
    </Pressable>
  )
}

export default CustomBottomTab
