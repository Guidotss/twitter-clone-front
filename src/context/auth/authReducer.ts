import { AuthState } from '.'; 


type AuthActionType = 
    | { type: "[AUTH] - Start_login_google",  payload: null }



export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
    switch(action.type){ 
        case '[AUTH] - Start_login_google': 
            return { 
                ...state
            }
        default: 
            return state;
    }
}; 