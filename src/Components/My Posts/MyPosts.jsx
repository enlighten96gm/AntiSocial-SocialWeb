import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { required, maxLengthCreator } from '../../utils/validators'
import { Textarea } from '../Common/FormsControls';

const maxLength10 = maxLengthCreator(10)


const MyPosts = React.memo(props => {
console.log("rener");
    let postElements = 
    [...props.posts]
    .reverse()
    .map(p =>  <Post message={p.message} key={p.id} likesCount={p.likesCount} />)
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
   return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText" placeholder="Enter your post" validate={[required, maxLength10]}/>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
   ) 
}
const AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm",
})(AddNewPostForm)

export default MyPosts;