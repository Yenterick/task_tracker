import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PixelBlast from "../../components/PixelBlast/PixelBlast";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import "./TaskMenu.css";

function TaskMenu() {
  const [tasks, setTasks] = useState([]);
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

      <div className="task-list">
            <AnimatedList enableArrowNavigation displayScrollbar items={tasks.map((task, id) => (
                        <div key={id} className="task-container">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <button className="button">Edit</button>
                            <button className="button">Delete</button>
                        </div>
                    ))}/>
      </div>
    </div>
  );
}

export default TaskMenu;
