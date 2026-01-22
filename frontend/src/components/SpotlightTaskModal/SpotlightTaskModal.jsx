import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import './SpotlightTaskModal.css'

function SpotlightTaskModal ({ onClose, method, text, task_id }) {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ priority, setPriority ] = useState("mid");

    const { request, loading, error } = useFetch(`http://${window.location.hostname}:5000` + '/api');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (method == "POST"){
            const response = await request(`/task/`, "POST", { title, description, priority })
        } else if (method == "PUT"){
            const response = await request(`/task/${task_id}`, "PUT", { title, description, priority });
        }

        onClose();

        setTitle("");
        setDescription("");
        setPriority("mid");

        if (!response || !response.success) {
            console.error(error);
        }
    };

    return (
        <div className="screen-container">
            <SpotlightCard className="modal-block" spotlightColor="#B19EEF">
            <form onSubmit={handleSubmit}>
                <h2>{text}</h2>
                <label>Title</label>
                <input type="text" placeholder="Insert a title..." value={title} onChange={(e) => setTitle(e.target.value)} maxLength={20} required/>
                <label>Description</label>
                <input type="text" placeholder="Insert a description..." value={description} onChange={(e) => setDescription(e.target.value)} required/>
                <label>Priority</label>
                <div className="priority-group">
                    <label className={priority === "high" ? "selected high" : ""}><input type="radio" name="priority" value="high" checked={priority === "high"} onChange={(e) => setPriority(e.target.value)}/><span>High</span></label>
                    <label className={priority === "mid" ? "selected mid" : ""}><input type="radio" name="priority" value="mid" checked={priority === "mid"} onChange={(e) => setPriority(e.target.value)}/><span>Mid</span></label>
                    <label className={priority === "low" ? "selected low" : ""}><input type="radio" name="priority" value="low" checked={priority === "low"} onChange={(e) => setPriority(e.target.value)}/><span>Low</span></label>
                </div>
                {method == "POST" && <button type="submit" className="button" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>}
                {method == "PUT" && <button type="submit" className="button" disabled={loading}>{loading ? "Editing..." : "Edit"}</button>}
                <button id="close-btn" className="button" onClick={onClose}>Cancel</button>
            </form>
            </SpotlightCard>
        </div>
    );
}

export default SpotlightTaskModal;