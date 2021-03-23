import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-256.png" alt="avatar" />
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    );
}

export default Post;