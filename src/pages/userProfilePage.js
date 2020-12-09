import UserCard from "../components/userCard/UserCard";
import React from "react";


export const UserProfilePage = ({user}) => {

    return (
        <>
            <UserCard
                avatar={user.avatar}
                userName={user.username}
                followingCount={user.following && user.following.length}
                fullName={`${user.firstName} ${user.lastName}`}
            />
        </>
    )
}

export default UserProfilePage;