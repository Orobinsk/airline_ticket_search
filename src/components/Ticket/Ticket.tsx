import React, {FC} from 'react';
import cls from './Ticket.module.scss'
import Segment from "../Segment/Segment";

// interface TicketProps{
//     price:number,
//     carrier:string,
//     legs: [],
// }

const Ticket= (props: any) => {
    const {
        price,
        carrier,
        legs,
    } = props

    return (
        <div className={cls.Ticket}>
            <div className={cls.header}>
                <div className={cls.icon}>icon</div>
                <div className={cls.price_wrap}>
                    <div className={cls.price}>{price}</div>
                    <div className={cls.price_text}>Стоимость для одного взрослого пассажира</div>
                </div>
            </div>
            <div className={cls.segmentsWrap}>
                <Segment
                    departureCity={legs[0].segments[0].departureCity.caption}
                    departureAirport={legs[0].segments[0].departureAirport}
                    arrivalCity={legs[0].segments[legs[0].segments.length - 1].arrivalCity?.caption}
                    arrivalAirport={legs[0].segments[legs[0].segments.length - 1].arrivalAirport}
                    departureDate={legs[0].segments[0].departureDate}
                    duration={legs[0].duration}
                    arrivalDate={legs[0].segments[legs[0].segments.length - 1].arrivalDate}
                    transfers={legs[0].segments.length - 1}
                    airline={legs[0].segments[0].airline.caption}
                />
                <div className={cls.segment_line}></div>
                <Segment
                    departureCity={legs[1].segments[0].departureCity?.caption}
                    departureAirport={legs[1].segments[0].departureAirport}
                    arrivalCity={legs[1].segments[legs[1].segments.length - 1].arrivalCity?.caption}
                    arrivalAirport={legs[1].segments[legs[1].segments.length - 1].arrivalAirport}
                    departureDate={legs[1].segments[0].departureDate}
                    duration={legs[1].duration}
                    arrivalDate={legs[1].segments[legs[1].segments.length - 1].arrivalDate}
                    transfers={legs[1].segments.length - 1}
                    airline={legs[1].segments[0].airline.caption}
                />
            </div>
            <button className={cls.btn}>ВЫБРАТЬ</button>
        </div>
    );
};

export default Ticket;
