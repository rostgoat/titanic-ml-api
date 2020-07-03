/**
 * * Nest Modules
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export enum PatientGender {
  MALE = 'male',
  FEMALE = 'female',
}

/**
 * Patient Entity
 */
@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid') patient_id: string
  @Column({ type: 'varchar', nullable: false }) age_range: string
  @Column({ type: 'varchar', nullable: false }) province: string
  @Column({ type: 'varchar', nullable: false }) infection_case: string
  @Column({ type: 'varchar', nullable: false }) infection_type: string
  @Column({ type: 'enum', enum: PatientGender }) gender: PatientGender
}
