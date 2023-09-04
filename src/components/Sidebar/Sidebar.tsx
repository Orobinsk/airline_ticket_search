import React, {FC, useEffect, useState} from 'react';
import cls from './Sidebar.module.scss'
import {FilterAirlines, SortedFlights} from "../hooks/useFlights";
import {Flight} from "../../types/types";
import {FilterType} from "../../App";

interface SidebarProps{
    filter:FilterType,
    setFilter:React.Dispatch<React.SetStateAction<FilterType>>,
    allAirlines:string[],
    flights: Flight[]
}

const Sidebar:FC<SidebarProps> = (props: SidebarProps) => {
    const {filter, setFilter, allAirlines, flights} = props
    const [airlines, setAirlines] = useState<string[]>([])

    const onChangeFilterTransfers = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!filter.filterTransfer.includes(event.target.value)) {
            setFilter({...filter, filterTransfer: event.target.value})
        } else setFilter({...filter, filterTransfer: ''})
    }

    const onChangeFilterPriceBefore = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) === 0) {
            setFilter({...filter, filterPriceBefore: 1000000})
        } else setFilter({...filter, filterPriceBefore: Number(event.target.value)})
    }

    const onChangeFilterAirlines = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!airlines.includes(event.target.value)) {
            setAirlines([...airlines, event.target.value])
        } else {
            setAirlines(airlines.filter(item => item !== event.target.value))
        }
    }
    useEffect(() => {
        if (airlines.length !== 0) {
            setFilter({...filter, filterAirlines: airlines})
        } else setFilter({...filter, filterAirlines: allAirlines})
    }, [airlines])


    // const truncatText=(text:string,widthParent:number) =>{
    //
    //    for(let textWidth=text.length*16;textWidth>widthParent;)
    //
    // }
    return (
        <div className={cls.Sidebar}>
            <div className={cls.sort}>
                <p>Сортировать</p>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="lowerPrice"
                        defaultChecked={true}
                        onChange={() => setFilter({...filter, sort: "lowerPrice"})}
                    />
                    - по возростанию цены
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="higherPrice"
                        onChange={() => setFilter({...filter, sort: "higherPrice"})}
                    />
                    - по убыванию цены
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="time"
                        onChange={() => setFilter({...filter, sort: "duration"})}
                    />
                    - по времени в пути
                </label>
            </div>
            <div className={cls.filter}>
                <p>Фильтровать</p>
                <label>
                    <input
                        type="checkbox"
                        name="filterTransfer"
                        value="1 transfer"
                        onChange={onChangeFilterTransfers}
                        checked={filter.filterTransfer === '1 transfer'}
                    />
                    - 1 пересадка
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="filterTransfer"
                        value="non-stop"
                        onChange={onChangeFilterTransfers}
                        checked={filter.filterTransfer === 'non-stop'}
                    />
                    - без пересадок
                </label>
            </div>
            <div className={cls.price}>
                <p>Цена</p>
                <label>
                    От
                    <input
                        type="number"
                        name="filterPrice"
                        placeholder='0'
                        min="0"
                        onChange={e => setFilter({...filter, filterPriceFrom: Number(e.target.value)})}
                    />
                </label>
                <label>
                    До
                    <input
                        type="number"
                        name="filterPrice"
                        placeholder='1000000'
                        min='0'
                        onChange={onChangeFilterPriceBefore}
                    />
                </label>
            </div>
            <div className={cls.airlines}>
                <p>Авиакомпании</p>
                {allAirlines.map((airline: string) => {
                    // let filterAirline=FilterAirlines(flights,[airline])
                    // let price= SortedFlights(filterAirline,'lowerPrice')
                    // console.log(price[0].flight.price.total.amount)
                    return (
                        <label key={airline}>
                            <input
                                type="checkbox"
                                name="filterAirline"
                                value={airline}
                                onChange={onChangeFilterAirlines}
                            />
                            {/*- {airline} от {price} р.*/}
                            - {airline}
                        </label>
                    )
                })}
            </div>
        </div>
    );
};

export default Sidebar;
