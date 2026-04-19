import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { BalanceComponent } from './components/balance/balance';
import { IncomeExpensesComponent } from './components/income-expenses/income-expenses';
import { TransactionListComponent } from './components/transaction-list/transaction-list';
import { AddTransactionComponent } from './components/add-transaction/add-transaction';

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
export class AppComponent {}
