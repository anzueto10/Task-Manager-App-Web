/* eslint-disable react/prop-types */
import useBoard from "../../hooks/useBoard";
import BoardCard from "./BoardCard";

const Boards = ({ boards }) => {
  const { setBoard } = useBoard();
  return (
    <ul>
      {boards.map((board, index) => (
        <li key={index}>
          <BoardCard board={board} onClick={() => setBoard({ board })} />
        </li>
      ))}
    </ul>
  );
};

export default Boards;
