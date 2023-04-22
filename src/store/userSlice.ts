import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type EmailName = {
  email: string;
  name: string;
};

type Password = {
  password: string;
};

interface User {
  name?: string;
  email?: string;
  password?: string;
}

const initialState = [] as User[];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<EmailName>) => {
      state.push(action.payload);
    },
    updatePassword: (state, action: PayloadAction<Password>) => {
      const lastItem = state[state.length - 1];

      lastItem.password = action.payload.password;
    },
  },
});

export const { createUser, updatePassword } = usersSlice.actions;
export default usersSlice.reducer;
