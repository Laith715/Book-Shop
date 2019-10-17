import { Theme } from '@material-ui/core';
import { RootState } from '../state.interface';
import { SetTheme } from './store/layout.actions';
import { connect } from 'react-redux';
import * as React from 'react';

interface PropsFromState {
    theme: Theme;
}

interface PropsFromDispatch {
    setTheme: typeof SetTheme;
}
type LayoutProps = PropsFromDispatch & PropsFromState;

interface LayoutRenderProps {
    render?: (props: LayoutProps) => React.ReactElement;
    children?: (props: LayoutProps) => React.ReactElement;
}

type AllProps = LayoutProps & LayoutRenderProps;

class Layout extends React.Component<AllProps> {
    render() {
        if (this.props.render) {
            return this.props.render({ theme: this.props.theme, setTheme: this.props.setTheme });
        }
        if (this.props.children) {
            return this.props.children({ theme: this.props.theme, setTheme: this.props.setTheme });
        }
        return null;
    }
}

const mapToStateProps = ({ layout }: RootState): PropsFromState => ({
    theme: layout.theme,
});

const mapToDispatch: PropsFromDispatch = {
    setTheme: SetTheme,
};

export default connect(mapToStateProps, mapToDispatch)(Layout);
