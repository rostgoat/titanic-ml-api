/**
 * * Nest Modules
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

/**
 * Patient Entity
 */
@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('increment') patient_id: string
  @Column({ type: 'varchar' }) age: string
  @Column({ type: 'varchar' }) province: string
  @Column({ type: 'varchar' }) infection_case: string
  @Column({ type: 'varchar' }) patient_state: string
  @Column({ type: 'varchar' }) infection_type: string
  @Column({ type: 'varchar' }) gender: string
}
