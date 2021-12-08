import React, { useState } from "react";

const FunctionCounter = () => {
    const [state, setstate] = useState(0);
    function handleIncrease() {
        setstate((prev) => prev + 1);
    }
    function handleDecrease() {
        setstate((prev) => prev - 1);
    }
    return (
        <div>
            <h1 style={{ fontSize: "60px" }}>{state}</h1>
            <button
                onClick={handleIncrease}
                style={{ padding: "10px", marginRight: "5px" }}
            >
                increase
            </button>
            <button onClick={handleDecrease} style={{ padding: "10px" }}>
                decrease
            </button>
        </div>
    );
};

export default FunctionCounter;
