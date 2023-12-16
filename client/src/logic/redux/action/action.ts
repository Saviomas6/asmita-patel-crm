import { createAction } from "@reduxjs/toolkit";
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
export const setLoggedIn = createAction<boolean>("setLoggedIn");
export const setLoggedDetail = createAction<I_Props[]>("setLoggedDetail");
export const themeToggle = createAction<string>("theme");
