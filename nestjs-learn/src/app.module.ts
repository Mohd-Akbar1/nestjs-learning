import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import mongoose, { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';

const ConfigurableModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigurableModule,
    MongooseModule.forRoot(process.env.MONGODB_URI as string),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
