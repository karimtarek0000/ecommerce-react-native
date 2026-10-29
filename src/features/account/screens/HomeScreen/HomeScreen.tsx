import { personImage } from '@/assets/images'
import { Typography, UserGreeting } from '@/components/ui/display'
import { RowNav } from '@/components/ui/navigation'
import { View } from 'react-native'
import { useHomeScreen } from './useHomeScreen'

const HomeScreen = () => {
  const { renderRowNavComponents } = useHomeScreen()

  return (
    <View>
      <UserGreeting
        userName="jonathan smith"
        imgSrc={personImage}
        size="md"
        type="meta"
        meta="jonathan@kimzshop.com"
      />

      {/* Content */}
      {renderRowNavComponents.map(({ title, rows }) => {
        return (
          <View key={title}>
            <Typography variant="mediumBold" color="red">
              {title}
            </Typography>

            {rows.map(row => {
              return (
                <>
                  <RowNav key={row.title} {...row} />
                </>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

export default HomeScreen
