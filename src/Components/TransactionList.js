import React, { useContext } from 'react';
import { GlobalContext } from "../Context/global";
import Transaction from "./Transaction";

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log("Rendering TransactionList with transactions:", transactions);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
};

export default TransactionList;

