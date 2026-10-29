import { BottomSheetRef } from '@/components/ui/overlay'
import useTranslations from '@/hooks/useTranslations'
import { useRef, useState } from 'react'
import { RenderNavigationList } from './types'

export const useAccountScreen = () => {
  const { t } = useTranslations()
  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false)
  const bottomSheetLanguageRef = useRef<BottomSheetRef>(null)
  const bottomSheetThemeRef = useRef<BottomSheetRef>(null)
  const bottomSheetNotificationsRef = useRef<BottomSheetRef>(null)
  const bottomSheetSecurityRef = useRef<BottomSheetRef>(null)

  const renderNavigationList: RenderNavigationList[] = [
    {
      title: t('common_bottomTabAccount'),
      rows: [
        {
          title: t('account_profileTitle'),
          iconName: 'user',
          onPress: () => {},
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
          trilingText: 'english',
          onPress: () => bottomSheetLanguageRef.current?.expand(),
        },
        {
          title: t('account_rowTheme'),
          iconName: 'palette',
          trilingType: 'chevronWithValue',
          trilingText: 'light',
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
    t,
    renderNavigationList,
    visibleLogoutModal,
    setVisibleLogoutModal,
    bottomSheetLanguageRef,
    bottomSheetThemeRef,
    bottomSheetNotificationsRef,
    bottomSheetSecurityRef,
  }
}
