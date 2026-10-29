import { ScreenLayout } from '@/components/ui/layout'
import { TopBar } from '@/components/ui/navigation'
import HomeScreen from '@/features/account/screens/HomeScreen/HomeScreen'

const AccountPage = () => {
  return (
    <ScreenLayout scrollable renderTopBar={() => <TopBar title="account" />}>
      <HomeScreen />
    </ScreenLayout>
  )
}

export default AccountPage
