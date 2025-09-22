import { ActionTypes } from "../Constant/ActionTypes";

const BannerSlideReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BANNERS : return {...state, banners : payload};
        default : return state;
    }
} 
export default BannerSlideReducer 