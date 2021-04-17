import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/avocado_avatar.png"

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=&{this.props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items);
            });
    }
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <div>
                    <div><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" className={styles.userPhoto} /></div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }}>Follow</button>}

                    </div>
                </div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    {/* <div>{user.location.country}</div>
                    <div>{user.location.city}</div> */}
                </div>

            </div>)
        }
    </div>
}

export default Users;