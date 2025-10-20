import SpotlightCard from "../SpotlightCard/SpotlightCard";
import loadingGif from './loading.gif';
import './SpotlightLoading.css'

function SpotlightLoading (props) {
    return (
        <div className="screen-container">
            <SpotlightCard className="loading-block" spotlightColor="#B19EEF">
                <img src={loadingGif} alt="Loading..."/>
                <h2>{props.text}</h2>
            </SpotlightCard>
        </div>
    );
}

export default SpotlightLoading;