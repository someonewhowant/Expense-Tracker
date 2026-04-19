import { Component, computed } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { FormatNumberPipe } from '../../pipes/format-number-pipe';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [FormatNumberPipe],
  template: `
    <h4>Your Balance</h4>
    <h1>\${{ balance() | formatNumber }}</h1>
  `,
})
export class BalanceComponent {
  balance = computed(() => {
    const amounts = this.transactionService.transactions().map((t) => t.amount);
    return amounts.reduce((acc, item) => (acc += item), 0);
  });

  constructor(private transactionService: TransactionService) {}
}
