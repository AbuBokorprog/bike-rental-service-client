import { jwtDecode } from "jwt-decode";

export const JWTDecode = (token: string) => {
  return jwtDecode(token);
};
