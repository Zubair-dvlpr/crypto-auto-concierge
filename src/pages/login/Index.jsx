import React, { useState } from 'react';
import Header from '../../Components/Header';
import pricingbgtop from '../../assets/images/pricebgtop.png';
import Glow from '../../assets/images/Glow.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic here
        console.log(data);
    };

    return (
        <div
            className="h-screen pt-38 items-center bg-cover bg-no-repeat relative after:content-[] after:block after:w-[376px] after:h-[376px] after:bg-[#ca19ff66] after:absolute after:bottom-0 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.2px]"
            style={{ backgroundImage: `url('${pricingbgtop}')` }}
        >
            <img src={Glow} alt="" className="absolute -z-10 top-0 left-0 h-full" />
            <Header />

            <div className="max-w-[780px] rounded-xl mx-2 md:mx-auto bg-gradient backdrop-blur-xs sm:px-10 px-3 py-10 mt-6">
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-1 leading-12">Sign In</h2>
                <p className="text-base leading-7 text-center mb-8">Hello, welcome back to your account!</p>

                <form onSubmit={handleSubmit}>
                    <label className="block mb-6">
                        <span className="block mb-4 text-lg font-semibold leading-7">Enter Email or username</span>
                        <input
                            type="email"
                            placeholder="Email or username"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="input-style"
                            required
                        />
                    </label>

                    <label className="block mb-6">
                        <span className="block mb-4 text-lg font-semibold leading-7">Enter Password</span>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="input-style"
                            required
                        />
                    </label>

                    <div className='text-right'>
                        <Link to={"/dashboard"}>
                            <button
                                type="submit"
                                className="ml- btn-style text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                            >
                                Sign In
                            </button>
                        </Link>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <p className="text-base">
                        Don’t have an account?{' '}
                        <Link to="/sign-up" className="text-[#CA19FF] font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
