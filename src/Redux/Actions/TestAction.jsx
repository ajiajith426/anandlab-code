import { ActionTypes } from "../Constant/ActionTypes"

export const  setTopBookedTest = (tests) => {
    return {
        type    : ActionTypes.SET_TOP_BOOKED_TESTS,
        payload : tests
    }
}

export const  setTestCartList = (cartTest) => {
    return {
        type    : ActionTypes.SET_TEST_CART_LIST,
        payload : cartTest
    }
}

export const  setTestDetails = (testDetails) => {
    return {
        type    : ActionTypes.SET_TEST_DETAILS,
        payload : testDetails
    }
}

export const  setAllTestDetails = (test) => {
    return {
        type    : ActionTypes.SET_ALL_TEST_DETAILS,
        payload : test
    }
}

export const  removeTestDetails = (test) => {
    return {
        type    : ActionTypes.REMOVE_TEST_DETAILS,
        payload : test
    }
}

export const addToCart = (addTest) => {
    return {
        type    : ActionTypes.ADD_TO_CART,
        payload : addTest
    }
}
export const removeFromCart = (removeTest) => {
    return {
        type    : ActionTypes.REMOVE_FROM_CART,
        payload : removeTest
    }
}

export const setAuthUser = (data) => {
    return {
        type    : ActionTypes.AUTH_USER,
        payload : data
    }
}

export const setTestLocation = (data) => {
    return {
        type    : ActionTypes.SET_TEST_LOCATION,
        payload : data
    }
}

export const setTestFilters = (filters) => {
    return {
        type    : ActionTypes.TEST_FILTERS,
        payload : filters
    }
}

export const setPackageFilters = (filters) => {
    return {
        type    : ActionTypes.PACKAGE_FILTERS,
        payload : filters
    }
}


export const setOrgans = (data) => {
    return {
        type    : ActionTypes.ORGANS_LIST,
        payload : data
    }
} 

export const setConditions = (data) => {
    return {
        type    : ActionTypes.CONDITIONS_LIST,
        payload : data
    }
} 