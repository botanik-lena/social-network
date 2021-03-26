import Users from "./Users";
import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);