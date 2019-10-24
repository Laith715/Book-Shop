import { Reducer } from 'redux';

export interface NavigationState {

}

const initialState: NavigationState = {

} as NavigationState;

export const NavigationReducer: Reducer<NavigationState> = (state: NavigationState = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
