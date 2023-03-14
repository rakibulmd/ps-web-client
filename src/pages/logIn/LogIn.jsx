import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
      <div className="absolute top-0 left-0 -z-50 text-neutral/5 text-[500px] leading-none">
        LOGIN&nbsp;LOGIN
      </div>
      <div className="">
        <div className="col-md-6">
          <div className="card border sm:min-w-[300px] md:min-w-[350px] text-center bg-primary text-base-200 mx-auto">
            <div className="card-header text-xl p-3">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group text-left">
                  <label>Email address</label>
                  <input
                    type="email"
                    className={`form-control mx-auto w-full rounded p-2 text-neutral ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="form-group mt-3 text-left">
                  <label>Password</label>
                  <input
                    type="password"
                    className={`form-control mx-auto w-full rounded p-2 text-neutral ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-error mt-8 w-full">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
