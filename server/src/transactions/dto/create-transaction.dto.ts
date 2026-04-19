import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty({ message: 'Please add some text' })
  @IsString()
  text: string;

  @IsNotEmpty({ message: 'Please add a positive or negative number' })
  @IsNumber()
  amount: number;
}
