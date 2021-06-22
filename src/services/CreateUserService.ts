import { UsersRepository } from "../repositories/UsersRepository"


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = new UsersRepository();
    const userAlreadyExistes = await usersRepository.findOne({ email });

    if(userAlreadyExistes) {
      throw new Error("User already exists");
    }
  }
}

export { CreateUserService }