import { presistor, store } from '@/store'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SpaceGrotesk-Light': require('../assets/fonts/SpaceGrotesk/SpaceGrotesk-Light.ttf'),
    'SpaceGrotesk-Regular': require('../assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf'),
    'SpaceGrotesk-Bold': require('../assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf'),
    'Cairo-Light': require('../assets/fonts/cairo/Cairo-Light.ttf'),
    'Cairo-Regular': require('../assets/fonts/cairo/Cairo-Regular.ttf'),
    'Cairo-Bold': require('../assets/fonts/cairo/Cairo-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <Stack />
      </PersistGate>
    </Provider>
  )
}
