import { observable, action } from 'mobx';

class Ui {
    @observable showMore = false;

    @observable showSidebar = false;

    @observable modal = {
        msg  : '',
        show : false
    };

    @action toggleShowMore = () => (this.showMore = !this.showMore);

    @action toggleSidebar = () => (this.showSidebar = !this.showSidebar);

    @action hideSidebar = () => (this.showSidebar = false);

    @action openModal = (msg) => {
        this.modal = {
            msg,
            show : true
        };
    };

    @action hideModal = () => {
        this.modal.show = false;
    };
}

const Store = new Ui();

export const useUiStore = () => Store;
