import Icon from '@/components/icons/Icon'
import { IconName } from '@/components/icons/types'
import { TabTriggerSlotProps } from 'expo-router/ui'
import { Pressable, View } from 'react-native'
import { Typography } from '../../display'
import { useStyles } from './useStyles'

type CustomBottomTabProps = TabTriggerSlotProps & {
  label: string
  iconName: IconName
  badge?: number
  isFocused?: boolean
}

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
        <Typography variant="xsmallBold" color={styles.tabColor.color}>
          {label}
        </Typography>

        <Icon name={iconName} color={styles.tabColor.color} />
      </View>
    </Pressable>
  )
}

export default CustomBottomTab
