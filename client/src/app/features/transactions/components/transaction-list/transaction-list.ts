import { Component, OnInit, computed } from '@angular/core';
import { TransactionService } from '../../../../core/services/transaction.service';
import { TransactionComponent } from '../transaction/transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, TransactionComponent],
  templateUrl: './transaction-list.html',
})
export class TransactionListComponent implements OnInit {
  transactions = computed(() => this.transactionService.transactions());

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions();
  }
}
