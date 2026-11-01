import { themeDark, themeLight, themeSystem } from '@/assets/images'
import { RadioGroupOptions } from '@/components/ui/input/RadioGroup/types'
import { SwitchGroupOptions } from '@/components/ui/input/SwitchGroup/types'
import { BottomSheetRef } from '@/components/ui/overlay'
import { useUserPreferences } from '@/hooks'
import useTranslations from '@/hooks/useTranslations'
import { Languages, Theme } from '@/types'
import { useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import { RenderNavigationList } from './components/NavigationList/types'

export const useAccountScreen = () => {
  const { t } = useTranslations()
  const router = useRouter()
  const {
    language: selectedLanguage,
    theme: selectedTheme,
    pushNotifications,
    setLanguage,
    setTheme,
    setPushNotifications,
  } = useUserPreferences()

  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false)
  const bottomSheetLanguageRef = useRef<BottomSheetRef>(null)
  const bottomSheetThemeRef = useRef<BottomSheetRef>(null)
  const bottomSheetNotificationsRef = useRef<BottomSheetRef>(null)
  const bottomSheetSecurityRef = useRef<BottomSheetRef>(null)

  // For Languages
  const languageOptions: RadioGroupOptions[] = [
    {
      label: 'العربية',
      value: 'ar',
    },
    {
      label: 'English',
      value: 'en',
    },
  ] as const

  const trilingTextLanguage = languageOptions.find(
    option => option.value === selectedLanguage,
  )?.label

  const setLanguageHandler = (value: string) => {
    setLanguage(value as Languages)
    bottomSheetLanguageRef.current?.close()
  }

  // For Theme
  const themeOptions: RadioGroupOptions[] = [
    {
      label: t('account_settingThemeLight'),
      value: 'light',
      img: themeLight,
    },
    {
      label: t('account_settingThemeDark'),
      value: 'dark',
      img: themeDark,
    },
    {
      label: t('account_settingThemeSystem'),
      value: 'system',
      img: themeSystem,
    },
  ] as const

  const trilingTextTheme = themeOptions.find(option => option.value === selectedTheme)?.label

  const setThemeHandler = (value: string) => {
    setTheme(value as Theme)
  }

  // For notifications
  const notificationsOptions: SwitchGroupOptions[] = [
    {
      label: 'push notifications',
      value: 'pushNotifications',
      isSelected: pushNotifications,
    },
  ] as const

  const setPushNotificationsHandler = () => {
    setPushNotifications()
    // bottomSheetNotificationsRef.current?.close()
  }

  // Render Navigation List
  const renderNavigationList: RenderNavigationList[] = [
    {
      title: t('common_bottomTabAccount'),
      rows: [
        {
          title: t('account_profileTitle'),
          iconName: 'user',
          onPress: () => router.push('/account/editProfile'),
        },
        {
          title: t('account_rowChangePassword'),
          iconName: 'lock',
          onPress: () => {},
        },
      ],
    },
    {
      title: t('account_sectionShopping'),
      rows: [
        {
          title: t('account_rowAddress'),
          iconName: 'mapPin',
          onPress: () => {},
        },
        {
          title: 'payment methods',
          iconName: 'creditCard',
          onPress: () => {},
        },
        {
          title: 'stores you follow',
          iconName: 'shoppingBag',
          onPress: () => {},
        },
        {
          title: t('account_rowMyOrders'),
          iconName: 'truck',
          onPress: () => {},
        },
      ],
    },
    {
      title: t('account_sectionPreferences'),
      rows: [
        {
          title: t('account_rowNotifications'),
          iconName: 'bell',
          onPress: () => bottomSheetNotificationsRef.current?.expand(),
        },
        {
          title: 'security',
          iconName: 'shield',
          onPress: () => {},
        },
        {
          title: t('account_rowLanguage'),
          iconName: 'world',
          trilingType: 'chevronWithValue',
          trilingText: trilingTextLanguage || '',
          onPress: () => bottomSheetLanguageRef.current?.expand(),
        },
        {
          title: t('account_rowTheme'),
          iconName: 'palette',
          trilingType: 'chevronWithValue',
          trilingText: trilingTextTheme || '',
          onPress: () => bottomSheetThemeRef.current?.expand(),
        },
      ],
    },
    {
      title: t('account_sectionSupport'),
      rows: [
        {
          title: t('account_helpSupportTitle'),
          iconName: 'help',
          onPress: () => {},
        },
        {
          title: t('account_legalTitle'),
          iconName: 'fileText',
          onPress: () => {},
        },
        {
          variant: 'danger',
          title: t('account_logout'),
          iconName: 'logout',
          onPress: () => setVisibleLogoutModal(true),
        },
      ],
    },
  ] as const

  return {
    renderNavigationList,
    visibleLogoutModal,
    selectedLanguage,
    selectedTheme,
    bottomSheetLanguageRef,
    bottomSheetThemeRef,
    bottomSheetNotificationsRef,
    bottomSheetSecurityRef,
    languageOptions,
    themeOptions,
    notificationsOptions,
    t,
    setVisibleLogoutModal,
    setLanguageHandler,
    setThemeHandler,
    setPushNotificationsHandler,
  }
}
