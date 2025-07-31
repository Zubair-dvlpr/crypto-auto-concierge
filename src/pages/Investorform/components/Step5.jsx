import React, { forwardRef, useImperativeHandle } from "react";
import { GoDotFill } from "react-icons/go";

const Step5 = forwardRef(({ data, setData }, ref) => {
  const questions = [
    {
      key: "registeredWithFintrac",
      question: "Is your business registered with FINTRAC?",
    },
    {
      key: "hasKycAmlPolicy",
      question: "Does your business have a current KYC/AML policy in place?",
    },
    {
      key: "canProvideComplianceDocs",
      question: "Are you able to provide compliance documentation upon request?",
    },
  ];

  const yesNoOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  useImperativeHandle(ref, () => ({
    validate: () => {
      for (let q of questions) {
        if (!data[q.key]) {
          return `Please answer the question: "${q.question}"`;
        }
      }
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Compliance Information</h3>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.key}>
            <h4 className="text-lg font-semibold mb-3 leading-8 text-[#fffffff1]">
              {q.question}
            </h4>
            <div className="flex gap-8">
              {yesNoOptions.map((option) => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={q.key}
                    value={option.value}
                    checked={data[q.key] === option.value}
                    onChange={(e) => setData({ ...data, [q.key]: e.target.value })}
                    className="hidden"
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                      data[q.key] === option.value
                        ? "border-[#00D2FF]"
                        : "border-[#00D2FF]"
                    }`}
                  >
                    {data[q.key] === option.value && (
                      <GoDotFill className="text-[#00D2FF] text-base" />
                    )}
                  </span>
                  <span className="ml-2.5 font-poppins text-base font-medium leading-8">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Step5;
