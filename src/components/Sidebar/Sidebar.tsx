import React from 'react';
import cls from './Sidebar.module.scss'

const Sidebar = (props:any) => {
    const{filter,setFilter}=props

    const onChangeFilterTransfers = (event:any) => {
        if(!filter.filterTransfer.includes(event.target.value)){
            setFilter({...filter,filterTransfer:event.target.value})
        }
        else  setFilter({...filter,filterTransfer:''})
    }
    const onChangeFilterPriceBefore = (event:any) => {
        if(Number(event.target.value)===0){
            setFilter({...filter,filterPriceBefore:1000000})
        }
        else  setFilter({...filter,filterPriceBefore:Number(event.target.value)})
    }

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
                        onChange={()=>setFilter({...filter, sort:"lowerPrice"})}
                    />
                    - по возростанию цены
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="higherPrice"
                        onChange={()=>setFilter({...filter, sort:"higherPrice"})}
                    />
                    - по убыванию цены
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="time"
                        onChange={()=>setFilter({...filter, sort:"duration"})}
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
                        onChange={e=> setFilter({...filter, filterPriceFrom:Number(e.target.value)})}
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
                <label>
                    <input type="checkbox" name="filter" value="1 transfer" />
                    название и цена "от"
                </label>
                <label>
                    <input type="checkbox" name="sort" value="non-stop" />
                    название и цена "от"
                </label>
            </div>
        </div>
    );
};

export default Sidebar;
