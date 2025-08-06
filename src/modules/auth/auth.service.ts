import { AppError } from "../../utils/AppError";
import { hashPassword } from "../../utils/encryptPassword";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const register = async (payload: IUser) => {
    const { email, phone } = payload;

    if(!email && !phone) {
        throw new AppError(400, 'You must provide email or phone');
    }
    
    const isUserExist = await User.isUserExist({ $or: [{ email }, { phone }] });
    
    if(isUserExist) {
        throw new AppError(400, 'User alredy exist')
    }

    payload.auth_info = [
        {
            provider: 'credential',
            providerID: (email || phone) as string,
        }
    ]

    payload.password = await hashPassword(payload.password as string);

    const user = (await User.create(payload)).toObject();
    delete user.password;

    return user;
}

export const AuthService = {
    register
}