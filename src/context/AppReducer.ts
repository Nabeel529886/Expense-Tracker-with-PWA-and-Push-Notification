import { transactionsProps, ReducerProps, ActionType } from './GlobalState'

export default (state: {transactions: transactionsProps[]}, action: ReducerProps) => {
    switch(action.type){
        case ActionType.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case ActionType.ADD_INCOME:
        case ActionType.ADD_EXPENSE:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}