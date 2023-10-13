import { configureStore } from '@reduxjs/toolkit'
import storyReducer from './redux/storySlice'

export default configureStore({
  reducer: {
    story: storyReducer
  }
})