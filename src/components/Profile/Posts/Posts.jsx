import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { TextArea } from '../../common/FormElements/FormElements';
import { required, maxLength } from '../../../utils/validators/validators';

let maxLength20 = maxLength(20);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addPost}>
            <Field className="textarea" placeholder="Enter your post" name={"newPostText"} component={TextArea} validate={[required, maxLength20]}/>
            <button className="addBtn btn">Add Post</button>
        </form>
    );
}

const AddPostsFormRedux = reduxForm({
    form: "addPostForm",
})(AddPostForm);

const Posts = (props) => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} likes={post.likes} src={post.src} key={post.id}/>);

    const addPost = (formData) => {    
        props.addPost(formData.newPostText);
        // formData.newPostText = "";
    }

    return (
        <div className={style.posts}>
            <div className={style.title}>
                Posts
            </div>
            <AddPostsFormRedux onSubmit={ addPost } />
            <div className={style.postsWrapper}>
                {postsElements}
            </div>
        </div>
    );  
};

export default Posts;