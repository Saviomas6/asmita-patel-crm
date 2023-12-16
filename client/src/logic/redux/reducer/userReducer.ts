import { createReducer } from "@reduxjs/toolkit";
import { setLoggedDetail, setLoggedIn, themeToggle } from "../action/action";

interface I_Props {
  bannerUrl: string;
  bio: string;
  email: string;
  joinedDate: string;
  name: string;
  profileUrl: string;
  username: string;
  _id: string;
}

interface I_InitialStateProps {
  isLoggedIn: boolean;
  isLoggedDetail: I_Props[];
  themeValue: string;
}
export const initialState: I_InitialStateProps = {
  isLoggedIn: false,
  isLoggedDetail: [],
  themeValue: "light",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLoggedIn, (state, action) => {
    state.isLoggedIn = action.payload;
  });
  builder.addCase(setLoggedDetail, (state, action) => {
    state.isLoggedDetail = action.payload;
  });
  builder.addCase(themeToggle, (state, action) => {
    state.themeValue = action.payload;
  });
});

export default userReducer;
