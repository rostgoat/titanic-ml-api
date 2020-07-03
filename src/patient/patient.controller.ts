import { Controller, Get } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
    constructor(private patientService: PatientService) {}

    /**
   * Get all patients
   */
  @Get('find')
  async find() {
    try {
      return await this.patientService.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }
}
