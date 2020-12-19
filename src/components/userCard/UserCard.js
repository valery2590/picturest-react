import "./UserCard.css";
import {useHistory} from "react-router";

const UserCard = ({avatar, userName, fullName, followingCount}) => {

    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        <div className="userCard__container">
            <img src={avatar} alt="User Avatar" className="userCard__image"/>
            <div className="userCard_info__container">
                <span className="userCard_info_userFullName__text">{fullName}</span>
                <span className="userCard_info_username__text">@{userName}</span>
                <span className="userCard_info_userFollowing__text">
                {followingCount} following
                </span>
                <div className="logout__button" onClick={handleLogout}>
                    Logout
                </div>
            </div>
        </div>
    );
};

export default UserCard;
