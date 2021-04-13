import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { TextArea } from '../common/FormElements/FormElements';
import { required, maxLength } from '../../utils/validators/validators';

let maxLength10 = maxLength(10);

const AddDialogForm = (props) => {
    return(
        <form className={style.addDialogs} onSubmit={props.handleSubmit}>
            <Field className="textarea" placeholder="Enter your message" name={"newDialogtext"} component={TextArea} validate={[required, maxLength10]}/>
            <button className="addBtn btn" >Add dialog</button>
        </form>
    );
}

const AddDialogsFormRedux = reduxForm({
    form: "addDialogForm"
})(AddDialogForm);

const Dialogs = (props) => {
    let dialogElements = props.dialogs
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messageElements = props.messages
        .map(message => <Message text={message.message} key={message.id}/>);

    const addDialog = (formData) => {
        props.addDialog(formData.newDialogtext);
        // formData.newDialogtext = "";
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <AddDialogsFormRedux onSubmit={addDialog} />
        </div>
    );
}

export default Dialogs;