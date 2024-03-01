
import React, { useState } from "react";
import styled from "styled-components";

const AddTransaction = ({ setToggle, AddTransactions }) => {
    const [amount, setAmount] = useState("");
    const [details, setDetails] = useState("");
    const [transType, setTransType] = useState("expense");
    const [amountError, setAmountError] = useState("");
    const [detailsError, setDetailsError] = useState("");

    const handleAmountChange = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input)) {
            setAmount(input);
            setAmountError("");
        } else {
            setAmountError("Amount should contain only numeric characters");
        }
    };

    const handleDetailsChange = (e) => {
        const input = e.target.value;
        if (/^[A-Za-z\s]*$/.test(input)) {
            setDetails(input);
            setDetailsError("");
        } else {
            setDetailsError("Details should contain only alphabetic characters");
        }
    };

    const AddTransactionData = () => {
        if (!details.trim()) {
            setDetailsError("Fields cannot be empty");
            return;
        } else {
            setDetailsError("");
        }

        if (!/^\d+$/.test(amount)) {
            setAmountError("Amount should contain only numeric characters");
            return;
        } else {
            setAmountError("");
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
                onChange={handleAmountChange}
                input
            />
            {amountError && <span className="error">{amountError}</span>}

            <input
                className="inp"
                type={"text"}
                placeholder="Enter Details"
                value={details}
                onChange={handleDetailsChange}
                input
            />
            {detailsError && <span className="error">{detailsError}</span>}

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
