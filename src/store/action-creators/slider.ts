import { SliderAction, SliderActionTypes, SliderState } from "../../types/slider";

export const setIncrease = (num: number):SliderAction => {
    return {
        type: SliderActionTypes.SET_INCREASE,
        payload: num
    }
}

export const setDecrease = (num: number):SliderAction => {
    return {
        type: SliderActionTypes.SET_DECREASE,
        payload: num
    }
}