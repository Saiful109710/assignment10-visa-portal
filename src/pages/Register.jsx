import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {
  const {
    loading,
    setLoading,
    error,
    setError,
    success,
    setSuccess,
    handleRegister,
    handleGoogleLogIn,
    handleLogIn,
    handleLogOut,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      return setError("Password should be more than 6 characters.");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password should have at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password should have at least one uppercase letter.");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    handleRegister(email, password)
      .then((res) => {
        console.log(res.user);
        const creationTime = res?.user?.metadata?.creationTime;

        const userInfo = { name, email, photoUrl, creationTime };

        fetch("https://visa-navigator-portal-server-chi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        setLoading(false);
        toast.success("Registration successful!");

        navigate("/");
      })
      .catch((err) => {
        setError(err.message.split("/")[1]);
        toast.error(err.message.split("/")[1]);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Helmet>
              <title>Register | Visa Navigator Portal </title>
          </Helmet>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

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

          <div>
            <label className="block text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Login
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

export default Register;
