import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registeruser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}
    async RegisterUser(userregisterDto:RegisterUserDto) {
        console.log(userregisterDto);

        const hashedPassword = await bcrypt.hash(userregisterDto.password, 10);

        //logic to register user
       return this.userService.createUser({...userregisterDto, password: hashedPassword});
        // return 'User registered Successfully';
    }
}
 