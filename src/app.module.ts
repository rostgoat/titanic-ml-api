import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PatientModule],
})
export class AppModule {}
