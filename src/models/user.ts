export interface User {
  id: number | string;
  name: string;
  email?: string; // Optional email
  createdAt: Date;
}
