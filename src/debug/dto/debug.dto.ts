import { IsString, IsNotEmpty } from 'class-validator';

export class DebugDto {
  @IsString()
  @IsNotEmpty()
  error: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
