import React from 'react';
import cls from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={cls.Sidebar}>
            <div className={cls.sort}>
                <p>Сортировать</p>
                <label>
                    <input type="radio" name="sort" value="lowerPrice" defaultChecked={true} />
                    - по возростанию цены
                </label>
                <label>
                    <input type="radio" name="sort" value="higherPrice" />
                    - по убыванию цены
                </label>
                <label>
                    <input type="radio" name="sort" value="time" />
                    - по времени в пути
                </label>
            </div>
            <div className={cls.filter}>
                <p>Фильтровать</p>
                <label>
                    <input type="checkbox" name="filter" value="1 transfer" />
                    - 1 пересадка
                </label>
                <label>
                    <input type="checkbox" name="sort" value="non-stop" />
                    - без пересадок
                </label>
            </div>
            <div className={cls.price}>
                <p>Цена</p>
                <label>
                    От
                    <input type="number" name="filter" placeholder='0' min="0"/>
                </label>
                <label>
                    До
                    <input type="number" name="sort" placeholder='1000000' min="0"/>
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
