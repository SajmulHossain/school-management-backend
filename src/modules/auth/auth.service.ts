import { AppError } from "../../utils/AppError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const register = async (payload: IUser) => {
    const { email, phone } = payload;
    const isUserExist = await User.isUserExist({ $or: [{ email }, { phone }] });
    
    if(isUserExist) {
        throw new AppError(400, 'User alredy exist')
    }
}

export const AuthService = {
    register
}