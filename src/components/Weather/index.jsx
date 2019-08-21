import React from 'react';
import Today from './Today';
import More from './More';
import { observer } from 'mobx-react';
import { useUiStore } from '../../stores/ui';
import BurgerIcon from "../UI/BurgerIcon";

const Weather = observer(() => {
    const { showMore } = useUiStore();
    return (
        <>
            <BurgerIcon />
            <Today />
            {showMore && <More />}
        </>
    );
});

export default Weather;
