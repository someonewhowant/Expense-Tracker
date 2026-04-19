import { Component, Input } from '@angular/core';
import { Transaction, TransactionService } from '../../services/transaction';
import { FormatNumberPipe } from '../../pipes/format-number-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormatNumberPipe],
  templateUrl: './transaction.html',
})
export class TransactionComponent {
  @Input() transaction!: Transaction;

  constructor(private transactionService: TransactionService) {}

  onDelete() {
    if (this.transaction.id !== undefined) {
      this.transactionService.deleteTransaction(this.transaction.id);
    }
  }
}
