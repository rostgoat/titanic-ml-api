import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassengerModule } from './passenger/passenger.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PassengerModule],
})
export class AppModule {}
