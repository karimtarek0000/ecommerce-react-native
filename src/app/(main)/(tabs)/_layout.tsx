import { CustomBottomTab, CustomBottomTabs } from '@/components/ui/navigation'
import useTranslations from '@/hooks/useTranslations'
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui'

export default function TabLayout() {
  const { t } = useTranslations()

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTabs>
          <TabTrigger name="home" href="/" asChild>
            <CustomBottomTab label={t('common_bottomTabHome')} iconName="home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTab label={t('common_bottomTabMyOrder')} iconName="truck" />
          </TabTrigger>
          <TabTrigger name="myCart" href="/myCart" asChild>
            <CustomBottomTab
              label={t('common_bottomTabMyCart')}
              iconName="shoppingCart"
              badge={2}
            />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTab label={t('common_bottomTabAccount')} iconName="user" />
          </TabTrigger>
        </CustomBottomTabs>
      </TabList>
    </Tabs>
  )
}
