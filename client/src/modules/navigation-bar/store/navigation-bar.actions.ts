import { action } from 'typesafe-actions';
import { NavigationActionTypes } from 'modules/navigation-bar/store/navigation-bar.types';

export const LoadProfile = () => action(NavigationActionTypes.LoadProfile);
