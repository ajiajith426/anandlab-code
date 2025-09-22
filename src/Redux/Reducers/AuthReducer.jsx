import { ActionTypes } from "../Constant/ActionTypes";

export const AuthReducer = (state = {user:[]}, {type, payload}) => {
    switch (type) {
        case ActionTypes.AUTH_USER : return {...state, user : payload};
        default : return state;
    }
} 