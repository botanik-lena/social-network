import d from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div >
            <img className={d.img} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-256.png" alt="avatar" />
            <div className={d.message}>{props.message}</div>
            <div style={{ content: '', clear: 'both' }}></div>
        </div>

    );
}

export default Message;