import { Module } from '@nestjs/common'
import { PatientService } from './patient/patient.service'
import { PatientController } from './patient/patient.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [PatientController],
  providers: [PatientService],
})
export class AppModule {}
