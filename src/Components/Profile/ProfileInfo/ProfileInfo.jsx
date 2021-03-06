import React, { useState } from 'react';
import Preloader from '../../Common/Preloader';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/loh.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )       
    }

    return (
    <div>    
        <div className={s.descriptionBlock}>
            <img className={s.loh} src={props.profile.photos.large || userPhoto} />
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            {editMode 
            ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
            : <ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner}/> }
                
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
    )
};

const ProfileData = (props) => {
    return (
    <div>
        { props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "No"}
        </div>
        {props.profile.lookingForAJob && 
        <div>
            <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        </div>
    </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
    <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;