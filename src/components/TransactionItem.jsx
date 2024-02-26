
import React from "react";
import styled from "styled-components";

const TransactionItem = ({ transaction, removeTransaction }) => {
    return (
        <div className="main3" isExpense={transaction?.transType === "expense"}>
            <span>{transaction.details}</span>
            <span>₹{transaction.amount}</span>
            <button className="rmvbtn" onClick={() => removeTransaction(transaction.id)}>
                Remove
            </button>
        </div>
    );
};

export default TransactionItem; 
