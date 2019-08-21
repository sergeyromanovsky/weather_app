import React from 'react';
import style from './style.module.scss';

import Backdrop from '../../UI/Backdrop/Backdrop';
import classnames from 'classnames';
import { useUiStore } from '../../../stores/ui';
import { observer } from 'mobx-react';

const SideDrawer = observer(({ children }) => {
    const { showSidebar, toggleSidebar } = useUiStore();

    return (
        <>
            <Backdrop clicked={() => toggleSidebar(false)} show={showSidebar} />
            <div className={classnames(style.wrapper, { [style.show]: showSidebar })}>
                {children}
            </div>
        </>
    );
});

export default SideDrawer;
