import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction, TransactionsResponse } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = '/api/v1/transactions';

  transactions = signal<Transaction[]>([]);
  error = signal<string | null>(null);
  loading = signal<boolean>(false);

  constructor(private http: HttpClient) { }

  getTransactions() {
    this.loading.set(true);
    this.http.get<TransactionsResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.transactions.set(res.data as Transaction[]);
        this.error.set(null);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.error || 'Server Error');
        this.loading.set(false);
      },
    });
  }

  deleteTransaction(id: number) {
    this.http.delete<TransactionsResponse>(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.transactions.update((prev) => prev.filter((t) => t.id !== id));
        this.error.set(null);
      },
      error: (err) => {
        this.error.set(err.error?.error || 'Server Error');
      },
    });
  }

  addTransaction(transaction: Transaction) {
    this.http.post<TransactionsResponse>(this.apiUrl, transaction).subscribe({
      next: (res) => {
        this.transactions.update((prev) => [...prev, res.data as Transaction]);
        this.error.set(null);
      },
      error: (err) => {
        this.error.set(err.error?.error || 'Server Error');
      },
    });
  }
}
