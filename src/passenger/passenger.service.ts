import { Injectable } from '@nestjs/common'
import { Passenger } from './passenger.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>,
  ) {}

  /**
   * Return all passengers
   */
  async findAll(): Promise<Passenger[]> {
    return await this.passengerRepository.find({
      select: ["passenger_class", "survived", "age", "fare", "female", "male"]
    })
  }
}
