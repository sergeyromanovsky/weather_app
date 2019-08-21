import React, { useMemo } from 'react';
import style from './style.module.scss';

import Icon from '../../UI/Icon/Icon';
import { observer } from 'mobx-react';
import { useCityStore } from '../../../stores/cities';
import Item from './Item';
import { useUiStore } from '../../../stores/ui';

const CityList = observer(() => {
    const { cities } = useCityStore();
    const { toggleSidebar } = useUiStore();

    const renderList = useMemo(() => {
        return cities.map((item) => <Item key={item.name} item={item} />);
    }, [cities.length]);

    return (
        <>
            <div className={style.header}>
                <h1>Select a City</h1>
                <Icon classname={style.close} click={() => toggleSidebar(false)} url="close" />
            </div>
            {renderList}
        </>
    );
});

export default CityList;
