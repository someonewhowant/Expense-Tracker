import { Component } from '@angular/core';
import { TransactionService } from '../../../../core/services/transaction.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-transaction.html',
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
