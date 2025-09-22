import { ActionTypes } from "../Constant/ActionTypes"

export const  setLoading = (status) => {
    return {
        type    : ActionTypes.START_LOADING,
        payload : status
    }
}