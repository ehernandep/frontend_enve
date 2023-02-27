import { configureStore } from "@reduxjs/toolkit";
import { UserInfo } from "../models";

import { userSlice } from "./states/User/User";

export interface AppStore {
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: { user: userSlice.reducer },
});
