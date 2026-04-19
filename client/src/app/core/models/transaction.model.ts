export interface Transaction {
  id?: number;
  text: string;
  amount: number;
  createdAt?: Date;
}

export interface TransactionsResponse {
  success: boolean;
  count?: number;
  data: Transaction[] | Transaction;
}
