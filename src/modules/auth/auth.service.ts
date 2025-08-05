import { AppError } from "../../utils/AppError";
import { hashPassword } from "../../utils/encryptPassword";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const register = async (payload: IUser) => {
    const { email, phone } = payload;
    const isUserExist = await User.isUserExist({ $or: [{ email }, { phone }] });
    
    if(isUserExist) {
        throw new AppError(400, 'User alredy exist')
    }

    payload.password = await hashPassword(payload.password as string);

    const user = (await User.create(payload)).toObject();

    delete user.password;

    return user;
}

export const AuthService = {
    register
}