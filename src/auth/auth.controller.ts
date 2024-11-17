import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginRequestBody } from './module/LoginRequestBody';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, password }: LoginRequestBody) {
    return this.authservice.login(email, password);
  }
}
