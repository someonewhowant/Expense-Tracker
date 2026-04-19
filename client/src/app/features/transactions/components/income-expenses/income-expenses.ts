import { Component, computed } from '@angular/core';
import { TransactionService } from '../../../../core/services/transaction.service';
import { FormatNumberPipe } from '../../../../shared/pipes/format-number.pipe';

@Component({
  selector: 'app-income-expenses',
  standalone: true,
  imports: [FormatNumberPipe],
  templateUrl: './income-expenses.html',
})
export class IncomeExpensesComponent {
  income = computed(() => {
    const amounts = this.transactionService.transactions().map((t) => t.amount);
    return amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0);
  });

  expense = computed(() => {
    const amounts = this.transactionService.transactions().map((t) => t.amount);
    return amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0);
  });

  constructor(private transactionService: TransactionService) { }
}
