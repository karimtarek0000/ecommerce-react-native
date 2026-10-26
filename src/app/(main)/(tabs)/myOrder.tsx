import { ScreenLayout } from '@/components/ui/layout'
import { TopBar } from '@/components/ui/navigation'
import { Text } from 'react-native'

const MyOrderPage = () => {
  return (
    <ScreenLayout renderTopBar={() => <TopBar title="my order" />}>
      <Text>My order page</Text>
    </ScreenLayout>
  )
}

export default MyOrderPage
