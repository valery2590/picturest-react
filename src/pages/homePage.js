import "../App.css";
import BoardList from "../components/boardList/BoardList";
import PinsList from "../components/pinsList/PinsList";
import UserCard from "../components/userCard/UserCard";

function HomePage({user}) {

    return (
        <div className="app__body">
            <UserCard
                avatar={user.avatar}
                userName={user.username}
                followingCount={user.following && user.following.length}
                fullName={`${user.firstName} ${user.lastName}`}
            />
            <BoardList />
            <PinsList />
        </div>
    );
}

export default HomePage;
