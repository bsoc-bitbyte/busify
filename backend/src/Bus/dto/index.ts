import {IsInt, IsNotEmpty, IsString} from 'class-validator';

export class ScheduleDto {
  @IsString()
  @IsNotEmpty()
  busNumber: string;

  @IsString()
  @IsNotEmpty()
  from: string;
  to: string;
  checkpoints: string[];
  departureTime: string;
  ticketPrice: number;
  days: string[];
}
export class BusDto {
  @IsString()
  @IsNotEmpty({message: 'Bus number is required'})
  number: string;

  @IsInt()
  @IsNotEmpty()
  capacity: number;
  @IsString()
  @IsNotEmpty()
  contractorId: string;
  @IsString()
  @IsNotEmpty()
  conductorId: string;
  @IsString()
  @IsNotEmpty()
  busNumber: string;
}

export class ContractorDto {
  @IsString()
  @IsNotEmpty({message: 'Contractor name is required'})
  name: string;
  @IsString()
  @IsNotEmpty({message: 'Contractor email is required'})
  email: string;
  @IsString()
  @IsNotEmpty({message: 'Contractor phone is required'})
  phone: string;
  @IsString()
  @IsNotEmpty({message: 'Contractor address is required'})
  address: string;
}

export class ConductorDto {
  @IsString()
  @IsNotEmpty({message: 'name Field is required'})
  name: string;
  @IsString()
  @IsNotEmpty({message: 'phone Field is required'})
  phone: string;
}
