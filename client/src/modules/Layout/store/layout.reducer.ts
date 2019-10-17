import { createMuiTheme, Theme } from '@material-ui/core';
import { Reducer } from 'redux';
import { LayoutActionTypes } from './layout.types';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { red } from '@material-ui/core/colors';

export interface LayoutState {
    theme: Theme;
}
const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
};

const initialState: LayoutState = {
    theme: createMuiTheme(themeOptions),
};

const LayoutReducer: Reducer<LayoutState> = (state: LayoutState = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.SetTheme: {
            return { ...state, theme: action.payload };
        }
        default: {
            return state;
        }
    }
};
export default LayoutReducer;
