
export let initialState = {
    startValue: 0,
    maxValue: 0,
    count: 0,
    isSetting: false
}
export type InitialStateType = {
    startValue: number,
    maxValue: number,
    count: number,
    isSetting: boolean
}
export const counterReducer = (state:InitialStateType= initialState, action: MainType):InitialStateType=> {
    switch (action.type) {
        case 'SET-START-VALUE': {
            return {...state, count: action.startValue}
        }
        case 'INC-COUNT': {
            return {...state, count: state.count + 1}
        }
        case 'RESET-COUNT': {
            return {...state, count: state.startValue}
        }
        case 'SET-IS-SETTINGS': {
            return {...state, isSetting: action.isSetting}
        }
        case 'SET-VALUE':{
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

type MainType = SetValuesHandlerAcType | onClickIncHandlerACType | ResetACType  | SetIsSettingsACType | SetInputValueACType

type SetValuesHandlerAcType = ReturnType<typeof setValuesHandlerAc>
export const setValuesHandlerAc = (startValue:number) => {
    return {
        type: 'SET-START-VALUE',
        startValue,
    } as const
}
type onClickIncHandlerACType = ReturnType<typeof onClickIncHandlerAC>
export const onClickIncHandlerAC = () => {
    return {
        type: 'INC-COUNT',
    } as const
}
type ResetACType = ReturnType<typeof resetAC>
export const  resetAC = () => {
    return {
        type: 'RESET-COUNT',
    } as const
}


type SetIsSettingsACType = ReturnType<typeof setIsSettingsAC>
export const setIsSettingsAC = (isSetting:boolean) => {
    return {
        type: 'SET-IS-SETTINGS',
        isSetting
    } as const
}

type SetInputValueACType = ReturnType<typeof setInputValueAC>
export const setInputValueAC= (value:{[key:string]:number}) => {
    return {
        type: 'SET-VALUE',
        payload: value
    } as const
}