import { combineReducers } from "redux";
import handleCarousel from "./Slider-reducer";


export const rootReducer = combineReducers({
    num: handleCarousel,
 
})

export type RootState = ReturnType<typeof rootReducer>