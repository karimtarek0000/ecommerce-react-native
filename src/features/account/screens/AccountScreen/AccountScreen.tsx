import { personImage } from '@/assets/images'
import { UserGreeting } from '@/components/ui/display'
import { Button, RadioGroup, SwitchGroup } from '@/components/ui/input'
import { ScreenLayout } from '@/components/ui/layout'
import { TopBar } from '@/components/ui/navigation'
import { BottomSheet, Modal } from '@/components/ui/overlay'
import { View } from 'react-native'
import NavigationList from './components/NavigationList/NavigationList'
import ThemeRadioGroup from './components/ThemeRadioGroup/ThemeRadioGroup'
import { useAccountScreen } from './useAccountScreen'

const AccountScreen = () => {
  const {
    renderNavigationList,
    visibleLogoutModal,
    bottomSheetLanguageRef,
    bottomSheetThemeRef,
    bottomSheetNotificationsRef,
    languageOptions,
    themeOptions,
    notificationsOptions,
    selectedLanguage,
    selectedTheme,
    t,
    setVisibleLogoutModal,
    setLanguageHandler,
    setThemeHandler,
    setPushNotificationsHandler,
  } = useAccountScreen()

  return (
    <ScreenLayout scrollable renderTopBar={() => <TopBar title="account" />}>
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
        bottomSheetProps={{ snapPoints: ['25%'] }}
      >
        <BottomSheet.Content>
          <RadioGroup
            options={languageOptions}
            selectedValue={selectedLanguage}
            onValueChange={setLanguageHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>

      {/* Bottom sheet for Theme */}
      <BottomSheet
        ref={bottomSheetThemeRef}
        headTitle={t('account_rowTheme')}
        bottomSheetProps={{
          snapPoints: ['40%'],
        }}
      >
        <BottomSheet.Content>
          <ThemeRadioGroup
            options={themeOptions}
            selectedValue={selectedTheme}
            onValueChange={setThemeHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>

      {/* Bottom sheet for Notifications */}
      <BottomSheet
        ref={bottomSheetNotificationsRef}
        headTitle={t('account_rowNotifications')}
        bottomSheetProps={{
          snapPoints: ['20%'],
        }}
      >
        <BottomSheet.Content>
          <SwitchGroup options={notificationsOptions} onValueChange={setPushNotificationsHandler} />
        </BottomSheet.Content>
      </BottomSheet>
    </ScreenLayout>
  )
}

export default AccountScreen
