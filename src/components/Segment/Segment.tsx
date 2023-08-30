import React from 'react';
import cls from "./Segment.module.scss";

const Segment = (props: any) => {
    const {
        departureCity,
        departureAirport,
        arrivalCity,
        arrivalAirport,
        departureDate,
        duration,
        arrivalDate,
        transfers,
        airline,
    } = props
    function formattedDate(Dat:string){
        const match =  Dat.match(/^(\d{4})-(\d{2})-(\d{2})T\d{2}:\d{2}:\d{2}$/);
        const year = match![1];
        const month = match![2];
        const day = match![3];
        const months = [
            "янв.", "фев.", "мар.", "апр.", "мая", "июн.",
            "июл.", "авг.", "сен.", "окт.", "ноя.", "дек."
        ];
        const dateObj = new Date(Number(year), parseInt(month) - 1, Number(day));
        const dayOfWeek = dateObj.toLocaleString("ru-RU", { weekday: "short" });
        return `${day} ${months[parseInt(month) - 1]} ${dayOfWeek}`;
    }

    function convertMinutes(minutes:number) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}ч ${remainingMinutes}мин`;
    }



    return (
        <div className={cls.segment}>
            <div className={cls.segment_route}>
                <div
                    className={cls.segment_route_arrived}>{departureCity}, {departureAirport.caption} ({departureAirport.uid})
                </div>
                <i className="fa-solid fa-arrow-right-long"></i>
                <div className={cls.segment_route_destination}>{arrivalCity}, {arrivalAirport.caption} ({arrivalAirport.uid})</div>
            </div>
            <hr className={cls.route_line}/>
            <div className={cls.segment_time}>
                <div className={cls.origin}>
                    <div className={cls.time}>{departureDate.match(/T(\d{2}:\d{2})/)[1]}</div>
                    <div className={cls.date}>{formattedDate(departureDate)}</div>
                </div>
                <div className={cls.route}><i className="fa-regular fa-clock"></i>{convertMinutes(duration)}</div>
                <div className={cls.destination}>
                    <div className={cls.date}>{formattedDate(arrivalDate)}</div>
                    <div className={cls.time}>{arrivalDate.match(/T(\d{2}:\d{2})/)[1]}</div>
                </div>
            </div>
            <div className={cls.transfers_wrap}>
                <div className={cls.transfers_line}></div>
                <div className={cls.transfers}>{transfers===0?'без пересадок':`${transfers} пересадка`}</div>
                <div className={cls.transfers_line}></div>
            </div>
            <div className={cls.segment_carrier}>Рейс выполняет:{airline}</div>
        </div>

    );
};

export default Segment;
