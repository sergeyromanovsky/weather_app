import React from 'react';
// eslint-disable-next-line
import sprite from '!file-loader!../../../assets/images/sprite.svg';

const icon = ({ url, classname, click }) => {
    return (
        <svg className={`icon_svg ${classname}`} onClick={click ? click : null}>
            <use xlinkHref={`${sprite}#icon-${url}`} />
        </svg>
    );
};

export default icon;
