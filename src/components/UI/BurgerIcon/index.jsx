import React from 'react';
import style from './style.module.scss';
import { useUiStore } from '../../../stores/ui';

const BurgerIcon = () => {
    const { toggleSidebar } = useUiStore();

    return (
        <div className={style.wrapper} onClick={toggleSidebar}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default BurgerIcon;
