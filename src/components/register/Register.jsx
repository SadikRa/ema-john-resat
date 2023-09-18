import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

  const {signUp} = useContext(AuthContext)

  const handleRegister = (event) =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signUp(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
           <form onSubmit={handleRegister}>
           <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name='email'
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
                    name='password'
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div>
                  <Link to={'/login'}>Already have an account john please Login</Link>
                </div>
              </div>
           </form>
            </div>
          </div>
    );
};

export default Register;