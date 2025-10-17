import PixelBlast from "../../components/PixelBlast/PixelBlast";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import "./Login.css";

function Login (){
    return (
        <div className="login-page">
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
            <SpotlightCard className="login-block" spotlightColor="#B19EEF">
                <h2>¡Welcome Back!</h2>
                <p>Sign in to continue</p>
                <label>Username</label>
                <input type="email" name="username" id="username" placeholder="Insert your email..." />
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Insert your password..."/>
                <button className="button">Login</button>
                <span>Don't you have an account? <a href="">Register</a></span>
            </SpotlightCard>
        </div>
    );
}

export default Login