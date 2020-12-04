import "./BoardCard.css";

const BoardCard = ({ board }) => {
  return (
    <div className="boardCard__container">
      <div className="boardCard_info__container">
        <span className="boardCard_info_board__title">{board.title}</span>
        <span className="boardCard_info_board__number">12 pins</span>
      </div>
    </div>
  );
};

export default BoardCard;
