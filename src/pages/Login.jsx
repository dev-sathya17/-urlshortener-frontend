import { useFormik } from "formik";
import "./Pages.css";
import { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";
const validate = (values) => {
  const errors = {};
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: () => {
      userServices
        .login(formik.values.email, formik.values.password)
        .then((response) => {
          if (response.status === 200) {
            alert(response.data.message);
            formik.resetForm();
            navigate("/dashboard");
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
        <h3>Sign In</h3>
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
          {showPassword ? (
            <IoMdEye className="eye-icon" onClick={togglePassword} />
          ) : (
            <IoMdEyeOff className="eye-icon" onClick={togglePassword} />
          )}
        </div>
        <div className="button-container">
          <button className="signup-button" type="submit">
            SIGN IN
          </button>
          <p>
            Do not have an Account? <span>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
