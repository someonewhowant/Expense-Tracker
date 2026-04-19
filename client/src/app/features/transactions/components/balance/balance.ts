import { Component, computed } from '@angular/core';
import { TransactionService } from '../../../../core/services/transaction.service';
import { FormatNumberPipe } from '../../../../shared/pipes/format-number.pipe';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [FormatNumberPipe],
  templateUrl: './balance.html',
})
export class BalanceComponent {
  balance = computed(() => {
    const amounts = this.transactionService.transactions().map((t) => t.amount);
    return amounts.reduce((acc, item) => (acc += item), 0);
  });

  constructor(private transactionService: TransactionService) { }
}
