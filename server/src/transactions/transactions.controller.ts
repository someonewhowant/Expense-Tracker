import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('api/v1/transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async getTransactions() {
    const transactions = await this.transactionsService.getTransactions();
    return {
      success: true,
      count: transactions.length,
      data: transactions,
    };
  }

  @Post()
  @HttpCode(201)
  async addTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    const transaction = await this.transactionsService.addTransaction(
      createTransactionDto,
    );
    return {
      success: true,
      data: transaction,
    };
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string) {
    await this.transactionsService.deleteTransaction(+id);
    return {
      success: true,
      data: {},
    };
  }
}
