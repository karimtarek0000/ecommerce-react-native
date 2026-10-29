import { personImage } from '@/assets/images'
import { UserGreeting } from '@/components/ui/display'
import HomeScreenSections from './components/HomeScreenSections'
import { useHomeScreen } from './useHomeScreen'

const HomeScreen = () => {
  const { renderSectionsHomeScreen } = useHomeScreen()

  return (
    <>
      <UserGreeting
        userName="jonathan smith"
        imgSrc={personImage}
        size="md"
        type="meta"
        meta="jonathan@kimzshop.com"
      />

      <HomeScreenSections renderSectionsHomeScreen={renderSectionsHomeScreen} />
    </>
  )
}

export default HomeScreen
