import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PixelBlast from "../../components/PixelBlast/PixelBlast";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import SpotlightTaskModal from "../../components/SpotlightTaskModal/SpotlightTaskModal";
import "./TaskMenu.css";

function TaskMenu() {
  const [ task_id, setTask_id ] = useState();
  const [ tasks, setTasks ] = useState([]);
  const [ showAddModal, setShowAddModal ] = useState(false);
  const [ showEditModal, setShowEditModal] = useState(false);
  const { request, loading, error } = useFetch(import.meta.env.VITE_BACKEND_URL + "/api");

  useEffect(() => {
    const fetchTasks = async () => {
        const response = await request(`/task/${localStorage.getItem("ID")}`, "GET");
        if (response && response.success) {
          setTasks(response.data);
        } else {
          console.error(error);
        }
      }
    fetchTasks();
  }, [tasks]);

  const handleEdit = async (taskId) => {
    setTask_id(taskId)
    setShowEditModal(true);
  }
  

  const handleDelete = async (taskId) => {
    const response = await request(`/task/${taskId}`, "DELETE");
    if (!response || !response.success) {
      console.log(error);
    }
  }

  return (
    <div className="taskMenu-page">
      <div className="background">
        <PixelBlast
          variant="square"
          pixelSize={8}
          color="#B19EEF"
          patternScale={2}
          enableRipples
          rippleSpeed={0.5}
          speed={0.5}
          edgeFade={0.25}
        />
      </div>

      { showAddModal && <SpotlightTaskModal method="POST" text="Insert a New Task!" onClose={() => setShowAddModal(false)}/> }
      { showEditModal && <SpotlightTaskModal task_id={task_id} method="PUT" text="Insert the New Values!" onClose={() => setShowEditModal(false)}/> }

      <div className="task-list">
        <AnimatedList showGradients={false} displayScrollbar items={tasks.map((task, id) => (
          <div key={task.id} className="task-container">
            <div className="task-text">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <div className="task-buttons">
              <button className="button" onClick={() => handleEdit(task.id)}><i class="fa-solid fa-pencil"></i></button>
              <button className="button" onClick={() => handleDelete(task.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))}/>
      </div>

      <button id="add-task" className="button" onClick={() => {setShowAddModal(true)}}>+</button>
      <button className="log-out"><i class="fa-solid fa-right-from-bracket"></i></button>

    </div>
  );
}

export default TaskMenu;