import React from 'react';
import style from './style.module.scss';

import Item from './Item';
import { useCityStore } from '../../../stores/cities';
import { observer } from 'mobx-react';

const More = observer(() => {
    const {
        activeCity: { more }
    } = useCityStore();

    return (
        <div className={style.wrapper}>
            {more.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
});

export default More;
