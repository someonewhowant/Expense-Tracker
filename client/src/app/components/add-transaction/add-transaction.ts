import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Add new transaction</h3>
    <form (ngSubmit)="onSubmit()">
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" [(ngModel)]="text" name="text" placeholder="Enter text..." />
      </div>
      <div class="form-control">
        <label for="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number" [(ngModel)]="amount" name="amount" placeholder="Enter amount..." />
      </div>
      <button class="btn">Add transaction</button>
    </form>
  `,
})
export class AddTransactionComponent {
  text = '';
  amount = 0;

  constructor(private transactionService: TransactionService) {}

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
