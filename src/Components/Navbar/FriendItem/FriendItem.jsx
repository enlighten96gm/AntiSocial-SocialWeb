import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FriendItem.module.css'

const Friends = (props) => {
    return (
            <div className={s.friend}>
                <NavLink to={props.id}>{props.name}</NavLink>
            </div>
    )
}

export default Friends;