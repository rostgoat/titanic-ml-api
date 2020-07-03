import { Injectable } from '@nestjs/common'
import { Patient } from './patient.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  /**
   * Return all patients
   */
  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find({
      select: ["age", "province", "infection_case", "infection_type", "gender", "patient_state"]
    })
  }
}
