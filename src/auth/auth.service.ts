//Dependencies
import * as bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';

//Services
import { UsersService } from 'src/users/users.service';
// import { UserAccessService } from 'src/user_access/user_access.service';

//Dtos
import { LoginUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UsersService,
    // private UserAccessService: UserAccessService,
    private jwtService: JwtService,
  ) {}

  async login(userParams: LoginUserDto): Promise<any> {
    const user = await this.UserService.auth(userParams);

    if (user) {
      if (await bcrypt.compareSync(userParams.password, user.password)) {
        const jwt = sign(
          {
            user: user.id,
            role: user.userLevelId,
          },
          process.env.JWT_SECRET,
        );

        return {
          user: {
            id: user.id,
            name: user.name,
            thumb: user.thumb,
          },
          role: user.userLevelId,
          access_token: jwt,
        };
      }
    } else {
      throw new NotFoundException('Invalid credentials');
    }
  }

  async validateUser(user: any): Promise<any> {
    // Aqui você pode gerar um token JWT com base nas informações do usuário.
    // Isso permitirá que o usuário faça chamadas autenticadas para rotas protegidas.
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
