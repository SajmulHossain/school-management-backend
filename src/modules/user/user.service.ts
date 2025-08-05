import { hashPassword } from "../../utils/encryptPassword";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const register = async(payload: Partial<IUser>) => {
    

}

export const UserService = {
    register
}