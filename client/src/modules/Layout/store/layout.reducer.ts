import { createMuiTheme, Theme } from '@material-ui/core';
import { Reducer } from 'redux';
import { LayoutActionTypes } from './layout.types';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { red, indigo, green } from '@material-ui/core/colors';

export interface LayoutState {
    theme: Theme;
}
const themeOptions: ThemeOptions = {
    palette: {
        primary: indigo,
        secondary: green,
        error: red,
        type: 'dark',
    },
};

const initialState: LayoutState = {
    theme: createMuiTheme(themeOptions),
};

export const LayoutReducer: Reducer<LayoutState> = (state: LayoutState = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.SetTheme: {
            return { ...state, theme: action.payload };
        }
        default: {
            return state;
        }
    }
};
