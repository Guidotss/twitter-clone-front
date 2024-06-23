import { AuthResponse } from "@/interfaces";

export const authResponseMapper = (data: any): AuthResponse => {
    return {
        ok: data.Ok,
        message: data.Message,
        error: data.Error,
        token: data.Token,
        user: { 
            id: data.User.id,
            name: data.User.name,
            email: data.User.email,
            imageUrl: data.User.avatar,
        }
    };
}