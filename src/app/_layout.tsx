import { presistor, store } from '@/store'
import { PortalProvider } from '@gorhom/portal'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={presistor}>
          <PortalProvider>
            <Stack />
          </PortalProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
