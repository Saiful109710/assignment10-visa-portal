import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
              <Helmet>
              <title>Error | Visa Navigator Portal </title>
          </Helmet>
            <div className="text-center">
                {/* Error Code */}
                <h1 className="text-9xl font-extrabold text-red-500">404</h1>
                {/* Error Message */}
                <h2 className="text-4xl font-semibold text-gray-800 mt-4">
                    Oops! Page Not Found
                </h2>
                {/* Error Description */}
                <p className="text-gray-600 mt-2">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                {/* Redirect Button */}
                <Link to="/" className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all">
                    Go Back to Home
                </Link>
            </div>
          
        </div>
    );
};

export default ErrorPage;
