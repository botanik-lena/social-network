import p from './Post.module.css'

const Post = (props) => {
    return (
            
            <div className={p.item}>
                <img src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1611101005~hmac=84e2bb9dca5a9c8ea319bdc91ab4bf08" alt="avatar"/>
                {props.message}
                <div>
                    <span>{props.likesCount} like</span>
                </div>
            </div>
    );
}

export default Post;