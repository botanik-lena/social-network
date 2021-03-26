import Post from '../MyPosts/Post/Post';
import './MyPosts.module.css';
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
                    <div><button onClick={onAddPost}>Add post</button></div>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;