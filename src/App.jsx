import { BoardProvider } from "./context/board";
import { CreaterProvider } from "./context/creater";
import TaskPage from "./pages/TaskPage";

const App = () => {
  return (
    <CreaterProvider>
      <BoardProvider>
        <TaskPage />
      </BoardProvider>
    </CreaterProvider>
  );
};

export default App;
