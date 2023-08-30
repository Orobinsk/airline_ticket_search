import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import cls from './App.module.scss'
import TicketList from "./components/TicketList";
import Flights from "./components/Flights";

function App() {
    return (
        <div className={cls.app}>
            <div className={cls.wrapper}>
                    <Sidebar/>
                <div className={cls.main}>
                    <div className={cls.tickets}>
                        <Flights/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
