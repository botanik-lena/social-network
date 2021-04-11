import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avocado_avatar.png"

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}

        </div>
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