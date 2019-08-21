import { observable, action, configure, runInAction, autorun } from 'mobx';
import { handleFetch } from '../helpers/fetch';
import { useUiStore } from './ui';

configure({ enforceActions: 'always' });

const initialCity = {
    name  : 'Current Location',
    today : null,
    more  : []
};

const { openModal } = useUiStore();

const savedState = JSON.parse(sessionStorage.getItem('savedState'));
const savedActiveCity = JSON.parse(sessionStorage.getItem('savedActiveCity'));

class Cities {
    constructor() {
        autorun(() => {
            sessionStorage.setItem('savedState', JSON.stringify(this.cities));
            sessionStorage.setItem('savedActiveCity', JSON.stringify(this.activeCity));
        },
        { delay: 1000 });
    }

    @observable cities = savedState || [initialCity];

    @observable activeCity = savedActiveCity || initialCity;

    @action setActive = (city) => (this.activeCity = city);

    findIndex = (city) => this.cities.findIndex(({ name }) => name === city);

    @action getCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`;
            const moreUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}`;

            try {
                const [today, more] = await Promise.all([
                    handleFetch({ url }),
                    handleFetch({ url: moreUrl })
                ]);

                const updMore = more.list.filter((item, index) => index % 8 === 0);

                runInAction(() => {
                    // initialCity name === 'Current location'
                    const currIndex = this.cities.findIndex(({ name }) => name === initialCity.name);
                    const updCityObj = {
                        today,
                        more : updMore,
                        name : initialCity.name
                    };
                    this.cities[currIndex] = updCityObj;
                    if (this.activeCity.name === initialCity.name) {
                        this.activeCity = updCityObj;
                    }
                });
            } catch (error) {
                openModal(error.message);
            }
        },
        (error) => {
            console.error(error);
        },
        {
            maximumAge         : 600000,
            enableHighAccuracy : true,
            timeout            : 60000
        });
    };

    @action addCity = async (city) => {
        const cityIndex = this.findIndex(city);
        if (cityIndex < 0) {
            const todayUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
            const moreUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}`;

            try {
                const [today, more] = await Promise.all([
                    handleFetch({ url: todayUrl }),
                    handleFetch({ url: moreUrl })
                ]);
                const updMore = more.list.filter((item, index) => index % 8 === 0);

                runInAction(() => {
                    const cityObj = { name: city.toLowerCase(), today, more: updMore };
                    this.setActive(cityObj);
                    this.cities.push(cityObj);
                });
            } catch (error) {}
        } else {
            this.setActive(this.cities[cityIndex]);
        }
    };

    @action deleteCity = (city) => {
        const cityIndex = this.findIndex(city);
        this.cities.splice(cityIndex, 1);
        if (this.activeCity.name === city) {
            this.setActive(this.cities[cityIndex - 1]);
        }
    };
}

const Store = new Cities();

export const useCityStore = () => {
    return Store;
};
