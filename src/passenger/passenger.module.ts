import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './passenger.entity';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  controllers: [PassengerController],
  providers: [PassengerService],
  exports: [PassengerService],
})
export class PassengerModule {}
