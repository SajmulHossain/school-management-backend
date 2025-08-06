import { AppError } from "../../utils/AppError";
import { hashPassword } from "../../utils/encryptPassword";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const register = async (payload: IUser) => {
    const { email, phone } = payload;

    if(!email && !phone) {
        throw new AppError(400, 'You must provide email or phone');
    }

    const auth = (email || phone) as string;
    const isUserExist = await User.isUserExist(auth);

    
    if(isUserExist) {
        throw new AppError(400, `An account is already exist with ${auth}`);
    }

    payload.auth_info = [
        {
            provider: 'credential',
            providerID: auth,
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