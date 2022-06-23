import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from './components/VisibilityControl';

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    console.log("14", "savedTasks", savedTasks);
    if (savedTasks) {
      setTaskItems(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createTask = (newTask) => {
    if (!taskItems.find((task) => task.name === newTask)) {
      setTaskItems([...taskItems, { name: newTask, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  };

  const handleShowComplete = () => {
    setShowComplete(!showComplete);
  }

  const cleanTask = _ => {
    setTaskItems(taskItems.filter(task => !task.done));
    setShowComplete(false);
  }

  return (
    <main className="bg-dark vh-100 text-white" >
      <Container>
        <TaskCreator onCreateTask={createTask} />
        <TaskTable tasks={taskItems} onToggleTask={toggleTask} />
        <VisibilityControl onSetShowComplete={handleShowComplete} onCleanTask={cleanTask} showComplete={showComplete}/>
        
        {showComplete && (
          <TaskTable
            tasks={taskItems}
            onToggleTask={toggleTask}
            doneValue={true}
          />
        )}

      </Container>
    </main>
  );
}

export default App;
