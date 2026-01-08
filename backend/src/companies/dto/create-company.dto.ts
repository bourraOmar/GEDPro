import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: 'Tech Solitions Inc.' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '123 Tech Lanu, Silicon Valley' })
  @IsString()
  @IsNotEmpty()
  address: string;
}
