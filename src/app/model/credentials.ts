import { Role } from "./role";

export interface Credentials{
  id:number;
    username:string;
    password: string;
    enabled:Boolean;
    roles:Role[];
  }
  