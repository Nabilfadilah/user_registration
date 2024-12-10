import Link from "next/link";
import React from "react";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const FormRegister = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex justify-between items-center">
          <h1 className="font-bold py-10 text-2xl">
            Next.js 15 MongoDB User Registration
          </h1>
        </div>

        <div className="max-w-sm  mx-auto card bg-base-300 my-4">
          <div className="card-body">
            <h1 className="card-title">Register</h1>

            <form>
              <div className="my-2">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  // {...register('name', {
                  //     required: 'Name is required',
                  // })}
                  className="input input-bordered w-full max-w-sm"
                />
                {/* {errors.name?.message && (
                            <div className="text-error">{errors.name.message}</div>
                        )} */}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  // {...register('email', {
                  //     required: 'Email is required',
                  //     pattern: {
                  //         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  //         message: 'Email is invalid',
                  //     },
                  // })}
                  className="input input-bordered w-full max-w-sm"
                />
                {/* {errors.email?.message && (
                            <div className="text-error"> {errors.email.message}</div>
                        )} */}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  // {...register('password', {
                  //     required: 'Password is required',
                  // })}
                  className="input input-bordered w-full max-w-sm"
                />
                {/* {errors.password?.message && (
                            <div className="text-error">{errors.password.message}</div>
                        )} */}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  // {...register('confirmPassword', {
                  //     required: 'Confirm Password is required',
                  //     validate: (value) => {
                  //         const { password } = getValues()
                  //         return password === value || 'Passwords should match!'
                  //     },
                  // })}
                  className="input input-bordered w-full max-w-sm"
                />
                {/* {errors.confirmPassword?.message && (
                            <div className="text-error">{errors.confirmPassword.message}</div>
                        )} */}
              </div>
              <div className="my-2">
                <button
                  type="submit"
                  disabled
                  className="btn btn-primary w-full"
                >
                  <span className="loading loading-spinner"></span>
                  Register
                </button>
              </div>
            </form>

            <div className="divider"> </div>
            <div>
              Already have an account?{" "}
              <Link className="link" href={`/signin`}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
