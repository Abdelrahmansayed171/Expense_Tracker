import { TYPES } from "./GlobalState"

export default (state, action) =>{
    
        switch(action.type){
            case TYPES.ADD_ITEM:
                return {
                    ...state,
                    transactions: [...state.transactions, action.payload]
                }
            
            case TYPES.DELETE_ITEM:
                return {
                    ...state,
                    transactions: state.transactions.filter( (transaction) => transaction.id !== action.payload )
                }
    
            default:
                return state
        }
    
    
}