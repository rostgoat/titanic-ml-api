import { IsNotEmpty } from 'class-validator'

/**
 * General Patient data transfer object
 */
export class PatientDTO {
  patient_id: string
  @IsNotEmpty()
  age_range: string
  @IsNotEmpty()
  province: string
  @IsNotEmpty()
  infection_case: string
  @IsNotEmpty()
  infection_type: string
  @IsNotEmpty()
  gender: string
}
