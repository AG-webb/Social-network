import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <ProfileInfo 
                profile={props.profile}
                profileEditSuccess={props.profileEditSuccess}
                status={props.status}
                updateStatus={props.updateStatus}
                uploadPhoto={props.uploadPhoto}
                isOwner={props.isOwner}
                saveProfileInfo={props.saveProfileInfo} 
            />
            <PostsContainer />
        </div>
    );
}

export default Profile;