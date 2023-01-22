import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/create-user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('ValidateCreateUserPipe');
    console.log(value);
    console.log(metadata);
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        'Invalid data type for property age. Expected number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseAgeToInt} is a number. Returning`);
    return { ...value, age: parseAgeToInt };
  }
}
