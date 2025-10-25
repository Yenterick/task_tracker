import SpotlightCard from "../SpotlightCard/SpotlightCard";
import './SpotlightNotification.css';
import green_checkmark from "./green_checkmark.svg";


function SpotlightNotification ({message, onClose}) {
    return (
        <div className="screen-container">
            <SpotlightCard className="msg-block" spotlightColor="#B19EEF">
                <img src={green_checkmark} alt="Green Checkmark"/>
                <h2>{message}</h2>
                <button className="button" onClick={onClose}>Continue</button>
            </SpotlightCard>
        </div>
    );
}

export default SpotlightNotification;