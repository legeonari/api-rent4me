//Modules
//Dependencies
import { Module } from '@nestjs/common';

//Modules
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

//Guard
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

//Services
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret:
        'zZe2ifpQCuZvnJqs5P+aH3WpWV22B4SP+k1PnBlTUlpEeiiJFp5eocfT88pnGZBfMbdp6hnMQRJUs6Q$',
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
