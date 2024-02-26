import React from "react";
import styled from "styled-components";

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
    const bal = income - expense;

    return (
        <div className="main1">
            <h2 className="balance">
                Balance <span>₹{bal}</span>
            </h2>
            <button className="btn" onClick={() => setToggle(!toggle)}>
                {toggle ? "Cancel" : "Add"}
            </button>
        </div>
    );
};

export default OverviewComponent; 
