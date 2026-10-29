import { presistor, store } from '@/store'
import { PortalProvider } from '@gorhom/portal'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigation from './AppNavigation'

export default function AppBoostrap() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <GestureHandlerRootView style={styles.container}>
          <PortalProvider>
            <AppNavigation />
          </PortalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
