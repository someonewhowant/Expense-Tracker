import { Component, computed } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { FormatNumberPipe } from '../../pipes/format-number-pipe';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [FormatNumberPipe],
  template: `
    <div class="balance-container">
      <h4>Your Balance</h4>
      <h1 id="balance">\${{ balance() | formatNumber }}</h1>
    </div>
  `,
})
export class BalanceComponent {
  balance = computed(() => {
    const amounts = this.transactionService.transactions().map((t) => t.amount);
    return amounts.reduce((acc, item) => (acc += item), 0);
  });

  constructor(private transactionService: TransactionService) { }
}
