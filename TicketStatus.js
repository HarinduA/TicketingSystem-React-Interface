import React from "react";

function TicketStatus({ status }) {
    return <div>{status ? status : "Ticketing system not started."}</div>;
}

export default TicketStatus;
