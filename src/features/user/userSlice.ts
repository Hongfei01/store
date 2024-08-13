import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'user slice',
};
const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
