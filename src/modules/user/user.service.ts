import { IUser } from "./user.interface";
import { User } from "./user.model";

const register = async(payload: Partial<IUser>) => {
    // const { passoword,...rest } = payload;
    await User.create(payload);

}

export const UserService = {
    register
}