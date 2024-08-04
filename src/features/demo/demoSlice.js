// src/features/demo/demoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const demoSlice = createSlice({
  name: 'demo',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDemoDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDemoDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDemoDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDemoDataRequest,
  fetchDemoDataSuccess,
  fetchDemoDataFailure,
} = demoSlice.actions;

export default demoSlice.reducer;
