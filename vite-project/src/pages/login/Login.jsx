import "./login.scss";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello to MotivNation</h1>
          <p>
            Welcome to our community of motivated individuals! To access your
            account, please enter your login credentials below. <br />
            If you're new here, click the "sign up" button to create an account
            and join our community of <br /> like-minded individuals who are
            committed to personal growth and development.
          </p>
          <span>Dont use you have an account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
