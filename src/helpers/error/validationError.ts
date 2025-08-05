import { Error } from "mongoose";

export const handleValidationError = (error: Error.ValidationError) =>{
    const errors = Object.values(error.errors);
    return errors.map(error => {
        return {
            path: error.path,
            message: error.message
        }
    })
}