import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UsersService } from '../../services/users/users.service';
import { ValidateCreateUserPipe } from '../../pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from '../../guard/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  public getUsers() {
    return this.userService.getUser();
  }

  @Get(':id')
  public getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  public createUser(@Body(ValidateCreateUserPipe) user: CreateUserDto) {
    console.log(user.age.toPrecision());
    return this.userService.addNewUser(user);
  }
}
