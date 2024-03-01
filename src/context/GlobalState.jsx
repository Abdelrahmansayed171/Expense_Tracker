import React , {createContext, useContext, useReducer} from 'react'
import Reducer from './Reducer'




const intialState = {
    transactions: []
}

// Create Context Object
export const GlobalContext = createContext()

export const TYPES = {
    DELETE_ITEM: 'DELETE_ITEM',
    ADD_ITEM: 'ADD_ITEM'
}



export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, intialState)
    
    function addItem(transaction){
        dispatch({
            type: TYPES.ADD_ITEM,
            payload: transaction
        })
    }

    function deleteItem(id){
        dispatch({
            type: TYPES.DELETE_ITEM,
            payload: id
        })
    }

  
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addItem,
            deleteItem
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

