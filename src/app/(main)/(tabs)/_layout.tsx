import { CustomBottomTab, CustomBottomTabs } from '@/components/ui/navigation'
import { Tabs } from 'expo-router'
import { TabList, TabSlot, TabTrigger } from 'expo-router/ui'

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <CustomBottomTabs>
          <TabTrigger name="home" href="/" asChild>
            <CustomBottomTab label="home" iconName="home" />
          </TabTrigger>
          <TabTrigger name="myOrder" href="/myOrder" asChild>
            <CustomBottomTab label="my order" iconName="truck" />
          </TabTrigger>
          <TabTrigger name="myCart" href="/myCart" asChild>
            <CustomBottomTab label="my cart" iconName="shoppingCart" />
          </TabTrigger>
          <TabTrigger name="account" href="/account" asChild>
            <CustomBottomTab label="account" iconName="user" />
          </TabTrigger>
        </CustomBottomTabs>
      </TabList>
    </Tabs>
  )
}

// <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
//   <Tabs.Screen
//     name="index"
//     options={{
//       title: 'Home',
//       tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
//     }}
//   />
//   <Tabs.Screen
//     name="settings"
//     options={{
//       title: 'Settings',
//       tabBarIcon: ({ color }) => <Icon size={28} name="trash" color={color} />,
//     }}
//   />
// </Tabs>
