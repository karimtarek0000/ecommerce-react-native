import Icon from '@/components/icons/Icon'
import { Typography } from '@/components/ui/display'
import { Pressable, View } from 'react-native'
import { CustomBottomTabProps } from './types'
import { useStyles } from './useStyles'

const MAX_BADGE_COUNT = 9

const CustomBottomTab = ({
  label,
  iconName,
  badge = 0,
  isFocused,
  ...rest
}: CustomBottomTabProps) => {
  const styles = useStyles(isFocused)

  const customLabel = badge ? `${label},(${badge})` : label
  const badgeCount = badge > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : badge

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
          <Icon name={iconName} color={styles.tabOtherColor.color} />
          {!!badge && (
            <View style={styles.tabBadge}>
              <Typography variant="xsmallBold" color={styles.tabBadgeColor.color}>
                {badgeCount}
              </Typography>
            </View>
          )}
        </View>
        <Typography variant="xsmallBold" color={styles.tabOtherColor.color}>
          {label}
        </Typography>
      </View>
    </Pressable>
  )
}

export default CustomBottomTab
