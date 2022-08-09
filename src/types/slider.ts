export interface SliderState {
  num: number;
}

export enum SliderActionTypes {
    SET_INCREASE='SET_INCREASE',
    SET_DECREASE='SET_DECREASE',

}

 interface SetIncreaseAction {
    type: SliderActionTypes.SET_INCREASE;
    payload: number
}

 interface SetDecreaseAction {
    type: SliderActionTypes.SET_DECREASE;
    payload: number
}

export type SliderAction = SetIncreaseAction | SetDecreaseAction;