import Post from '../MyPosts/Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div><img src="https://abv.altkg.com/assets/uploads/slider/11/1.jpg" alt="big-img"/></div>
            <div>ava + description</div>

            <div>
                <div>My posts</div>
                <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
                <div>New post</div>
                <div>
                    <Post message="Hello, world!!" likesCount="19"/>
                    <Post message="I love React" likesCount="0"/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;