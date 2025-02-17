import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/schemas/user.schema';
import { CreateUserDto } from '../users/dto/create-user.dto';

export interface LoginResponse {
  access_token: string;
  name: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password && (await bcrypt.compare(pass, user.password))) {
      const { ...result } = user;
      return result as Omit<User, 'password'>; // solo devuelves el resto de las propiedades
    }
    return null;
  }
  login(user: User): LoginResponse {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      name: user.name || '',
    };
  }

  async register(createUserDto: CreateUserDto): Promise<LoginResponse> {
    // Hashea la contraseña
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Utiliza el método create de UsersService para crear el usuario
    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    // Devuelve el login response, ajusta si es necesario para tu lógica
    await newUser.save();
    return this.login(newUser);
  }
}
