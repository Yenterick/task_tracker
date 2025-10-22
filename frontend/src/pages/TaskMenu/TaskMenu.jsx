import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PixelBlast from "../../components/PixelBlast/PixelBlast";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import "./TaskMenu.css";

function TaskMenu() {
  const [ tasks, setTasks ] = useState([]);
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

  const taskExamples = [{title: "Test Task 1", description: "Test Description 1"}, 
    {title: "Test Task 2", description: "Test Description 2"},
    {title: "Test Task 3", description: "Test Description 3"},
    {title: "Test Task 4", description: "Test Description 4"},
    {title: "Test Task 5", description: "Test Description 5"},
    {title: "Test Task 6", description: "Test Description 6"},
    {title: "Test Task 7", description: "Test Description 7"},
    {title: "Test Task 8", description: "Test Description 8"},
    {title: "Test Task 9", description: "Test Description 9"},
    {title: "Test Task 10", description: "Test Description 10"}
  ]

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
        <AnimatedList showGradients={false} displayScrollbar items={taskExamples.map((task, id) => (
          <div key={id} className="task-container">
            <div className="task-text">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <div className="task-buttons">
              <button className="button"><i class="fa-solid fa-pencil"></i></button>
              <button className="button"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))}/>
      </div>

      <button id="add-task" className="button" onClick={() => {setShowModal(true)}}>+</button>
      <button className="log-out"><i class="fa-solid fa-right-from-bracket"></i></button>

    </div>
  );
}

export default TaskMenu;

// items={tasks.map((task, id) => (
//                         <div key={id} className="task-container">
//                             <h3>{task.title}</h3>
//                             <p>{task.description}</p>
//                             <button className="button">Edit</button>
//                             <button className="button">Delete</button>
//                         </div>
//                     ))}