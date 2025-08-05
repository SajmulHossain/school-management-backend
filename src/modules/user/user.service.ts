import { hashPassword } from "../../utils/encryptPassword";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const register = async(payload: Partial<IUser>) => {
    // const { passoword,...rest } = payload;
    // await User.create(payload);
    hashPassword('oi');

}

export const UserService = {
    register
}