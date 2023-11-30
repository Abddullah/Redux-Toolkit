import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user.sclice'

const store = configureStore = ({
    reducer: {
        users: userSlice,
    },
})

export default store;