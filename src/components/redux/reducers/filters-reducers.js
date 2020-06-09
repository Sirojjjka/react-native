const SET_FILTERS = 'SET_FILTERS'
const SET_NULL_FILTERS = 'SET_NULL_FILTERS'

let initialState={
    drinks:[

    ]
};

const filtersReducer=(state=initialState, action)=>{
    switch (action.type) {

        case SET_FILTERS:{
            return {...state, drinks: [...state.drinks, ...action.drinks]}
        }
        case SET_NULL_FILTERS:{
            return {...state, drinks: [...state.drinks, ...action.payload]}
        }

        default:
            return state;
    }
}

export const setFiltersAC=(drinks)=>({type:SET_FILTERS, drinks})
export const setNullFiltersAC=(payload)=>({type:SET_FILTERS, payload})

export default filtersReducer;
