const SET_DRINKS = 'SET_DRINKS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState={
    drinks:[

        ],
    page:1
};

const drinksReducer=(state=initialState, action)=>{
    switch (action.type) {

        case SET_DRINKS:{
            return {...state, drinks: [...state.drinks, ...action.drinks]}
        }
        case  SET_CURRENT_PAGE:{
            return {...state,page:action.page}
        }

        default:
            return state;
    }
}

export const setDrinksAC=(drinks)=>({type:SET_DRINKS, drinks});
export const setPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

export default drinksReducer;
