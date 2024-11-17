import React, { useState } from "react";
import axios from "axios";
import ControlPanel from "./components/ControlPanel";
import TicketStatus from "./components/TicketStatus";

function App() {
    const [status, setStatus] = useState("");

    const startTicketing = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/tickets/start", {
                params: { maxTickets: 10 },
            });
            setStatus(response.data);
        } catch (error) {
            console.error("Error starting ticketing system:", error);
        }
    };

    return (
        <div>
            <h1>Real-Time Event Ticketing System</h1>
            <ControlPanel startTicketing={startTicketing} />
            <TicketStatus status={status} />
        </div>
    );
}

export default App;
