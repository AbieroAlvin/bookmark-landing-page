import { useState } from "react";
import error from '../assets/images/icon-error.svg'

const Contact = () => {
  const [formData, setFormData] = useState({ email: "" });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    //  Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Whoops, make sure it's an email";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      console.log("Form submitted successfully!", formData);
    } else {
      console.log("Form submission failed. Please check the errors.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full bg-blue-600 p-20 flex items-center justify-center flex-col md:mt-24 mt-12">
      <div className="text-center text-white md:w-1/2">
        <h4 className="uppercase md:mb-10 mb-6 text-xl">
          {" "}
          35,000+ already joined
        </h4>
        <h1 className="md:text-4xl text-3xl font-semibold">
          Stay up-to-date with what we’re doing
        </h1>
      </div>
      <form onSubmit={() => handleSubmit()} className="mt-8 flex md:flex-row flex-col w-full gap-3 items-center justify-center">
         <div>
          <input type="email" placeholder="Enter your email address" name="email" value={formData.email} onChange={() => handleChange()} className="p-3 rounded-md w-full"/>
          {errors.email && <div>{errors.email}</div>}
         </div>
         <button type="submit" className="hover:bg-white rounded-md text-[15px] hover:text-red-500 hover:border-[2px] hover:border-red-500 px-4 py-2  text-white bg-red-500">Contact Us</button>
      </form>
    </div>
  );
};

export default Contact;
