import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { RootState } from 'modules/root/state.interface';
import LayoutContainer from 'modules/Layout/layout';
import NavigationBar from 'modules/navigation-bar/navigation-bar';
import Routes from 'modules/root/routes';

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
