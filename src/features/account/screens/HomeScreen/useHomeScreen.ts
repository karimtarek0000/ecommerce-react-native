import { RenderRowNavComponents } from './types'

export const useHomeScreen = () => {
  const renderRowNavComponents: RenderRowNavComponents[] = [
    {
      title: 'account',
      rows: [
        {
          title: 'edit profile',
          iconName: 'user',
          onPress: () => {},
        },
        {
          title: 'change password',
          iconName: 'lock',
          onPress: () => {},
        },
      ],
    },
    {
      title: 'shopping',
      rows: [
        {
          title: 'address',
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
          title: 'my orders',
          iconName: 'truck',
          onPress: () => {},
        },
      ],
    },
    {
      title: 'preferences',
      rows: [
        {
          title: 'notifications',
          iconName: 'bell',
          onPress: () => {},
        },
        {
          title: 'security',
          iconName: 'shield',
          onPress: () => {},
        },
        {
          title: 'language',
          iconName: 'world',
          trilingType: 'chevronWithValue',
          trilingText: 'english',
          onPress: () => {},
        },
        {
          title: 'theme',
          iconName: 'palette',
          trilingType: 'chevronWithValue',
          trilingText: 'light',
          onPress: () => {},
        },
      ],
    },
    {
      title: 'support',
      rows: [
        {
          title: 'help & support',
          iconName: 'help',
          onPress: () => {},
        },
        {
          title: 'legal & policies',
          iconName: 'fileText',
          onPress: () => {},
        },
        {
          variant: 'danger',
          title: 'logout',
          iconName: 'logout',
          onPress: () => {},
        },
      ],
    },
  ] as const

  return { renderRowNavComponents }
}
