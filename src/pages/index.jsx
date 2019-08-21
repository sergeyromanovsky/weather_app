import React, { useEffect } from 'react';
import style from './style.module.scss';
import Sidebar from '../components/Sidebar';
import { useCityStore } from '../stores/cities';
import Weather from '../components/Weather';
import Modal from '../components/UI/Modal';

const App = () => {
    const { getCurrentLocationData } = useCityStore();

    useEffect(() => {
        getCurrentLocationData();
    }, []);
    return (
        <div className={style.outer}>
            <Modal />
            <div className={style.wrapper}>
                <div className={style.left}>
                    <Sidebar />
                </div>
                <div className={style.right}>
                    <Weather />
                </div>
            </div>
        </div>
    );
};

export default App;
