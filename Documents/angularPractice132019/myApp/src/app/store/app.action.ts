import {Action} from '@ngrx/store';

export const ADD_INPUT = "add_input";
export const GET_INPUT = "get_input";

export class getInput implements Action {
    readonly type = GET_INPUT;
}

export class addInput implements Action {
    readonly type = ADD_INPUT;
    constructor(public payload: string){}
}

export type inputActionTypes = getInput | addInput;