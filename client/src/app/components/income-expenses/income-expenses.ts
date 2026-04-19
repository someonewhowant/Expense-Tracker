import { Component, computed } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { FormatNumberPipe } from '../../pipes/format-number-pipe';

@Component({
  selector: 'app-income-expenses',
  standalone: true,
  imports: [FormatNumberPipe],
  template: `
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p class="money plus">+$\{{ income() | formatNumber }}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p class="money minus">-$\{{ expense() | formatNumber }}</p>
      </div>
    </div>
  `,
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

  constructor(private transactionService: TransactionService) {}
}
