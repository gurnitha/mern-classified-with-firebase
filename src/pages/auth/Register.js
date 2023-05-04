import React from "react";

const Register = () => {
  return (
    <form className="shadow rounded p-3 mt-5 form">
      <h3 className="text-center mb-3">Create An Account</h3>
      <div className="mb-3">
        <label htmlForm="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="mb-3">
        <label htmlForm="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="mb-3">
        <label htmlForm="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" name="password" />
      </div>
      <div className="mb-3">
        <label htmlForm="confirmPassword" className="form-label">
          Confirm password
        </label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
        />
      </div>
      <div className="text-center mb-3">
        <button className="btn btn-secondary btn-sm">Register</button>
      </div>
    </form>
  );
};

export default Register;
