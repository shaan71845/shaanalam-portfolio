import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/GlobalState";
import CircularProgress from "@material-ui/core/CircularProgress";
import LoadingInstagram from "./LoadingInstagram";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // To get the data from the Context
  const {
    login,
    loginWithGoogle,
    isPageLoading,
    setIsPageLoading,
  } = useContext(Context);

  useEffect(() => {
    setIsPageLoading(true);
  }, []);

  const handlelogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    login(
      email,
      password,
      () => history.push("/home"),
      () => setIsLoading(false)
    );
  };

  const handleGoogleLogin = () => {
    console.log("executed");
    loginWithGoogle(() => history.push("/set-profile"));
  };

  // To show a loading page when page loads on re-authentication
  if (isPageLoading) {
    return <LoadingInstagram />;
  }

  return (
    <div className="login__container">
      <div className="hero__bg">
        <img src="/assets/images/insta_hero_bg.png" alt="Hero bg" />
      </div>
      <div className="form__area">
        <div className="form">
          <img src="/assets/images/insta_logo.png" alt="Instagram Logo" />
          <form onSubmit={handlelogin}>
            <div className="form__field">
              <input
                type="email"
                id="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="form__field">
              <input
                type="password"
                id="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="Password">Password</label>
            </div>
            <button className="primary-insta-btn" disabled={isLoading}>
              {!isLoading ? (
                "Log In"
              ) : (
                <CircularProgress size={20} color="inherit" />
              )}
            </button>
            <div className="google__login">
              <button className="btn__authGoogle" onClick={handleGoogleLogin}>
                Log in with Google
              </button>
            </div>
            <a href="#!" className="forgotPassword">
              Forgot Password?
            </a>
          </form>
        </div>
        <div className="signup__area">
          <p>
            Don't have and account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <p className="gettheapp">Get the App</p>
        <div className="stores">
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="App Store"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6A647A9F-A56E-4159-9B48-90D97AD8E20D%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="Play Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
