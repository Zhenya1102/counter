import {counterReducer, initialState, InitialStateType, setInputValueAC, setValuesHandlerAc} from './counter-reducer';


const startState: InitialStateType = {
    startValue: 0,
    maxValue: 0,
    count: 0,
    isSetting: false
}

test('test counterReducer should correctly change state when executing action setValuesHandlerAc', () => {
        const action = setValuesHandlerAc(1)
        const endState = counterReducer(startState, action)
        expect(endState.count).toBe(1);
        expect(endState).toBeInstanceOf(Object);
    }
)
test('test counterReducer should correctly change state when executing action onClickIncHandlerAC', () => {

        const action = setValuesHandlerAc(1)
        const endState = counterReducer(startState, action)
        expect(endState.count).toBe(1);
        expect(endState).toBeInstanceOf(Object);
        expect(endState).toEqual(expect.anything());
    }
)
test('test counterReducer should correctly change state when executing action resetAC', () => {

        const action = setValuesHandlerAc(1)
        const endState = counterReducer(startState, action)
        expect(endState.count).toBe(1);
        expect(endState).toBeInstanceOf(Object);
        expect(endState).toEqual(expect.anything());
    }
)

test('test counterReducer should correctly change state when executing action setIsSettingsAC', () => {

        const action = setValuesHandlerAc(1)
        const endState = counterReducer(startState, action)
        expect(endState.isSetting).toBe(false);
        expect(endState).toBeInstanceOf(Object);
        expect(endState).toEqual(expect.anything());
    }
)

test('test counterReducer should correctly change state when executing action SetInputValueACType', () => {
    const startState: InitialStateType = {
        startValue: 0,
        maxValue: 0,
        count: 0,
        isSetting: false,
    };
    const action = setInputValueAC({ startValue: 1, maxValue: 5 });
    const endState = counterReducer(startState, action);

    expect(endState.startValue).toBe(1);
    expect(endState.maxValue).toBe(5);
    expect(endState.count).toBe(0);
    expect(endState.isSetting).toBe(false);
    expect(endState).toBeInstanceOf(Object);
    expect(endState).toEqual(expect.anything());
});
