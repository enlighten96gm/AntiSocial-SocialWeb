import React from 'react';
import Paginator from '../Common/Paginator';
import User from './User';



let Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users,  ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
             totalItemsCount={totalItemsCount} pageSize={pageSize} />
            {
                users.map( u => 
                <User u={u}
                followingInProgress={props.followingInProgress}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow}/>)
}
        </div>
    )
}
export default Users