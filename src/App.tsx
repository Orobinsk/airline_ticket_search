import React, {useState} from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import cls from './App.module.scss'
import TicketList from "./components/TicketList";
import tickets from "./data/flights.json";
import {useAirlines, useFlight} from "./components/hooks/useFlights";
import {Flight} from "./types/types";

interface FilterType {
    sort: string,
    filterTransfer: string,
    filterPriceFrom: number,
    filterPriceBefore: number,
    filterAirlines: string[]
}

function App() {

    // @ts-ignore
    const [flights, setFlights] = useState<Flight[]>(tickets.result.flights)
    const airlines: string[] = useAirlines(flights)

    const [filter, setFilter] = useState<FilterType>({
        sort: 'lowerPrice',
        filterTransfer: '',
        filterPriceFrom: 0,
        filterPriceBefore: 1000000,
        filterAirlines: airlines
    })


    const sortedFlights = useFlight(
        flights,
        filter.sort,
        filter.filterTransfer,
        filter.filterPriceFrom,
        filter.filterPriceBefore,
        filter.filterAirlines
    )

    return (
        <div className={cls.app}>
            <div className={cls.wrapper}>
                <Sidebar
                    filter={filter}
                    setFilter={setFilter}
                    allAirlines={airlines}
                    flights={sortedFlights}
                />
                <div className={cls.main}>
                    <div className={cls.tickets}>
                        <TicketList flights={sortedFlights}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
