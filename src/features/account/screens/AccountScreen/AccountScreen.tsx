import { personImage } from '@/assets/images'
import { UserGreeting } from '@/components/ui/display'
import NavigationList from './components/NavigationList/NavigationList'
import { useAccountScreen } from './useAccountScreen'

const AccountScreen = () => {
  const { renderNavigationList } = useAccountScreen()

  return (
    <>
      <UserGreeting
        userName="jonathan smith"
        imgSrc={personImage}
        size="md"
        type="meta"
        meta="jonathan@kimzshop.com"
      />

      <NavigationList renderNavigationList={renderNavigationList} />
    </>
  )
}

export default AccountScreen
