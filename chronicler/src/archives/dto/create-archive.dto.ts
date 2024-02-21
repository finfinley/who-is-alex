import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateArchiveDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty({ message: 'Name is required.' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['luna', 'dash'], {
    message: "Pet must be either be 'luna' or 'dash' ",
  })
  readonly pet: 'luna' | 'dash';

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly email?: string;
}
