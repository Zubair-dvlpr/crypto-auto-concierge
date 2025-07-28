import React, { useRef, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import carImg from "../../assets/images/carimg.png";
import pricingbgtop from '../../assets/images/pricebgtop.png'
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step6 from "./components/Step6";
import Step5 from "./components/Step5";
import Step8 from "./components/Step8";
import Step7 from "./components/Step7";
import Step9 from "./components/Step9";
const TransactionForm = () => {
    const [step, setStep] = useState(1); // Track current step

    const [error, setError] = useState(null);
    const stepRef = useRef();
    const [formData, setFormData] = useState({
        party: "",
        saleType: "",
        dealershipName: "",
        yearMakeModel: "",
        vehicleIdentificationNumber: "",
        purchasePrice: "",
        emailAddress: "",
        name: "",
        number: "",
        crypto1: '',
        crypto1Amount: '',
        crypto2: '',
        crypto2Amount: '',
        totalCAD: '',
        billingName: "",
        billingNumber: "",
        billingEmail: "",
        payoutMethod: '',
        conciergeServices: [],
        meetingDate: null,
        meetingTime: null,
        meetingLocation: '',
        additionalNotes: "",
        registration: false,
        lienCheck: false,
        // Add more fields as needed for other steps
    });

    // Titles for each step
    const stepTitles = {
        1: "Let Us Do The Work — Just Answer A Few Quick Questions",
        2: "Let Us Do The Work — Just Answer A Few Quick Questions",
        3: "Provide Additional Information For Processing",
        4: "Let Us Do The Work — Just Answer A Few Quick Questions",
        5: "Let Us Do The Work — Just Answer A Few Quick Questions",
        6: "Let Us Do The Work — Just Answer A Few Quick Questions",
        7: "Select How You’d Like to Receive Payment for Your Vehicle",
        8: "Choose a Date, Time & CAC Location for the Appointment",
        9: "Finalize and Submit Your Information",
    };

    const nextStep = async () => {
        if (stepRef.current?.validate) {
            const result = await stepRef.current.validate();
            if (result !== true) {
                setError(result);
                return;
            }
        }

        setError(null);
        if (step < 9) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        if (stepRef.current?.validate) {
            const result = await stepRef.current.validate();
            if (result !== true) {
                setError(result);
                return;
            }
        }

        setError(null);
        console.log("Form Data Submitted:", formData);
    };


    const renderStep = () => {
        const props = { data: formData, setData: setFormData };
        switch (step) {
            case 1: return <Step1 ref={stepRef} {...props}/>;
            case 2: return <Step2 ref={stepRef} {...props} />;
            case 3: return <Step3 ref={stepRef} {...props} />;
            case 4: return <Step4 ref={stepRef} {...props} />;
            case 5: return <Step5 ref={stepRef} {...props} />;
            case 6: return <Step6 ref={stepRef} {...props} />;
            case 7: return <Step7 ref={stepRef} {...props} />;
            case 8: return <Step8 ref={stepRef} {...props} />;
            case 9: return <Step9 ref={stepRef} {...props} />;
            default: return null;
        }
    };


    return (
        <div className='pt-34 bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
            <div className="relative my-12  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:bottom-0 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]">
                <div className="max-w-[1240px] mx-auto gap-5 w-full flex flex-col sm:flex-row  rounded-lg overflow-hidden shadow-lg">
                    {/* Left Column: Multistep Form */}
                    <div className="w-full sm:w-1/2 bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] flex flex-col justify-between rounded-xl  p-6">
                        <div>
                            <h2 className="text-[#00D2FF] font-semibold  text-xl leading-7 mb-2">
                                Book Appointment
                            </h2>
                            <h1 className="text-2xl font-bold capitalize leading-10 mb-4">{stepTitles[step]}</h1>
                            <p className="text-[#00D2FF] font-semibold  text-xl leading-7 mb-3.5">
                                Step {step}/9
                            </p>
                            {renderStep()}
                        </div>

                        <div>
                            {error && (
                                <div className="text-red-500 font-medium">
                                    {error}
                                </div>
                            )}
                            <div className="mt-6 flex justify-between">
                                <button
                                    onClick={prevStep}
                                    disabled={step === 1}
                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                {step === 9 ? (
                                    <button
                                        onClick={handleSubmit}
                                        className="btn-style"
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        onClick={nextStep}
                                        className="btn-style"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </div>



                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full sm:w-1/2">
                        <img
                            src={carImg} // Replace with actual image URL
                            alt="Form Illustration"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionForm;