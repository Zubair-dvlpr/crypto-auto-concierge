import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: '',
        userType: 'Crypto Buyer – Looking to Purchase a Vehicle',
    });

    const userTypeOptions = [
        "Crypto Buyer – Looking to Purchase a Vehicle",
        "Seller – Accepting Cash or Crypto for My Vehicle",
        "Dealership – Interested in Accepting Crypto Payments",
        "Private Party – Selling or Buying with CAC Help",
        "Business Partner / Vendor",
        "Investor / Strategic Collaborator",
        "Returning Client / Ongoing Deal",
        "General Inquiry / Learning About CAC",
    ];

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
            // Optionally reset form
            // setFormData({ fullName: '', phoneNumber: '', email: '', message: '', userType: userTypeOptions[0] });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl max-w-4xl mx-auto space-y-6"
        >
            <h2 className="text-3xl font-bold leading-12">Send Us a Message</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
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
                        label="Are You A"
                        options={userTypeOptions}
                        selected={formData.userType}
                        onChange={(val) =>
                            setFormData((prev) => ({ ...prev, userType: val }))
                        }
                    />
                </div>

                <div className="space-y-6 ">
                    <label className="block label mb-1">Enter Message</label>
                    <div className='md:h-[91%] bg-[#ffffff1a] rounded-lg'>

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Enter Message"
                            className="input-style h-full"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

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
