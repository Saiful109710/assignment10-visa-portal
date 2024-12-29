import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { error, setError, loading, setLoading, handleLogIn, handleGoogleLogIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogIn(email, password)
      .then((res) => {
        toast.success("Logged in successfully!");
        setLoading(false);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
        setError(err.message);
        setLoading(false);
      });
  };

  const handleGoogleLogInBtn = () => {
    handleGoogleLogIn()
      .then((res) => {
        console.log(res.user);
        setLoading(false);
        toast.success("Logged in successfully!");

        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
        <Helmet>
              <title>Signin | Visa Navigator Portal </title>
          </Helmet>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            New here?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogInBtn}
            className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            <FaGoogle className="mr-2" /> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
