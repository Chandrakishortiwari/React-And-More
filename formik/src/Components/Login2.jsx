import React, { useState } from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  contact: "",
  email: "",
  password: "",
  cpassword: "",
};

function Login2() {
  const [submittedData, setSubmittedData] = useState([]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      setSubmittedData([...submittedData, values]); // add to table
      resetForm(); // reset form after submit
    },
  });

  const { values, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <div className="p-4">
      {/* --- FORM --- */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded shadow">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        {/* Contact Field */}
        <div className="mb-4">
          <label htmlFor="contact" className="block font-medium text-gray-700">
            Contact No
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="cpassword" className="block font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={values.cpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* --- TABLE --- */}
      {submittedData.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Contact</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Password</th>
                <th className="border px-4 py-2">Confirm Password</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{data.name}</td>
                  <td className="border px-4 py-2">{data.contact}</td>
                  <td className="border px-4 py-2">{data.email}</td>
                  <td className="border px-4 py-2">{data.password}</td>
                  <td className="border px-4 py-2">{data.cpassword}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Login2;
