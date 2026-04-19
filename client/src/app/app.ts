import { Component } from '@angular/core';
import {
  HeaderComponent,
  BalanceComponent,
  IncomeExpensesComponent,
  TransactionListComponent,
  AddTransactionComponent,
} from './features/transactions/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BalanceComponent,
    IncomeExpensesComponent,
    TransactionListComponent,
    AddTransactionComponent,
  ],
  templateUrl: './app.html',
})
export class AppComponent { }
