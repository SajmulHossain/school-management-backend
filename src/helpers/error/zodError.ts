import { ZodError } from "zod";

export const handleZodError = (error: ZodError) => {
    const errorSources = error.issues.map(err => {
        return {
          path: err.path.length ? err.path.join(" inside ") : err.path[0],
          message: err.message,
        };
    })
    
    return errorSources;
}