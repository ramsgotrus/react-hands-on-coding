export interface User {
  id: number;
  name: string;
  first?: string;
}

export interface Transaction {
  userId: number;
  amount: number;
}

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
