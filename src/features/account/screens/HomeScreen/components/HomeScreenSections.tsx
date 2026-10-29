import { Typography } from '@/components/ui/display'
import { RowNav } from '@/components/ui/navigation'
import { View } from 'react-native'
import { HomeScreenSectionsProps } from '../types'

const HomeScreenSections = ({ renderSectionsHomeScreen }: HomeScreenSectionsProps) => {
  return (
    <View>
      {renderSectionsHomeScreen.map(({ title, rows }) => {
        return (
          <View key={title}>
            <Typography variant="mediumBold" color="red">
              {title}
            </Typography>

            {rows.map(row => (
              <RowNav key={row.title} {...row} />
            ))}
          </View>
        )
      })}
    </View>
  )
}

export default HomeScreenSections
