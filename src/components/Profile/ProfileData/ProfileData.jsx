import React from 'react';
import style from './ProfileData.module.css';
import SocialNetwork from '../../common/SocialNetwork/SocialNetwork';
import ProfileStatus from '../ProfileInfo/ProfileStatus.jsx';

const ProfileData = ({profile: {fullName, photos, lookingForAJob, lookingForAJobDescription, aboutMe}, isOwner, status, updateStatus, activateEditMode}) => {
    return (
        <div className={style.profileWrapper}>
            <div className={style.avatar}>
                <img src={photos.large || "https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png"} alt="profile"/>
            </div>
            <div className={style.info}>
                <div className={style.infoGroup}>
                    <span>FullName: </span>
                    <span>{fullName}</span>
                </div>
                <div className={style.infoGroup}>
                    <span>Status: </span>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
                <div className={style.infoGroup}>
                    <span>About me: </span>
                    <span>{aboutMe || "no information yet!"}</span>
                </div>
                <div className={style.infoGroup}>
                    <span>looking For A Job Description: </span>
                    <span>{lookingForAJobDescription || "no information yet!"}</span>
                </div>
                <div className={style.infoGroup}>
                    <span>Looking for job: </span>
                    {
                        lookingForAJob ?
                        <span className={style.lookingJob}>yes</span>:
                        <span className={style.lookingJob}>no</span>
                    }
                </div>
                <div className={style.infoGroup}>
                    <span>
                        Contacts:
                    </span>
                    <SocialNetwork />
                </div>
                <div>
                    {
                        isOwner && <button className="btn" onClick={activateEditMode}>Edit</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileData;