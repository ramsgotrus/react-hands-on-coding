export interface User {
  id: number;
  name: string;
  first: string;
}

export interface Transaction {
  userId: number;
  amount: number;
}
