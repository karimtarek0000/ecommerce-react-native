import { Stack } from 'expo-router'

const AccountLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="editProfile" />
    </Stack>
  )
}

export default AccountLayout
