import React from 'react';
import s from './Counter.module.css';
import {Button} from './Button';


type CountPropsType = {
    counterNumberClasses:string
    counterTitle: number | 'Incorrect value!' | 'enter values and press \'set\''
    onClickIncHandler: ()=> void
    onClickResetHandler: ()=> void
    incDisabled: boolean
    resetDisabled: boolean
}

export const Count = (props:CountPropsType) => {
    return (
        <div className={s.counter__block}>
            <div className={s.counter__display}>
                <div className={s.counter__title}>COUNTER</div>
                <div className={props.counterNumberClasses}>{props.counterTitle}</div>
                <div className={s.counter__buttons}>
                    <Button callBack={props.onClickIncHandler} name={'INC'} disabled={props.incDisabled}/>
                    <Button callBack={props.onClickResetHandler} name={'RESET'} disabled={props.resetDisabled}/>
                </div>
            </div>
        </div>
    );
};

