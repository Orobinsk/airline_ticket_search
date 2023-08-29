import React from 'react';
import cls from './Ticket.module.scss'

const Ticket = () => {
    return (
        <div className={cls.Ticket}>
            <div className={cls.header}>
                <div className={cls.icon}>icon</div>
                <div className={cls.price_wrap}>
                    <div className={cls.price}>2000R</div>
                    <div className={cls.price_text}>Стоимость для одного взрослого пассажира</div>
                </div>
            </div>
            <div className={cls.segmentsWrap}>
                <div className={cls.segment}>
                    <div className={cls.segment_route}>
                        <div className={cls.segment_route_arrived}> Москва, ШЕРЕМЕТЬЕВО (SVO)</div>
                        <div>{'->'}</div>
                        <div className={cls.segment_route_destination}>Лондон, Лондон, Хитроу (LHR)</div>
                    </div>
                    <hr className={cls.route_line}/>
                    <div className={cls.segment_time}>
                        <div className={cls.origin}>
                            <div className={cls.time}>20:40</div>
                            <div className={cls.date}>18 avg</div>
                        </div>
                        <div className={cls.route}>clock 14h 45 min</div>
                        <div className={cls.destination}>
                            <div className={cls.date}>19 avg</div>
                            <div className={cls.time}>09:25</div>
                        </div>
                    </div>
                    <div className={cls.transfers_wrap}>
                        <div className={cls.transfers_line}></div>
                        <div className={cls.transfers}>1 transfer</div>
                        <div className={cls.transfers_line}></div>
                    </div>
                    <div className={cls.segment_carrier}>Polish airlines</div>
                </div>
                <div className={cls.segment_line}></div>
                <div className={cls.segment}>
                    <div className={cls.segment_route}>
                        <div className={cls.segment_route_arrived}> Москва, ШЕРЕМЕТЬЕВО (SVO)</div>
                        <div>{'->'}</div>
                        <div className={cls.segment_route_destination}>Лондон, Лондон, Хитроу (LHR)</div>
                    </div>
                    <hr className={cls.route_line}/>
                    <div className={cls.segment_time}>
                        <div className={cls.origin}>
                            <div className={cls.time}>20:40</div>
                            <div className={cls.date}>18 avg</div>
                        </div>
                        <div className={cls.route}>clock 14h 45 min</div>
                        <div className={cls.destination}>
                            <div className={cls.date}>19 avg</div>
                            <div className={cls.time}>09:25</div>
                        </div>
                    </div>
                    <div className={cls.transfers_wrap}>
                        <div className={cls.transfers_line}></div>
                        <div className={cls.transfers}>1 transfer</div>
                        <div className={cls.transfers_line}></div>
                    </div>
                    <div className={cls.segment_carrier}>Polish airlines</div>
                </div>
            </div>
            <button className={cls.btn}>ВЫБРАТЬ</button>
        </div>
    );
};

export default Ticket;
