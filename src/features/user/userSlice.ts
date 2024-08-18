import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { toast } from '@/components/ui/use-toast';

export type User = {
  username: string;
  jwt: string;
};

type UserSlice = {
  user: User | null;
};

const getLocalStorageUser = (): User | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const initialState: UserSlice = {
  user: getLocalStorageUser(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      if (user.username === 'demo user') {
        toast({ description: 'Welcome Guest User' });
        return;
      }
      toast({ description: 'Login successful ' });
    },
    logoutUser: (state) => {
      state.user = null;
      // localStorage.clear()
      localStorage.removeItem('user');
    },
  },
});

export default userSlice.reducer;
