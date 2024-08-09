import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Use localStorage by default

import userSlice from './features/user/userSlice'; // Import your user reducer
import storage from './storage';

export const makeStore = () => {
    const persistConfig = {
        key: 'root',
        storage,
        // Optionally add whitelisting or blacklisting for persistence:
        whitelist: ['user'], // Persist only the 'user' slice
        // blacklist: [], // Don't persist any slices (useful for testing)
    };

    const rootReducer = combineReducers({
        user: userSlice,
    });

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });

    // Create the persistor
    const persistor = persistStore(store);

    return { store, persistor };
};

// Infer the type of the store and persistor
export type AppStore = ReturnType<typeof makeStore>['store'];
export type Persistor = ReturnType<typeof makeStore>['persistor'];

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()