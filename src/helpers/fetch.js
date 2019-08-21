import { useUiStore } from '../stores/ui';

const API_KEY = '&appid=daacc5335fb322dba7be9c7bc44291cd&units=metric';

const { openModal } = useUiStore();

export const handleFetch = ({ url, method = 'GET', data }) => {
    return fetch(url + API_KEY, { method, data })
        .then((res) => res.json())
        .then((result) => {
            if (+result.cod < 200 || +result.cod > 300) {
                return Promise.reject(result);
            }
            return result;
        })
        .catch((e) => {
            openModal(e.message);
        });
};
