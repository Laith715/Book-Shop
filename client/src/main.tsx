import { Store } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { RootState } from './modules/state.interface';
import Routes from './modules/routes';
import { Theme } from '@material-ui/core';
import LayoutContainer from './modules/Layout/layout';
import { ThemeProvider } from '@material-ui/styles';
import NavigationBar from './modules/navigation-bar/navigation-bar';

interface MainProps {
    store: Store<RootState>;
    history: History;
    theme: Theme;
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LayoutContainer>
                    {({ theme }) => (
                    <ThemeProvider theme={theme}>
                        <NavigationBar></NavigationBar>
                        <Routes />
                    </ThemeProvider>)}
                </LayoutContainer>
            </ConnectedRouter>
        </Provider>
    );
};

export default Main;
