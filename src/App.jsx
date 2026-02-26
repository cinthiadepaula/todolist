import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((tasks) => {
      //preciso atualizar essa tarefa
      if (tasks.id === tasksId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }
      return tasks;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(tasksId) {
    const newTasks = tasks.filter((tasks) => tasks.id != tasksId);
    setTasks(newTasks);
  }

  function onAddTaskSumit(title, descripton) {
    const newTask = {
      id: v4(),
      title,
      descripton,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4 ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSumit={onAddTaskSumit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
