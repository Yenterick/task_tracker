import { useState } from "react";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import './SpotlightTaskModal.css'

function SpotlightTaskModal () {
    const [ title, SetTitle ] = useState("");
    const [ description, SetDescription ] = useState("")

    return (
        <div className="screen-container">
            <SpotlightCard className="modal-block" spotlightColor="#B19EEF">
            <h2>Insert a new Task:</h2>
            <label>Title</label>
            <input type="text" placeholder="Insert the task title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
            
            </SpotlightCard>
        </div>
    );
}

export default SpotlightTaskModal;