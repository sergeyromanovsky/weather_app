import React from 'react';
import style from './style.module.scss';

import Icon from '../../../UI/Icon/Icon';
import { days } from '../../../../helpers/helper';

const Item = ({ item }) => {
    const date = new Date(item.dt_txt.replace(/\s/, 'T')).getDay();

    return (
        <div className={style.item}>
            <p>{days[date].substring(0, 3)}</p>
            <Icon url={item.weather[0].icon} />
            <span>
                {item.main.temp.toFixed(0)} <sup>°</sup>
            </span>
        </div>
    );
};

export default Item;
