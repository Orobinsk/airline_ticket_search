import React, {FC, useState} from 'react';
import Ticket from "./Ticket/Ticket";
import cls from "../App.module.scss";
import {Flight} from "../types/types";

interface TicketListProps {
    flights: Flight[],
}

const TicketList: FC<TicketListProps> = ({flights}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const currentFlights = flights.slice(1, indexOfLastItem);


    const handlePageChange = () => {
        setCurrentPage(prev => prev + 1);
    };

    return (
        <div>
            {currentFlights.map((flight) =>
                <Ticket
                    price={flight.flight.price.total.amount}
                    key={flight.flightToken}
                    legs={flight.flight.legs}
                />
            )}
            {flights.length === 0 ?
                <p className={cls.error}>Билеты не найдены</p>
                :
                <button
                    className={cls.btn}
                    onClick={handlePageChange}
                >
                    Показать еще
                </button>

            }

        </div>
    );
};

export default TicketList;
