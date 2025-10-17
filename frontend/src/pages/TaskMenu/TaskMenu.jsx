import PixelBlast from "../../components/PixelBlast/PixelBlast";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import "./TaskMenu.css";

function TaskMenu (){

    const taskList = [{id: 1, title: "ExampleTask1", description: "ExampleDescription1", status: "pending", priority: "high"}, 
                      {id: 2, title: "ExampleTask2", description: "ExampleDescription2", status: "in proggress", priority: "low"},
                      {id: 3, title: "ExampleTask3", description: "ExampleDescription3", status: "completed", priority: "mid"},
                      {id: 4, title: "ExampleTask4", description: "ExampleDescription4", status: "pending", priority: "high"}]

    const listItems = taskList.map(task => (<li key={task.id}>
                                                <SpotlightCard spotlightColor="#B19EEF">
                                                    <p>{task.title}</p>
                                                    <p>{task.description}</p>
                                                </SpotlightCard>
                                            </li>))

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
            <div className="taskList">
                <ul></ul>
            </div>
        </div>
    );
}

export default TaskMenu