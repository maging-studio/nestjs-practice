import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from 'src/users/users.module';
import { PasswordHasherModule } from 'src/password-hasher/password-hasher.module';
import { TokensModule } from 'src/tokens/tokens.module';
import { PredefinedMailerModule } from 'src/predefined/modules/mailer.module';
import { PredefinedConfigModule } from 'src/predefined/modules/config.module';
import { ConfirmationTokenEntity } from 'src/entities/confirmation-token.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        UsersModule,
        PasswordHasherModule,
        PassportModule,
        TokensModule,
        PredefinedMailerModule,
        PredefinedConfigModule,
        TypeOrmModule.forFeature([ConfirmationTokenEntity]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
