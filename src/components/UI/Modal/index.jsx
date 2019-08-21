import React, { useRef, useEffect } from 'react';
import style from './style.module.scss';

import Backdrop from '../Backdrop/Backdrop';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { useUiStore } from '../../../stores/ui';

const Modal = observer(() => {
    const { modal, hideModal } = useUiStore();

    const btnRef = useRef(null);

    useEffect(() => {
        btnRef.current.focus();
    }, [modal.show]);

    return (
        <>
            <Backdrop clicked={hideModal} show={modal.show} />
            <div className={classnames(style.modal, { [style.show]: modal.show })}>
                <p className={style.text}>{modal.msg}</p>
                <button ref={btnRef} type="button" onClick={hideModal}>
                    OK
                </button>
            </div>
        </>
    );
});

export default Modal;
