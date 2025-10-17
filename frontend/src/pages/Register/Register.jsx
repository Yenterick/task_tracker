import PixelBlast from "../../components/PixelBlast/PixelBlast";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import "./Register.css";

function Register (){
    return (
        <div className="register-page">
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
            <SpotlightCard className="register-block" spotlightColor="#B19EEF">
                <h2>¡Welcome!</h2>
                <p>Sign up to continue</p>
                <label>Email</label>
                <input type="email" name="username" id="username" placeholder="Insert your email..." />
                <label>Username</label>
                <input type="text" name="username" id="username" placeholder="Insert your username..."/>
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Insert your password..."/>
                <button className="button">Register</button>
                <span>Do you already have an account? <a href="/login">Login</a></span>
            </SpotlightCard>
        </div>
    );
}

export default Register