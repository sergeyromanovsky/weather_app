import React from 'react';
import style from './style.module.scss';

import { useCityStore } from '../../../../stores/cities';
import { observer } from 'mobx-react';
import classnames from 'classnames';
import Icon from '../../../UI/Icon/Icon';

const Item = observer(({ item }) => {
    const { activeCity, setActive, deleteCity } = useCityStore();
    const isActive = activeCity.name === item.name;

    return (
        <div className={style.wrapper}>
            <span
                className={classnames(style.cityName, { [style.active]: isActive })}
                onClick={() => setActive(item)}
            >
                {item.name}
            </span>
            {item.name !== 'Current Location' && (
                <Icon click={() => deleteCity(item.name)} url="cross" />
            )}
        </div>
    );
});

export default Item;
