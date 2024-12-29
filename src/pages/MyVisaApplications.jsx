import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'; // Import SweetAlert2
import {Helmet} from "react-helmet";

const MyVisaApplications = () => {
    const { loading, setLoading, user } = useContext(AuthContext);
    const [visaApplications, setVisaApplications] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Fetch all visa applications
    useEffect(() => {
        const fetchApplications = async () => {
            
            try {
                const response = await fetch(
                    'https://visa-navigator-portal-server-chi.vercel.app/myVisaApplication',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            email: user.email,
                        },
                    }
                );
                const data = await response.json();
                setVisaApplications(data);
            } catch (error) {
                console.error('Error fetching visa applications:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchApplications();
        }
    }, [user?.email, setLoading]);

    // Handle search functionality with debounce
    useEffect(() => {
        const debounceFetch = setTimeout(() => {
            if (searchText.trim() === '') {
                // If search text is empty, refetch all visa applications
                fetch('https://visa-navigator-portal-server-chi.vercel.app/myVisaApplication', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        email: user.email,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => setVisaApplications(data))
                    .catch((error) =>
                        console.error('Error refetching visa applications:', error)
                    );
            } else {
                // Fetch filtered visa applications based on search
                fetch(
                    `https://visa-navigator-portal-server-chi.vercel.app/myVisaApplication?search=${searchText}`,{
                        method:"GET",
                        headers:{
                            'content-type':'application/json',
                            email:user.email
                        }
                    }
                )
                    .then((res) => res.json())
                    .then((data) => setVisaApplications(data))
                    .catch((error) =>
                        console.error('Error fetching search results:', error)
                    );
            }
        }, 100); // 300ms debounce time

        return () => clearTimeout(debounceFetch); // Cleanup debounce
    }, [searchText, user.email]);

    // Handle cancel functionality
    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to cancel this visa application. This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, cancel it!',
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(
                    `https://visa-navigator-portal-server-chi.vercel.app/visaApplication/${id}`,
                    {
                        method: 'DELETE',
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = visaApplications.filter(
                                (application) => application._id !== id
                            );
                            setVisaApplications(remaining);

                            // Show success alert
                            Swal.fire(
                                'Canceled!',
                                'The visa application has been canceled successfully.',
                                'success'
                            );
                        } else {
                            Swal.fire(
                                'Error!',
                                'Failed to cancel the visa application. Please try again.',
                                'error'
                            );
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire(
                            'Error!',
                            'An error occurred while canceling the visa application.',
                            'error'
                        );
                    })
                    .finally(() => setLoading(false));
            }
        });
    };

    // Handle search text change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="container mx-auto p-6">
             <Helmet>
              <title>My visa Application | Visa Navigator Portal </title>
          </Helmet>
            <h2 className="text-2xl font-bold mb-4 text-center">My Visa Applications</h2>

            {/* Search Input */}
            <div className="flex gap-5 justify-center my-10">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    className="input input-bordered w-full sm:w-2/3 md:w-1/3"
                    placeholder="Search"
                />
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                </div>
            ) : visaApplications.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visaApplications.map((application) => (
                        <div
                            key={application._id}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <img
                                src={application.countryImage}
                                alt={application.country}
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold">{application.country}</h3>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Visa Type:</strong> {application.visaType}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Processing Time:</strong> {application.processingTime}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Fee:</strong> {application.fee}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Validity:</strong> {application.validity}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Application Method:</strong>{' '}
                                {application.applicationMethod}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Applied Date:</strong> {application.appliedDate}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>Applicant's Name:</strong>{' '}
                                {`${application.firstName} ${application.lastName}`}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                <strong>Applicant's Email:</strong> {application.email}
                            </p>
                            <button
                                onClick={() => handleCancel(application._id)}
                                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                            >
                                Cancel Application
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-[200px]">
                    <p className="text-center text-3xl font-bold">
                        No visa applications found
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyVisaApplications;
