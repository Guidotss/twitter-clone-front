import { GifsUser, User } from ".";

export interface AuthResponse {
  ok: boolean;
  message: string;
  error?: string;
  token?: string;
  user?: User;
}
