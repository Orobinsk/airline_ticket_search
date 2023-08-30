import React, {useState} from 'react';
import tickets from '../data/flights.json'
import Ticket from "./Ticket/Ticket";

type TicketProps =
    | string
    | number
    | boolean
    | { [x: string]: TicketProps }
    | Array<TicketProps>;

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
    [key: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

const TicketList = () => {
    // @ts-ignore
    const [flights, setFlights] = useState(tickets.result.flights)
    console.log(flights[0])
    return (
        <div>
            {flights.map((flight: any) =>
                <Ticket price={flight.flight.price.total.amount} key={flight.flightToken}/>
            )}
        </div>
    );
};

export default TicketList;