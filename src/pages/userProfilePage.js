import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";

export const UserProfilePage = ({ user }) => {

  const localStorageUser = JSON.parse(localStorage.getItem('user'));

  console.log(localStorageUser)


  return (
    <>
      <UserCard
        avatar={user.avatar}
        userName={localStorageUser.username}
        followingCount={user.following && user.following.length}
        fullName={`${localStorageUser.firstName} ${localStorageUser.lastName}`}
      />
      <BoardList />
    </>
  );
};

export default UserProfilePage;
