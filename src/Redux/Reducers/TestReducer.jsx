import  toast  from "react-hot-toast";
import { setTestCartList } from "../Actions/TestAction";
import { ActionTypes } from "../Constant/ActionTypes";
 

export const TestBookedReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TOP_BOOKED_TESTS : return {...state, tests : payload};
        default : return state;
    }
}

export const TestCartReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TEST_CART_LIST : return {...state, cartTest : payload};
        default : return state;
    }
}

export const TestListReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_ALL_TEST_DETAILS : return {...state, testList : payload};
        default : return state;
    }
}

export const TestDetailReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TEST_DETAILS : return {...state, TestDetails : payload};
        case ActionTypes.REMOVE_TEST_DETAILS : return {};
        default : return state;
    }
}

export const addToCardReducer = (state = [] ,{type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART: 
            if(localStorage.getItem('CartTestList') == undefined || localStorage.getItem('CartTestList') == null) {
               localStorage.setItem('CartTestList', JSON.stringify([]));
            }
            if(localStorage.getItem('CartTestList') != undefined || localStorage.getItem('CartTestList') != null) {
                let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
                localStorage.setItem('CartTestList', JSON.stringify([...currentCart,payload]));
            }
            toast.success('Test Added Successfully!');
            
            setTestCartList(JSON.parse(localStorage.getItem('CartTestList')))
            return true
            // break; 
        default: return state;
    }
}

export const removeFromCardReducer = (state = [] ,{type, payload}) => {
    switch (type) {
        case ActionTypes.REMOVE_FROM_CART: 
            let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
            function isExists(CurrentTest) {
                return CurrentTest.TestId === payload.TestId;
            }
            if(currentCart !== null) {
                var Result = currentCart.find(isExists)
                var index  = currentCart.indexOf(Result)
                currentCart.splice(index, 1)
                localStorage.setItem('CartTestList', JSON.stringify(currentCart));
                return currentCart
            } 
            if(currentCart.length === 0) {
                localStorage.removeItem('CartTestList')
            }
            return true
        default: return state;
    }
}
export const setTestLocation = (state = {TestLocation:'bangalore'}, {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TEST_LOCATION : return {...state, TestLocation : payload};
        default : return state;
    }
}
const filtersState = {
    filters : {
        ApplicableGender: null,
        TestName        : null,
        orderBy         : 'ASC',
        HealthCondition : null,
        OrganName       : null,
        Tack            : 8,
        TestLocation    : 'bangalore'
    }
}
export const setTestFilters = (state = filtersState, {type, payload}) => { 
    switch (type) {
        case ActionTypes.TEST_FILTERS : return {...state, filters : payload};
        default : return state;
    }
}

export const setPackageFilters = (state = filtersState, {type, payload}) => { 
    switch (type) {
        case ActionTypes.PACKAGE_FILTERS : return {...state, filters : payload};
        default : return state;
    }
}

export const setOrgans = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.ORGANS_LIST : return {...state, data : payload};
        default : return state;
    }
}

export const setConditions = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.CONDITIONS_LIST : return {...state, data : payload};
        default : return state;
    }
}