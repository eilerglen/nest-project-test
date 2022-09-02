import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  
  }
  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 201, type: User})
  @Post()
  create(@Body() userDto: CreateUserDTO) {
    return this.userService.createUser(userDto)
  }
  @ApiOperation({summary: 'get all users'})
  @ApiResponse({status: 200, type:[User]})
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }
}
