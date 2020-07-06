import { IsNotEmpty } from 'class-validator'

/**
 * General Passenger data transfer object
 */
export class PassengerDTO {
  passenger_id: number
  @IsNotEmpty()
  age: number
  @IsNotEmpty()
  fare: number
  @IsNotEmpty()
  passenger_class: number
  @IsNotEmpty()
  female: number
  @IsNotEmpty()
  male: number
}
