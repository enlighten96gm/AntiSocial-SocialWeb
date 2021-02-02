import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div  className={s.item}>
        <img src='https://sun9-48.userapi.com/impf/c840424/v840424754/6e27d/JEjKPuE4wzc.jpg?size=719x960&quality=96&proxy=1&sign=b037169831d9ca34b3beda7fce45af2c&type=album' />
        { props.message }
        <div>
            <span>Likes</span>{ props.likesCount }
        </div>
    </div>
    )
};

export default Post;