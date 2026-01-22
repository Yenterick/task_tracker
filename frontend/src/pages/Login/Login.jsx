import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PixelBlast from "../../components/PixelBlast/PixelBlast";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import SpotlightLoading from "../../components/SpotlightLoading/SpotlightLoading";
import "./Login.css";

function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ data, setData ] = useState(null);
    const [ loginError, setLoginError ] = useState(null);
    const navigate = useNavigate();

    const { request, loading, error } = useFetch(`http://${window.location.hostname}:5000` + '/api');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await request("/user/login", "POST", { email, password });

        if (response && response.success) {
            localStorage.setItem("token", response.token);
            setData(response);
            navigate("/taskMenu", { replace: true });
        } else {
            setLoginError(true);
            console.error(error);
        }
    };

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
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" placeholder="Insert your email..." value={email} onChange={(e) => setEmail(e.target.value)} maxLength={40} required/>
                <label>Password</label>
                <input type="password" placeholder="Insert your password..." value={password} onChange={(e) => setPassword(e.target.value)} maxLength={20} required/>
                {loginError && <p className="error-msg">Invalid Credentials!</p>}
                <button type="submit" className="button" disabled={loading}> {loading ? "Loading..." : "Login"} </button>
            </form>
            <span>Don't you have an account? <a href="/register">Register</a></span>
            </SpotlightCard>
            {loading && <SpotlightLoading text="Signing in..." />}
        </div>
    );
}

export default Login;
