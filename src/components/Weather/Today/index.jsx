import React from 'react';
import style from './style.module.scss';
import Icon from '../../UI/Icon/Icon';
import Switch from 'react-toggle-switch';
import { getTodaysDate } from '../../../helpers/helper';
import { useCityStore } from '../../../stores/cities';
import { observer } from 'mobx-react';
import Spinner from '../../UI/Spinner';
import { useUiStore } from '../../../stores/ui';

const Today = observer(() => {
    const {
        activeCity: { today: data }
    } = useCityStore();

    const { showMore, toggleShowMore } = useUiStore();

    if (!data) {
        return <Spinner />;
    }

    return (
        <>
            <div className={style.location}>
                <p>
                    <Icon url="pin" />
                    {data.name}, &nbsp;
                    {data.sys.country}
                </p>
                <div>
                    <span>5 days weather</span>
                    <Switch on={showMore} onClick={toggleShowMore} />
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.itemCustom}>
                    <p>
                        <Icon key={data.name} url={data.weather[0].icon} />
                        {data.weather[0].description}
                    </p>
                    <p>{getTodaysDate()}</p>
                </div>

                <div className={style.itemWrapper}>
                    <div className={style.item}>
                        <span>Current</span>
                        {data.main.temp.toFixed(0)}°
                    </div>
                    <div className={style.item}>
                        <span>High</span>
                        {data.main.temp_max.toFixed(0)}°
                    </div>
                    <div className={style.item}>
                        <span>Low</span>
                        {data.main.temp_min.toFixed(0)}°
                    </div>
                    <div className={style.item}>
                        <span>Wind</span>
                        <p>
                            {data.wind.speed.toFixed(0)}
                            <sup>m/sec</sup>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Today;
