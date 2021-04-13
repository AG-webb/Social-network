import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, TextArea } from '../../common/FormElements/FormElements';
import { required } from '../../../utils/validators/validators';


const ProfileDataFormComponent = ({handleSubmit, profile: {contacts}, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>FullName:</label>
            <Field type={"text"} placeholder={"FullName"} name={"fullName"} component={Input} validate={[required]}/>
            <label>About Me:</label>
            <Field type={"textarea"} placeholder={"About ME"} name={"aboutMe"} component={TextArea} validate={[required]}/>
            <label>looking for Job Desc:</label>
            <Field type={"textarea"} placeholder={"About ME"} name={"lookingForAJobDescription"} component={TextArea} validate={[required]}/>
            <label>Looking for job:</label>
            <Field type={"checkbox"} placeholder={"Looking for job Desc."} name={"lookingForAJob"} component={Input}/>
            <label>Contacts: </label>
            {   
                Object.keys(contacts).map(key => {
                    return <Field key={key} type={"text"} placeholder={key} name={"contacts." + key} component={Input}/>
                })
            }
            {
                error && <span className="error">{error}</span>
            }
            <button className="btn">Save</button>
        </form>
    );
}

const ProfileDataForm = reduxForm({
    form: "editProfile",    
})(ProfileDataFormComponent)

export default ProfileDataForm;