import React, {useState} from 'react';
import Ticket from "./Ticket/Ticket";
import cls from "../App.module.scss";


const TicketList = ({flights}:any) => {

    //paginations
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFlights = flights.slice(1, indexOfLastItem);
    //
    // const totalPages = Math.ceil(flights.length / itemsPerPage);

    const handlePageChange = () => {
        setCurrentPage(prev => prev + 1);
    };

    return (
        <div>
            {currentFlights.map((flight: any) =>
                <Ticket
                    price={flight.flight.price.total.amount}
                    key={flight.flightToken}
                    legs={flight.flight.legs}
                    carrier={flight.flight.carrier}
                />
            )}
            <button
                className={cls.btn}
                onClick={handlePageChange}
            >
                Показать еще
            </button>
        </div>
    );
};

export default TicketList;
