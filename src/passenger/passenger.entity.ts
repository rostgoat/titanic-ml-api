/**
 * * Nest Modules
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

/**
 * Passenger Entity
 */
@Entity('passengers')
export class Passenger {
  @PrimaryGeneratedColumn('increment') passenger_id: number
  @Column({ type: 'smallint' }) passenger_class: number
  @Column({ type: 'float' }) age: number
  @Column({ type: 'float' }) fare: number
  @Column({ type: 'smallint' }) female: number
  @Column({ type: 'smallint' }) male: number
}
