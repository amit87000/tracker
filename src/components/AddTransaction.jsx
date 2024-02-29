
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const AddTransaction = ({ setToggle, AddTransactions }) => {
    const [amount, setAmount] = useState("");
    const [details, setDetails] = useState("");
    const [transType, setTransType] = useState("expense");

    const AddTransactionData = () => {
        if (!details.trim()) {
            alert("Details cannot be empty");
        }

        if (!/^\d+$/.test(amount)) {
            alert("Amount should contain only numeric characters");
            return;
        }

        AddTransactions({
            amount: Number(amount),
            details,
            transType,
            id: Date.now(),
        });
        setToggle();
    };

    return (
        <div className="main2">
            <input
                className="inp"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => {
                    const input = e.target.value;
                    if (/^\d*$/.test(input)) {
                        setAmount(input);
                    }
                }}
                input
            />

            <input
                className="inp"
                type={"text"}
                placeholder="Enter Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                input
            />

            <div className="radiob">
                <div className="rdio">
                    <input
                        type="radio"
                        id="expense"
                        name="type"
                        value={"expense"}
                        checked={transType === "expense"}
                        onChange={(e) => setTransType(e.target.value)}
                    />
                    <label className="lbl" htmlFor="expense">
                        Expense
                    </label>
                </div>

                <div className="rdio">
                    <input
                        type="radio"
                        id="income"
                        name="type"
                        value={"income"}
                        checked={transType === "income"}
                        onChange={(e) => setTransType(e.target.value)}
                    />
                    <label className="lbl" htmlFor="income">
                        Budget
                    </label>
                </div>
            </div>

            <button className="btn1" onClick={AddTransactionData}>
                Add Transaction
            </button>
        </div>
    );
};

export default AddTransaction;
