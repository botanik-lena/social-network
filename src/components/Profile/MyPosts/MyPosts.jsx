import Post from '../MyPosts/Post/Post';
import './MyPosts.module.css';
import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state.js';


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }


    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
                    <div><button onClick={addPost}>Add post</button></div>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;