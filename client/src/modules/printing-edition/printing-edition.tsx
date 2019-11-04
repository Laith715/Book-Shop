import React from 'react';
import { RootState } from 'modules/root/state.interface';
import { connect } from 'react-redux';

interface PropsFromDispatch {

}

interface PropsFromState {

}

type AllProps = PropsFromDispatch & PropsFromState;

const PrintingEdition: React.FC<AllProps> = (props: AllProps) => {
    return (<div></div>);
};

const mapToState = ({ printingEdition }: RootState) => ({
    printingEdition: printingEdition,
});

const mapToDispatch: PropsFromDispatch = {

};

export default connect(mapToState, mapToDispatch)(PrintingEdition);
