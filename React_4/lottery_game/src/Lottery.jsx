import {useState} from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=10}){    //here 3 and 10 are default values agar n aaya hi nahi to default values kaam aati hai.
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket)===winningSum;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return (
    <div>
         <h1>Lottery Game!</h1>
         <Ticket ticket={ticket}/>
         <br></br><br></br>
         <button onClick = {buyTicket}>Buy New Ticket</button>
         <br></br><br></br>
         <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
    );
}