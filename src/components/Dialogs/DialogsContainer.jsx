import React from 'react';
import Dialogs from './Dialogs';
import { addDialog } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

export default compose(
    connect(mapStateToProps, {
        addDialog,
    }),
    withAuthRedirect,
)(Dialogs);