//Dependencies
import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';

//Services
import { AuthService } from './auth/auth.service';

//Swegger
import { ApiTags } from '@nestjs/swagger';

//Auth
// import { LocalAuthGuard } from './auth/local-auth.guard';

//Dtos
import { LoginUserDto } from './auth/dto/auth.dto';

//Config Swegger
@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
