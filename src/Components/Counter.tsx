import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';
import s from './Counter.module.css'
import {Input} from './Input';
import {Label} from './Label';

export const Counter = () => {
    const [maxValue, setMaxValue] = useState<number>(0) // начальный state максимального значения в input
    const [startValue, setStartValue] = useState<number>(0) // начальный state стартового значения в input
    const [count, setCount] = useState<number>(0) // state со значением для самого счетчика

    const [isSetting, setIsSetting] = useState(false) // дизейбл кнопок

    useEffect(() => {
        setMaxValue(Number(localStorage.getItem('maxValue') || 0))
        setStartValue(Number(localStorage.getItem('startValue') || 0))
        setCount(Number(localStorage.getItem('count') || 0))
    }, [])

    const onSetValuesHandler = () => { // функция для кнопки SET, которая сохраняет установленные значения в input
        if (startValue < maxValue) {
            localStorage.setItem('maxValue', JSON.stringify(maxValue)) // сохраняем в localstorage максимальное значение при нажатии
            localStorage.setItem('startValue', JSON.stringify(startValue)) // сохраняем в localstorage стартовое значение при нажатии
            localStorage.setItem('count', JSON.stringify(startValue))
            setCount(startValue)  // установили и отобразили в счетчике наше стартовое значение в счетчик
        }
        setIsSetting(false)
    }
    const onClickIncHandler = () => { // функция для кнопки INC, которая увеличивает стартовое значения на 1
        if (count < maxValue) {
            setCount(count + 1); // увеличивать стартовое значение счетчика на + 1
        }

    }
    const onClickResetHandler = () => { // функция для кнопки RESET, которая сбрасывает
        setCount(startValue); // сброс стартового значения на установленное изначально при помощи кнопки reset
    }

    const handlerInputs = (event: ChangeEvent<HTMLInputElement>) => {

        const {id, value} = event.currentTarget

        setCount(0)
        setIsSetting(true)

        if(id === '1') { // проверяем по id, на каком input производим изменения
            setMaxValue(+value)
        }
        if(id === '2') { // проверяем по id, на каком input производим изменения
            setStartValue(+value)
        }
    }

    const countError = count === maxValue

    const maxInError = maxValue < 0
    const minInError = startValue < 0
    const inputError = maxValue <= startValue || maxInError || minInError

    const setDisabled =  maxValue < 0 || startValue < 0 || maxValue <= startValue || !isSetting  // условия для disabled кнопки set
    const incDisabled = maxValue === count || maxValue <= startValue || maxValue < 0 || startValue < 0  || isSetting // условия для disabled кнопки inc
    const resetDisabled = maxValue < 0 || startValue < 0 || maxValue <= startValue || isSetting  || startValue === count // // условия для disabled кнопки reset

    const counterNumberClasses = `${s.counter__value} ${(inputError || countError) ? s.counter__error : ''}`; // переменная для максимального значение в счетчике становится красным

    const counterTitle = inputError ? 'Incorrect value!' : isSetting ? 'enter values and press \'set\'' : count

    return (
        <div className={s.counter}>
            <div className={s.counter__block}>
                <div className={s.counter__display}>
                    <div className={s.counter__title}>SETTINGS BLOCK</div>
                    <div className={s.counter__lines}>
                        <div className={s.counter__line}>
                            <Label name={'MAX VALUE:'} htmlFor={'1'}/>
                            <Input handlerInputs={handlerInputs} value={maxValue} id={'1'} inputError={maxInError || maxValue <= startValue}/>
                        </div>
                        <div className={s.counter__line}>
                            <Label name={'START VALUE:'} htmlFor={'2'}/>
                            <Input handlerInputs={handlerInputs} value={startValue} id={'2'} inputError={minInError || maxValue <= startValue}/>
                        </div>
                    </div>
                    <Button callBack={onSetValuesHandler} name={'SET'} disabled={setDisabled}/>
                </div>
            </div>
            <div className={s.counter__block}>
                <div className={s.counter__display}>
                    <div className={s.counter__title}>COUNTER</div>
                    <div className={counterNumberClasses}>{counterTitle}</div>
                    <div className={s.counter__buttons}>
                        <Button callBack={onClickIncHandler} name={'INC'} disabled={incDisabled}/>
                        <Button callBack={onClickResetHandler} name={'RESET'} disabled={resetDisabled}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


