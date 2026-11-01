import { ScreenLayout } from '@/components/ui/layout'
import { TopBar } from '@/components/ui/navigation'
import { AccountScreen } from '@/features'

const AccountPage = () => {
  return (
    <ScreenLayout scrollable renderTopBar={() => <TopBar title="account" />}>
      <AccountScreen />
    </ScreenLayout>
  )
}

export default AccountPage
