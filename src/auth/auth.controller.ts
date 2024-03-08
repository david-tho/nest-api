import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: { username: string; password: string }) {
    return await this.authService.login(data.username, data.password);
  }

  @Post('sign-up')
  async signUp(@Body() userDto: createUserDto) {
    return await this.authService.signUp(userDto);
  }
}
