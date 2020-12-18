import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";

export const UserProfilePage = ({ user }) => {
  return (
    <>
      <UserCard
        avatar={user.avatar}
        userName={user.username}
        followingCount={user.following && user.following.length}
        fullName={`${user.firstName} ${user.lastName}`}
      />
      <BoardList />
    </>
  );
};

export default UserProfilePage;
