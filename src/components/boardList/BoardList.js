import { useEffect, useState } from "react";
import "./BoardList.css";
import BoardCard from "../boardCard/BoardCard";

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/users/1/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  }, []);

  return (
    <div>
      <span className="boardsList__title">Boards</span>
      <div className="boardsList__container">
        {boards.map((board) => (
          <BoardCard board={board} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
