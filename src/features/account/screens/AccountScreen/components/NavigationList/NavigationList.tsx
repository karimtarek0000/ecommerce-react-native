import { Typography } from '@/components/ui/display'
import { RowNav } from '@/components/ui/navigation'
import { View } from 'react-native'
import { NavigationListProps } from '../../types'
import { useStyles } from '../../useStyles'

const NavigationList = ({ renderNavigationList }: NavigationListProps) => {
  const styles = useStyles()

  return (
    <View>
      {renderNavigationList.map(({ title, rows }) => {
        return (
          <View key={title}>
            <Typography variant="mediumBold" style={styles.headerTitle}>
              {title}
            </Typography>

            <View style={styles.rows}>
              {rows.map(row => (
                <RowNav key={row.title} {...row} />
              ))}
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default NavigationList
