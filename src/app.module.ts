import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE_URL,
      retryAttempts: 3,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      cache: {
        type: 'database',
        duration: 3600000,
      },
    }),
    ClientModule,
    UserModule,
  ],
})
export class AppModule {}
