import React, {ChangeEvent, useEffect} from 'react';
import s from '../Components/Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {
    onClickIncHandlerAC,
    resetAC, setInputValueAC, setIsSettingsAC, setValuesHandlerAc,
} from './counter-reducer';
import {Settings} from '../Components/Settings';
import {Count} from '../Components/Count';


export const CounterRedux = () => {
    const counterMaxValue = useSelector<AppRootStateType,  number>(state => state.counter.maxValue)
    const counterStartValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.count)
    const counterIsSetting = useSelector<AppRootStateType, boolean>(state => state.counter.isSetting)

    const  dispatch = useDispatch()
    useEffect(() => { // устанавливаем значения их localStorage
        const maxValue = Number(localStorage.getItem('maxValue')) || 0;
        const startValue = Number(localStorage.getItem('startValue')) || 0;
        const count = Number(localStorage.getItem('count')) || startValue;
        dispatch(setInputValueAC({ maxValue, startValue, count }));
    }, [dispatch]);


    const setValuesHandler = () => { // функция для кнопки SET, которая сохраняет установленные значения в input
        if (counterStartValue < counterMaxValue) {
            localStorage.setItem('maxValue', JSON.stringify(counterMaxValue)) // сохраняем в localstorage максимальное значение при нажатии
            localStorage.setItem('startValue', JSON.stringify(counterStartValue)) // сохраняем в localstorage стартовое значение при нажатии
            localStorage.setItem('count', JSON.stringify(counterStartValue))
            dispatch(setValuesHandlerAc(counterStartValue))
        }
        dispatch(setIsSettingsAC(false))
    }
    const onClickIncHandler = () => { // функция для кнопки INC, которая увеличивает стартовое значения на 1
        if (counterValue < counterMaxValue) {
            dispatch(onClickIncHandlerAC())
        }

    }
    const onClickResetHandler = () => {
        dispatch(resetAC())
    }
    const handlerInputs = (event: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.currentTarget
        dispatch(setIsSettingsAC(true))
        dispatch(setInputValueAC({[id]:+value}))
    }
    const countError = counterValue === counterMaxValue
    const maxInError = counterMaxValue < 0
    const minInError = counterStartValue < 0
    const inputError = counterMaxValue <= counterStartValue || maxInError || minInError
    const setDisabled =  counterMaxValue < 0 || counterStartValue < 0 || counterMaxValue <= counterStartValue || !counterIsSetting  // условия для disabled кнопки set
    const incDisabled = counterMaxValue === counterValue || counterMaxValue <= counterStartValue || counterMaxValue < 0 || counterStartValue < 0  || counterIsSetting // условия для disabled кнопки inc
    const resetDisabled = counterMaxValue < 0 || counterStartValue < 0 || counterMaxValue <= counterStartValue || counterIsSetting  || counterStartValue === counterValue // // условия для disabled кнопки reset
    const counterNumberClasses = `${s.counter__value} ${(inputError || countError) ? s.counter__error : ''}`; // переменная для максимального значение в счетчике становится красным
    const counterTitle = inputError ? 'Incorrect value!' : counterIsSetting ? 'enter values and press \'set\'' : counterValue

    return (
        <div className={s.counter}>
            <Settings
                counterMaxValue={counterMaxValue}
                counterStartValue={counterStartValue}
                setValuesHandler={setValuesHandler}
                handlerInputs={handlerInputs}
                setDisabled={setDisabled}
                maxInError={maxInError}
                minInError={minInError}
            />
            <Count
                counterTitle={counterTitle}
                counterNumberClasses={counterNumberClasses}
                onClickIncHandler={onClickIncHandler}
                onClickResetHandler={onClickResetHandler}
                incDisabled={incDisabled}
                resetDisabled={resetDisabled}
            />
        </div>
    );
};


