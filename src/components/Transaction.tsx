import React, { useContext } from 'react'
import {ContextProps, GlobalContext, transactionsProps} from '../context/GlobalState'


export const Transaction = ({ transaction }: {transaction: transactionsProps}) => {
    const {deleteTransaction} = useContext<ContextProps>(GlobalContext)

    return (
        <div>
            <li className={transaction.amount > 0? "item-plus": "item-minus"}>
            {transaction.text}<small>{transaction.amount>0? "Income added on ": "Expense added on "}{transaction.timeStamp}</small>
                    <span>${transaction.amount}</span>
                <button onClick={() => deleteTransaction!(transaction.id)}>X</button>
            </li>
        </div>
    )
}