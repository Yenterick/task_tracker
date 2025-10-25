import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PixelBlast from "../../components/PixelBlast/PixelBlast";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import SpotlightLoading from "../../components/SpotlightLoading/SpotlightLoading";
import SpotlightNotification from "../../components/SpotlightNotification/SpotlightNotification";
import "./Register.css";

function Register (){
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ data, setData ] = useState(null);
    const [ showNotification, setShowNotication ] = useState(false);
    const navigate = useNavigate();

    const { request, loading, error } = useFetch(`http://${window.location.hostname}:5000` + '/api');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await request("/user/register", "POST", { username, email, password });

        if (response && response.success) {
            setData(response);
            setShowNotication(true);
        } else {
            console.error(error);
        }
    };

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
            {showNotification && <SpotlightNotification message="Registered succesfully!" onClose={() => navigate("/login", { replace: true })}/>}
            <SpotlightCard className="register-block" spotlightColor="#B19EEF">
                <h2>¡Welcome!</h2>
                <p>Sign up to continue</p>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={40} placeholder="Insert your email..." />
                    <label>Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength={20} placeholder="Insert your username..."/>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={20} placeholder="Insert your password..."/>
                    <button type="submit" className="button" disabled={loading}>{loading ? "Loading..." : "Register"}</button>
                </form>
                <span>Do you already have an account? <a href="/login">Login</a></span>
            </SpotlightCard>
            {loading && <SpotlightLoading text="Creating account..." />}
        </div>
    );
}

export default Register