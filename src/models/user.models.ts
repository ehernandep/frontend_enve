import { Roles } from "./roles";

export interface UserInfo {
  token: string;
  user: any;
}
export interface UserRegister {
  address1: string;
  city: string;
  company: string;
  contact: string;
  email: string;
  firstName: string;
  lastName: string;
  permission: string;
}
