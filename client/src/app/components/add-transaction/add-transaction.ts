import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Add new transaction</h3>
    <form (ngSubmit)="onSubmit()" class="transaction-form">
      <div class="form-control">
        <label for="text">Description</label>
        <input type="text" [(ngModel)]="text" name="text" placeholder="e.g., Coffee, Salary, Rent" />
      </div>
      <div class="form-control">
        <label for="amount">Amount (+ income, - expense)</label>
        <input type="number" [(ngModel)]="amount" name="amount" placeholder="0.00" />
      </div>
      <button class="btn">Add Transaction</button>
    </form>
  `,
})
export class AddTransactionComponent {
  text = '';
  amount = 0;

  constructor(private transactionService: TransactionService) { }

  onSubmit() {
    if (this.text.trim() === '' || this.amount === 0) {
      alert('Please add a text and amount');
      return;
    }

    const newTransaction = {
      text: this.text,
      amount: +this.amount,
    };

    this.transactionService.addTransaction(newTransaction);

    this.text = '';
    this.amount = 0;
  }
}
