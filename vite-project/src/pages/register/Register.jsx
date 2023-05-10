import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>MotivNation</h1>
          <p>
            Welcome to our community of motivated individuals! To access your
            account, please enter your login credentials below. <br />
            If you're new here, click the "sign up" button to create an account
            and join our community of <br /> like-minded individuals who are
            committed to personal growth and development.
          </p>
          <span>Dont use you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
