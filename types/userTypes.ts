export interface Customer {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string[];
  isActive: boolean;
}

export interface UserLogin {
  email: string | undefined | unknown;
  password: string | undefined | unknown;
}
