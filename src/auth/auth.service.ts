import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';


@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(user: User): Promise<String | User>  {
        console.log(`user: ${user}  user.username: ${user.username} user.password: ${user.password}`);
        const checkUser = await this.userModel.findOne({ email: user.email });
        if (checkUser) {
            return 'User already exists';
        } else {
        const newUser = new this.userModel(user);
        return await newUser.save();
        }
    }

    async findOne(user: User): Promise<String | User> {
        console.log(`user: ${JSON.stringify(user)}  user.username: ${user.username} user.password: ${user.password}`);
        const get_user = await this.userModel.findOne({ username: user.username });
        if (get_user) {
            if (get_user.password == user.password) {
                return get_user;
            } else {
                return 'Password is incorrect';
            }
        } else {
            return 'User not found';
        }
    }

    async updateUser(id: string, user: User): Promise<User | String> {
        const update_user = await this.userModel.findById({ _id: id });
        if (update_user) {
            const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true });
            return updatedUser;
        } else {
            return 'User not found';
        }
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async getUserProfile(id: string): Promise<User | String> {
        const get_user = await this.userModel.findById({ _id: id });
        if (get_user) {
            return get_user;
        } else {
            return 'User not found';
        }
    }

}
