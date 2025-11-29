import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/registeruser.dto';

@Injectable()
export class UserService {
    createUser(RegisterUserDto:RegisterUserDto) {
        //logic to create user
        return 'User created Successfully 201';
    }
}
