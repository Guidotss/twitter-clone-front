import { GifsUser, User } from ".";

export interface AuthResponse {
  code: number; 
  ok: boolean;
  message: string;
  error?: string;
  token?: string;
  user?: User;
}
