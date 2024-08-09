'use client'
import { AppStore, makeStore, Persistor } from '@/lib/store'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

interface SProviderProps {
    children: React.ReactNode
}

const StoreProvider: React.FC<SProviderProps> = (props) => {
    const { children } = props


    const storeRef = useRef<AppStore>()
    const persistorRef = useRef<Persistor>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore().store
    }
    if (!persistorRef.current) {
        // Create the store instance the first time this renders
        persistorRef.current = makeStore().persistor
    }

    return <Provider store={storeRef.current}>
        <PersistGate persistor={persistorRef.current}>
            {children}
        </PersistGate>
    </Provider>
}

export default StoreProvider