import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
        userType: 'Seller',
    });

    // Inside ContactForm component
    const userTypeOptions = ["Seller", "Buyer", "Both", "General Inquiry"];

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length) {
            setErrors(formErrors);
        } else {
            console.log('Form Submitted:', formData);
            setErrors({});
            // Optionally clear form
            // setFormData({ fullName: '', phoneNumber: '', email: '', subject: '', message: '', userType: 'Seller' });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className=" rounded-xl max-w-4xl mx-auto space-y-6"
        >
            <h2 className="text-3xl font-bold leading-12 ">Send Us a Message</h2>

            <div className="grid md:grid-cols-2 gap-6">

                <div className='space-y-6'>
                    <div>
                        <label className="block label mb-1">Your Full Name</label>
                        <input
                            name="fullName"
                            type="text"
                            placeholder="Enter Name"
                            className="input-style"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className="block label mb-1">Your Phone Number</label>
                        <input
                            name="phoneNumber"
                            type="text"
                            placeholder="Enter Phone"
                            className="input-style"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>
                </div>

                <div>
                    <label className="block label mb-1">Enter Subject</label>
                    <textarea
                        name="subject"
                        type="text"
                        rows={6}
                        placeholder="Enter Subject"
                        className="input-style"
                        value={formData.subject}
                        onChange={handleChange}
                    > </textarea>
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>



                <div className='space-y-6'>
                    <div>
                        <label className="block label mb-1">Your Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            className="input-style"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                   
                        <CustomSelect
                            label="Are You a"
                            options={userTypeOptions}
                            selected={formData.userType}
                            onChange={(val) =>
                                setFormData((prev) => ({ ...prev, userType: val }))
                            }
                        />
                </div>



                <div>
                    <label className="block label mb-1">Enter Message</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Enter Message"
                        className="input-style"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>



            </div>

            <div>
                <button
                    type="submit"
                    className="w-full btn-style"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
