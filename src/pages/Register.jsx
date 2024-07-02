import { useFormik } from "formik";
import "./Pages.css";
import { useState } from "react";

import { FaUserPen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import userServices from "../services/userServices";
import { Link } from "react-router-dom";
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
  return errors;
};
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: () => {
      userServices
        .registerUser(
          formik.values.firstName,
          formik.values.lastName,
          formik.values.email,
          formik.values.password
        )
        .then((response) => {
          if (response.status === 201) {
            alert(response.data.message);
            formik.resetForm();
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="wrapper">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="input-container">
          <FaUserPen className="icon" />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            placeholder="First Name:"
            onChange={formik.handleChange}
          />
        </div>

        <div className="input-container">
          <FaUserPen className="icon" />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="Last Name:"
          />
        </div>

        <div className="input-container">
          <MdEmail className="icon" />
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email:"
          />
        </div>

        <div className="password-container">
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password:"
            />
          </div>
          <div className="password-icon-container">
            {showPassword ? (
              <IoMdEye className="eye-icon" onClick={togglePassword} />
            ) : (
              <IoMdEyeOff className="eye-icon" onClick={togglePassword} />
            )}
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
