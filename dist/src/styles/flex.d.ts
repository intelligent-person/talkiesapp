/// <reference types="facepaint" />
import { AlignItems } from '../types';
declare type Argument = string | string[];
export declare const alignItems: (align: AlignItems) => import("facepaint").DynamicStyle[];
export declare const alignSelf: (align: Argument) => import("facepaint").DynamicStyle[];
export declare const justifyContent: (justify: Argument) => import("facepaint").DynamicStyle[];
export declare const flexDirection: (direction: Argument) => import("facepaint").DynamicStyle[];
export declare const flex: import("facepaint").DynamicStyle[];
export declare const flexWrap: (wrap: Argument) => import("facepaint").DynamicStyle[];
export declare const flexBasis: (basis: Argument) => import("facepaint").DynamicStyle[];
export declare const order: (order: Argument) => import("facepaint").DynamicStyle[];
export {};
