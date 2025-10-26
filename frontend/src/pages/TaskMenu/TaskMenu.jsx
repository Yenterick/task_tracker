import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PixelBlast from "../../components/PixelBlast/PixelBlast";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import SpotlightTaskModal from "../../components/SpotlightTaskModal/SpotlightTaskModal";
import "./TaskMenu.css";

function TaskMenu() {
  const navigate = useNavigate();
  const [ task_id, setTask_id ] = useState();
  const [ tasks, setTasks ] = useState([]);
  const [ showAddModal, setShowAddModal ] = useState(false);
  const [ showEditModal, setShowEditModal ] = useState(false);
  const { request, loading, error } = useFetch(`http://${window.location.hostname}:5000` + "/api");

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

  const handleLogOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("ID", "");
    navigate("/login", { replace: true });
  }

  const handleStatusUpdate = async (taskId, currentStatus) => {
    const newStatus = currentStatus === "pending" ? "completed" : "pending";
    const response = await request(`/task/status/${taskId}`, "PUT", { status: newStatus });
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
          <div key={task.id} className={`task-container ${task.status === "completed" ? "completed" : ""}`}>
            <div className="task-text">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <div className="task-buttons">
                <label className="switch"><input type="checkbox" checked={task.status === "completed"} onChange={() => handleStatusUpdate(task.id, task.status)}/><span className="slider round"></span></label>
              <i id="priority-status" style={{color : task.priority === "high"? "#ff6b6b" : task.priority === "mid" ? "#ffe66d" : "#70e000" }} class="fa-solid fa-circle"></i>
              <button className="button" onClick={() => handleEdit(task.id)}><i class="fa-solid fa-pencil"></i></button>
              <button className="button" onClick={() => handleDelete(task.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))}/>
      </div>

      <button id="add-task" className="button" onClick={() => {setShowAddModal(true)}}>+</button>
      <button className="log-out" onClick={handleLogOut}><i class="fa-solid fa-right-from-bracket"></i></button>

    </div>
  );
}

export default TaskMenu;