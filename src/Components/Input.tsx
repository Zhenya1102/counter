import React, {ChangeEvent} from 'react';
import s from './Counter.module.css'

type InputPropsType = {
    id: string
    value: number
    handlerInputs: (event: ChangeEvent<HTMLInputElement>) => void
    inputError: boolean
}

export const Input = (props: InputPropsType) => {
    const inputClass = `${s.input} ${props.inputError ? s.input__error : ''}`
    return (
        <input
            type="number"
            id={props.id}
            value={props.value}
            onChange={props.handlerInputs}
            className={inputClass}/>
    )
};

