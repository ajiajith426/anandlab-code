import { ActionTypes } from "../Constant/ActionTypes"

const setBanners = (banners) => {
    return {
        type: ActionTypes.SET_BANNERS,
        payload: banners
    }
}
export default setBanners