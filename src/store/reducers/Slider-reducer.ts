import { SliderAction, SliderActionTypes, SliderState } from "../../types/slider";

const initialState: SliderState = {
    num: 0,
}

const handleCarousel = (state = initialState, action: SliderAction) : SliderState => {
    const length = 12;
    switch (action.type){
        case SliderActionTypes.SET_INCREASE:
            return {...state, num: state.num + 1 > length ? 0 : state.num + 1}
        case SliderActionTypes.SET_DECREASE:
            return {...state, num: state.num - 1 < 0 ? length : state.num - 1}    
        default:
            return state;    
    }
};

export default handleCarousel;