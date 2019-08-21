import React, { useState } from 'react';
import { useCityStore } from '../../../stores/cities';
import style from './style.module.scss';
import classnames from 'classnames';

const AddCity = () => {
    const [showInput, toggleInput] = useState(false);
    const [value, changeValue] = useState('');
    const { addCity } = useCityStore();

    const _submit = (e) => {
        e.preventDefault();
        addCity(value);
        changeValue('');
    };
    return (
        <>
            <p className={style.addCity} onClick={() => toggleInput(!showInput)}>
                <span>{showInput ? '-' : '+'}</span> Add city
            </p>
            <div className={style.form} onSubmit={_submit}>
                <form className={classnames(style.innerForm, { [style.showInput]: showInput })}>
                    <input
                        placeholder="Type City Here"
                        type="text"
                        value={value}
                        onChange={(e) => changeValue(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
};

export default AddCity;
