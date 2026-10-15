import { themeSlice, translationsSlice, userPreferencesSlice } from '@/store/slices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

const persistUserPerferencesConfig = {
  key: 'userPerferences',
  version: 1,
  storage: AsyncStorage,
}

const rootReducers = combineReducers({
  theme: themeSlice,
  translations: translationsSlice,
  userPerferences: persistReducer(persistUserPerferencesConfig, userPreferencesSlice),
})

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: false,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(devToolsEnhancer()),
})

const presistor = persistStore(store)
export { presistor, store }

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
