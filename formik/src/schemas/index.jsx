import * as Yup from 'yup';


 const loginSchema = Yup.object({
    name: Yup.string().min(5).max(15).required("please Inter your name"),
    contact: Yup.string().matches(/^[0-9]{10}$/, "Please enter a valid 10-digit contact number").required("Contact number is required"),
    email: Yup.string().email().required("please Inter your email"),
    password: Yup.string().min(8).required("please enter your password & minimum 8 characters"),
    cpassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password Not matched"),
})

export default loginSchema;