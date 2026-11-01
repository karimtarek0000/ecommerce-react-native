import ScreenLayout from '@/components/ui/layout/ScreenLayout/ScreenLayout'
import { TopBar } from '@/components/ui/navigation'
import { EditProfileScreen } from '@/features'

const editProfile = () => {
  return (
    <ScreenLayout renderTopBar={() => <TopBar title="edit profile" goTo="back" />}>
      <EditProfileScreen />
    </ScreenLayout>
  )
}

export default editProfile
