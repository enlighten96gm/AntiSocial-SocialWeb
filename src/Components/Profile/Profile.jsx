import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from '../My Posts/MyPostsContainer';
import s from './Profile.module.css'

const Profile = (props) => {
    return (
    <div>
        <div>
            <img className={s.itemImage} src="https://sun9-14.userapi.com/impg/c857628/v857628761/1679a6/aKLYjFWlSD0.jpg?size=816x788&quality=96&proxy=1&sign=61ebc2fb4cf9b9498f54249afd1c76ad&type=album" />
        </div>
        <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
        <MyPostsContainer />
    </div>
    )
};

export default Profile;