import { Controller, Get } from '@nestjs/common';
import { PassengerService } from './passenger.service';

@Controller('passengers')
export class PassengerController {
    constructor(private passengerService: PassengerService) {}

    /**
   * Get all passengers
   */
  @Get('find')
  async find() {
    try {
      return await this.passengerService.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }
}
