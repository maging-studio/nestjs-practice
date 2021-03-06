import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto';
import { UserEntity } from 'src/entities/user.entity';
import { SignUpDto } from 'src/auth/dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    async create(@Body() createUserData: SignUpDto): Promise<UserDto> {
        return await this.userService.create(createUserData);
    }

    @Post('/verify/:token')
    async verifyEmail(@Param('token') token: string): Promise<void> {
        await this.userService.verify({ token });
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<UserEntity> {
        return this.userService.findOne(parseInt(id, 10));
    }

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }
}
