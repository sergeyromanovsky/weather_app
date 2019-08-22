import React from 'react';
import sprite from '../../../assets/images/sprite.svg';

const icon = ({ url, classname, click }) => {
    return (
        <svg className={`icon_svg ${classname}`} onClick={click || null}>
            <use xlinkHref={`${sprite}#icon-${url}`} />
        </svg>
    );
};

export default icon;
