import React, {ChangeEvent} from 'react';
import s from './Counter.module.css';
import {Label} from './Label';
import {Input} from './Input';
import {Button} from './Button';


type SettingsPropsType = {
    handlerInputs:(event: ChangeEvent<HTMLInputElement>)=> void
    setValuesHandler: ()=> void
    counterMaxValue: number
    counterStartValue: number
    setDisabled: boolean
    maxInError: boolean
    minInError: boolean
}

export const Settings = (props:SettingsPropsType) => {
    return (
        <div className={s.counter__block}>
            <div className={s.counter__display}>
                <div className={s.counter__title}>SETTINGS BLOCK</div>
                <div className={s.counter__lines}>
                    <div className={s.counter__line}>
                        <Label name={'MAX VALUE:'} htmlFor={'1'}/>
                        <Input handlerInputs={props.handlerInputs} value={props.counterMaxValue} id={'maxValue'}
                               inputError={props.maxInError || props.counterMaxValue <= props.counterStartValue}/>
                    </div>
                    <div className={s.counter__line}>
                        <Label name={'START VALUE:'} htmlFor={'2'}/>
                        <Input handlerInputs={props.handlerInputs} value={props.counterStartValue} id={'startValue'}
                               inputError={props.minInError || props.counterMaxValue <= props.counterStartValue}/>
                    </div>
                </div>
                <Button callBack={props.setValuesHandler} name={'SET'} disabled={props.setDisabled}/>
            </div>
        </div>
    );
};

