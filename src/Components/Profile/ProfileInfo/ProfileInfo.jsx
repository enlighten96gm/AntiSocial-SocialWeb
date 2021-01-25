import React from 'react';
import Preloader from '../../Common/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
    <div>    
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
    )
};

export default ProfileInfo;