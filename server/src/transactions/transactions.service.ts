import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async getTransactions(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }

  async addTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.transactionsRepository.create(createTransactionDto);
    return this.transactionsRepository.save(transaction);
  }

  async deleteTransaction(id: number): Promise<void> {
    const transaction = await this.transactionsRepository.findOneBy({ id });
    if (!transaction) {
      throw new NotFoundException('No transaction found');
    }
    await this.transactionsRepository.remove(transaction);
  }
}
