import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileData from '../ProfileData/ProfileData';
import ProfileDataForm from '../ProfileData/ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader />
    }

    const selectPhoto = (e) => {
        if(e.target.files.length) {
            let photo = e.target.files[0];
            props.uploadPhoto(photo);
        }
    }

    let onProfileSave = (formData) => {
        props.saveProfileInfo(formData);
        if(props.profileEditSuccess) {
            // This part need a little FIX 
            setEditMode(false);
        }
    }

    return (    
        <div className={style.wrapper}>
            <img src="https://mulgari.com/wp-content/uploads/2019/06/M5-Screen-Shot.jpg" alt="profileimg"/>
            <div className={style.profile}>
                <h1>Profile</h1>
                {
                    editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onProfileSave}/>
                    : <ProfileData status={props.status}
                        updateStatus={props.updateStatus} 
                        profile={props.profile}
                        isOwner={props.isOwner}
                        activateEditMode={ () => setEditMode(true) }  
                        />
                }
                <div>
                    {
                        props.isOwner && <input type={"file"} onChange={ selectPhoto }/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;