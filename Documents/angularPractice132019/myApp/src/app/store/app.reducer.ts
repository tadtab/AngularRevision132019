
import * as fromAppAction from '../store/app.action';

export interface State {
    stateList: string[]
}

export const initialState: State = {
    stateList: ["InitialSate"]
}



export function appReducer(state = initialState, action: fromAppAction.inputActionTypes){
    switch(action.type){

        case fromAppAction.GET_INPUT:
            return {
                ...state
            }
            break;
        case fromAppAction.ADD_INPUT:
            return { 
                ...state,
                stateList: [...state.stateList, action.payload]
            }
            default:
                return {
                    ...state
                }
    }
}