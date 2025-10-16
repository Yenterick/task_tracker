import PixelBlast from "../../components/PixelBlast/PixelBlast";
import PixelCard from "../../components/PixelCard/PixelCard";
import "./Login.css";

function Login (){
    return (
        <div className="login-container">
            <PixelBlast
            variant="square"
            pixelSize={8}
            color='#B19EEF'
            patternScale={2}
            enableRipples
            rippleSpeed={0.5}
            speed={0.5}
            edgeFade={0.25}
            />
        </div>
    );
}

export default Login