import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://abv.altkg.com/assets/uploads/slider/11/1.jpg" alt="big-img" />
            </div>

            <div>
                <h2>{props.profile.fullName}</h2>
                <h2> ID: {props.profile.userId}</h2>
            </div>

            <div >
                <img src={props.profile.photos.large} alt="avatar" className={styles.avatar} />
            </div>

            <div>
                <h4>Jobs: </h4>
                <p>{props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <h4>Contacts: </h4>
                <ul>
                    <li><a href={props.profile.contacts.vk}>VK</a></li>
                    <li><a href={props.profile.contacts.twitter}>Twitter</a></li>
                    <li><a href={props.profile.contacts.facebook}>FB</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;