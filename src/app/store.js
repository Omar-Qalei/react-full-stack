import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSliceReducer from './userSlice';
import dashboardSliceReducer from '../pages/dashboard/dashboardSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userSlice: userSliceReducer,
    dashboardSlice: dashboardSliceReducer,
  },
});
