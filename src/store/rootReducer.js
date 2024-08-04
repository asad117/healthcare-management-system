import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import demoReducer from "../features/demo/demoSlice"
// Import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  demo:demoReducer,
  // Add other reducers here
});

export default rootReducer;
