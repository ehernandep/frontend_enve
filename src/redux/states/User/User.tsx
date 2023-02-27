import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../../models";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../../utilities/localStorage.utility";

// esto como que sirve pa setear todo entodas partes ya luego miro bien pero el caso es que debo cambiar todo a token y listo pues con el token que viene del api.
// hacer lo mismo que con user solo que con token, modificar la funcion en auth.service tambien para que quede todo igual a user y ya
export const EmptyUserState: UserInfo = {
  token: "",
  user: "",
};

export const UserKey: string = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
