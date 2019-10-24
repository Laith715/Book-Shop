import { action } from 'typesafe-actions';
import { NavigationActionTypes } from './navigation-bar.types';

export const LoadProfile = () => action(NavigationActionTypes.LoadProfile);
