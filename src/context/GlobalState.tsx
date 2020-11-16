import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


export enum ActionType {
    DELETE_TRANSACTION = "DELETE_TRANSACTION",
    ADD_INCOME = "ADD_INCOME",
    ADD_EXPENSE = "ADD_EXPENSE"
}

export interface ReducerProps {
    type: ActionType,
    payload: any
    
}

export type ContextProps = {
    transactions: transactionsProps[],
    deleteTransaction?: (id: number) => void
    addIncome?: (transaction: transactionsProps) => void, 
    addExpense?: (transaction: transactionsProps) => void
}

export type transactionsProps = {
    id: number, 
    amount: number,
    text: string,
    timeStamp: string
    }

const initialState: {transactions: transactionsProps[]} = {
    transactions: []
}

export const GlobalContext = createContext<ContextProps>(initialState)

export const GlobalProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<{transactions: transactionsProps[]}, ReducerProps>>(AppReducer, initialState)

    function deleteTransaction(id: number){
        dispatch({
            type: ActionType.DELETE_TRANSACTION,
            payload: id
        })
    }

    function addIncome(transaction: transactionsProps){
        dispatch({
            type: ActionType.ADD_INCOME,
            payload: transaction
        })
    }

    function addExpense(transaction: transactionsProps){
        dispatch({
            type: ActionType.ADD_EXPENSE,
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addIncome,
            addExpense,
        }}>
            { children }
        </GlobalContext.Provider>

    )
}
