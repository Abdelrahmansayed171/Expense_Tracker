import React , {createContext, useContext, useReducer} from 'react'

const intialState = {
    transactions: [
        {id:1, text:'Koshari', amount:-30},
        {id:2, text:'Salary', amount:1050},
        {id:3, text:'Iphone 15 Pro Max', amount: -999}
    ]
}

// Create Context Object
export const GlobalContext = createContext()


function reducer(state, action){
    switch(action.type){
        default:
            return state
    }

}


export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialState)
    

  
    return (
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}
