import { LayoutActionTypes } from './layout.types';
import { action } from 'typesafe-actions';
import { Theme } from '@material-ui/core';

export const SetTheme = (theme: Theme) => action(LayoutActionTypes.SetTheme, theme);
