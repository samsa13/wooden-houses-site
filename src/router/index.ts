import React from "react";
import BathHouses from "../pages/BathHouses";
import Foundations from "../pages/Foundations";
import Houses from "../pages/Houses";
import NotFound from "../pages/not-found/NotFound";
import SummerHouses from "../pages/SummerHouses";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  MAIN = '',
  NOT_FOUND = '*',
  HOUSES = 'houses',
  BATH_HOUSES = 'bath_houses',
  FOUNDATIONS = 'foundations',
  SUMMER_HOUSES = 'summer_houses'
}

export const routes: IRoute[] = [
  { path: RouteNames.HOUSES, element: Houses },
  { path: RouteNames.BATH_HOUSES, element: BathHouses },
  { path: RouteNames.FOUNDATIONS, element: Foundations },
  { path: RouteNames.SUMMER_HOUSES, element: SummerHouses },
 // { path: RouteNames.NOT_FOUND, element: NotFound }
]