import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const register = async (payload: IUser) => {
    console.log(payload);
    const {email} = payload;
    const isUserExist = await User.isUserExit(email);
    console.log(isUserExist);
    
}

export const AuthService = {
    register
}