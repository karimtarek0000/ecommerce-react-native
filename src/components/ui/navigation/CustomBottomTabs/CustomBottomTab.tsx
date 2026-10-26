import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { CustomBottomTabProps } from './types'
import { useStyles } from './useStyles'

const CustomBottomTab = ({ label, iconName, badge, isFocused, ...rest }: CustomBottomTabProps) => {
  const styles = useStyles(isFocused)

  const customLabel = badge ? `${label},(${badge})` : label

  return (
    <Pressable
      {...rest}
      style={styles.tabButton}
      role="tab"
      aria-selected={isFocused}
      accessibilityLabel={customLabel}
    >
      <View style={styles.tabItem}>
        <View style={styles.tabIcon}>
          <Icon name={iconName} color={styles.tabColor.color} />
          {!!badge && (
            <View style={styles.tabBadge}>
              <Typography variant="xsmallBold">{badge}</Typography>
            </View>
          )}
        </View>
        <Typography variant="xsmallBold" color={styles.tabColor.color}>
          {label}
        </Typography>
      </View>
    </Pressable>
  )
}

export default CustomBottomTab
