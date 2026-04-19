import { Component, OnInit, computed } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { TransactionComponent } from '../transaction/transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, TransactionComponent],
  template: `
    <h3>History</h3>
    <ul class="list">
      <app-transaction
        *ngFor="let transaction of transactions()"
        [transaction]="transaction"
      ></app-transaction>
    </ul>
  `,
})
export class TransactionListComponent implements OnInit {
  transactions = computed(() => this.transactionService.transactions());

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions();
  }
}
