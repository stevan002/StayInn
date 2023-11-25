export interface User {
    id?: string;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: string;
    role?: string;
}

export interface JwtPayload {
    role: string; 
    username: string;
  }