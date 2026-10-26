import { ScreenLayout } from '@/components/ui/layout'
import { TopBar } from '@/components/ui/navigation'
import { Text } from 'react-native'

const HomePage = () => {
  return (
    <ScreenLayout renderTopBar={() => <TopBar title="Home" />}>
      <Text>HomePage as Main</Text>
    </ScreenLayout>
  )
}

export default HomePage
