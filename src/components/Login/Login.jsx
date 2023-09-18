import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const { logIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  
  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    logIn(email, password)
      .then(result =>{
        const logged = result.user;
        console.log(logged);
        navigate(from, {replace: true})
      })
      .catch(error =>{
        console.log(error);
      });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <form onSubmit={handleLogin}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" 
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <Link to={'/register'}>New to ema john? Please Register</Link> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
