import { IsNotEmpty, IsString, MaxLength, IsIn, IsOptional, MinLength } from 'class-validator';

export class CreateArchiveDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(4)
  @MinLength(4)
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
