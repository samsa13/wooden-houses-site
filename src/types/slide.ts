import { MouseEventHandler } from "react";

export interface SlideState {
    id: number,
    src: string, 
    alt: string, 
    slideIndex: number, 
    index:number
  }
 
export interface SliderPropTypes {
  id: string,
  onClick: MouseEventHandler,
}  