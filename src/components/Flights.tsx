import React, {useEffect, useState} from 'react';
import TicketList from "./TicketList";
import tickets from "../data/flights.json";
import {useFlight, UseSortedFlights} from "./hooks/useFlights";

const Flights = () => {
    // @ts-ignore
    const date = tickets.result.flights
    const [flights, setFlights] = useState()


    const sortedFlights=useFlight(date,"lowerPrice",'')

    return (
        <TicketList flights={sortedFlights}/>
    );
};

export default Flights;
