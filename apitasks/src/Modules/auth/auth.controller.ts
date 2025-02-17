import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService, LoginResponse } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto, @Request() req): LoginResponse {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<LoginResponse> {
    return this.authService.register(createUserDto);
  }
}
