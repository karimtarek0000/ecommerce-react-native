import { personImage } from '@/assets/images'
import { UserGreeting } from '@/components/ui/display'
import { Button } from '@/components/ui/input'
import { BottomSheet, Modal } from '@/components/ui/overlay'
import { Text, View } from 'react-native'
import NavigationList from './components/NavigationList/NavigationList'
import { useAccountScreen } from './useAccountScreen'

const AccountScreen = () => {
  const {
    renderNavigationList,
    visibleLogoutModal,
    bottomSheetLanguageRef,
    bottomSheetThemeRef,
    bottomSheetNotificationsRef,
    t,
    setVisibleLogoutModal,
  } = useAccountScreen()

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

      {/* Modal for logout */}
      <Modal visible={visibleLogoutModal} headTitle={t('account_logoutConfirm')}>
        <View>
          <Button title={t('common_cancel')} onPress={() => setVisibleLogoutModal(false)} />
          <Button
            variant="danger"
            title={t('account_logout')}
            onPress={() => setVisibleLogoutModal(false)}
          />
        </View>
      </Modal>

      {/* Bottom sheet for Language */}
      <BottomSheet
        ref={bottomSheetLanguageRef}
        headTitle={t('account_rowLanguage')}
        bottomSheetProps={{
          snapPoints: ['25%'],
        }}
      >
        <Text>language</Text>
      </BottomSheet>

      {/* Bottom sheet for Theme */}
      <BottomSheet
        ref={bottomSheetThemeRef}
        headTitle={t('account_rowTheme')}
        bottomSheetProps={{
          snapPoints: ['45%'],
        }}
      >
        <Text>theme</Text>
      </BottomSheet>

      {/* Bottom sheet for Notifications */}
      <BottomSheet
        ref={bottomSheetNotificationsRef}
        headTitle={t('account_rowNotifications')}
        bottomSheetProps={{
          snapPoints: ['20%'],
        }}
      >
        <Text>notifications</Text>
      </BottomSheet>
    </>
  )
}

export default AccountScreen
