import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Ticket from "./components/Card/Ticket";
import cls from './App.module.scss'

function App() {
    return (
        <div className={cls.app}>
            <div className={cls.wrapper}>
                <Sidebar/>
                <div className={cls.main}>
                    <div className={cls.tickets}>
                        <Ticket/>
                    </div>
                    <button className={cls.btn} >Показать еще</button>
                </div>
            </div>
        </div>
    );
}

export default App;
