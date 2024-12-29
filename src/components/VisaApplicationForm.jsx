import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'; // Import SweetAlert2

const VisaApplicationForm = ({ onClose, visa }) => {
    const { user } = useContext(AuthContext);
    console.log(visa)

    const [formData, setFormData] = useState({
        email:user?.email || '',
        firstName: "",
        lastName: '',
        visaType: visa.visaType,
        appliedDate: new Date().toISOString().split("T")[0],
        visaFee: visa.fee
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { _id, ...filteredVisa } = visa;

        const visaApplicationData = { ...filteredVisa, ...formData };

        fetch('https://visa-navigator-portal-server-chi.vercel.app/visaApplication', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(visaApplicationData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Application Submitted',
                    text: 'Your visa application has been successfully submitted!',
                });

                // Optional: Close the form after success
                onClose();
            })
            .catch((error) => {
                console.error(error);

                // Show error alert
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'Something went wrong while submitting your application. Please try again.',
                });
            });
    };

    return (
        <div className='p-6 shadow-lg w-full rounded-lg'>
            <h2 className='text-center text-2xl font-bold mb-4'>Visa Application Form</h2>

            <form action="" onSubmit={handleSubmit} className='space-y-3'>
                <div>
                    <label htmlFor="" className='mb-4'>Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                        className='w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder='Enter Your Email'
                        readOnly
                        required
                    />
                </div>
                <div>
                    <label htmlFor="" className='mb-4'>First Name:</label>
                    <input
                        type="text"
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder='First Name'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="" className='mb-4'>Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Visa Type:</label>
                    <input
                        type="text"
                        name="visaType"
                        value={formData.visaType}
                        onChange={handleChange}
                        className='w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500'
                        readOnly
                        required
                    />
                </div>

                <div>
                    <label htmlFor="">Applied Date:</label>
                    <input
                        type="text"
                        name="appliedDate"
                        value={formData.appliedDate}
                        onChange={handleChange}
                        className='w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500'
                        readOnly
                        required
                    />
                </div>
                <data value="">
                    <label htmlFor="">Fee</label>
                    <input
                        type="text"
                        name='visaFee'
                        value={formData.visaFee}
                        onChange={handleChange}
                        className='w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-500'
                        readOnly
                    />
                </data>
                <div>
                    <input
                        type="submit"
                        value='Apply'
                        className='btn w-full bg-gradient-to-r from-orange-400 to-orange-700 text-white text-lg'
                    />
                </div>
            </form>

            <div className='text-center mt-4'>
                <button
                    onClick={onClose}
                    className='btn bg-orange-400 hover:underline hover:bg-orange-600 hover:text-white'
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default VisaApplicationForm;
