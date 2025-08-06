/* eslint-disable @typescript-eslint/no-explicit-any */

export const handleDuplicateError = (error: any) => {
    const field = Object.keys(error.keyValue)[0];
    const value = error.keyValue[field];

    return {
        message: `${field} "${value}" is already exist`,
        path: field
    }
}