
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";


const  Tracker = () => {
    const [toggle, setToggle] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    const AddTransactions = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        setTransactions(transactionArray);
    };

    const removeTransaction = (id) => {
        const updatedTransactions = transactions
            .filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);
    };

    const calculateTransactions = () => {
        let exp = 0;
        let inc = 0;

        transactions.map((item) => {
            item.transType === "expense"
                ? (exp = exp + item.amount)
                : (inc = inc + item.amount);
        });

        setExpense(exp);
        setIncome(inc);
    };

    useEffect(() => {
        calculateTransactions();
    }, [transactions]);

    return (
        <div className="main">
            <h2 className="head">Expense Tracker</h2>
            <OverviewComponent
                toggle={toggle}
                setToggle={setToggle}
                expense={expense}
                income={income}
            />

            {toggle && (
                <AddTransaction
                    setToggle={setToggle}
                    AddTransactions={AddTransactions}
                />
            )}

            < div className="TransactionDetails">
                <div className="expense" isExpense>
                    Expense <span>{expense}</span>
                </div>

                <div className="budget">
                    Budget <span>{income}</span>
                </div>
            </div>

            <TransactionsContainer
                transactions={transactions}
                removeTransaction={removeTransaction}
            />
        </div>
    );
};

export default Tracker; 
