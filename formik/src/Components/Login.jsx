import React from "react";
import { useFormik } from "formik";
import loginSchema from '../schemas';

const initialValues = {
  name: "",
  contact: "",
  email: "",
  password: "",
  cpassword: ""
};

function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm(); // Reset form after submit
    }
  });

  return (
    <div>
      <div className="p-3 m-4 gap-2">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Contact */}
          <div className="mb-5">
            <label htmlFor="contact" className="block mb-2 text-base font-medium text-gray-900">Contact No</label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
            {errors.contact && touched.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="name@example.com"
              required
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label htmlFor="cpassword" className="block mb-2 text-base font-medium text-gray-900">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              required
            />
            {errors.cpassword && touched.cpassword && (
              <p className="text-red-500 text-sm mt-1">{errors.cpassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
