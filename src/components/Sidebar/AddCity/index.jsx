import React, { useState } from 'react';
import { useCityStore } from '../../../stores/cities';
import style from './style.module.scss';
import classnames from 'classnames';
import { Form, Field } from 'react-final-form';
import { required } from '../../../helpers/validation';
import { onlyLetters } from '../../../helpers/normalize';

const AddCity = () => {
    const [showInput, toggleInput] = useState(false);
    const { addCity } = useCityStore();

    const _submit = ({ city }) => addCity(city);

    return (
        <>
            <p className={style.addCity} onClick={() => toggleInput(!showInput)}>
                <span>{showInput ? '+' : '-'}</span> Add city
            </p>
            <div className={style.form} onSubmit={_submit}>
                <Form
                    render={({ handleSubmit, form, submitting }) => {
                        return (
                            <form
                                className={classnames(style.innerForm, {
                                    [style.showInput] : showInput
                                })}
                                onSubmit={(values) => {
                                    const promise = handleSubmit(values);
                                    promise && promise.then(form.reset);
                                    return promise;
                                }}
                            >
                                <Field name="city" parse={onlyLetters} validate={required}>
                                    {({ input, meta }) => (
                                        <>
                                            <div className={style.inputWrapper}>
                                                <input
                                                    {...input}
                                                    placeholder="Type City Here"
                                                    type="text"
                                                />
                                                <button disabled={submitting} type="submit">
                                                    Add
                                                </button>
                                            </div>
                                            {meta.error && meta.submitFailed && (
                                                <span className={style.error}>{meta.error}</span>
                                            )}
                                        </>
                                    )}
                                </Field>
                            </form>
                        );
                    }}
                    onSubmit={_submit}
                />
            </div>
        </>
    );
};

export default AddCity;
