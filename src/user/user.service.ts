import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<IUser>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const saveUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(saveUser);
  }

  findAll(): Promise<IUser[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findBy({ id: id });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
