import React from "react";

function ControlPanel({ startTicketing }) {
    return (
        <div>
            <button onClick={startTicketing}>Start Ticketing System</button>
        </div>
    );
}

export default ControlPanel;
