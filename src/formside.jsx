import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import formstyles from "./formside.module.css";

function Formside() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    mail: "",
    mobile: "",
    check: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    username: false,
    mail: false,
    mobile: false,
    check: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newFormErrors = { ...formErrors };

    for (const field in formData) {
      if (field !== "check" && !(formData[field].trim().length > 0)) {
        newFormErrors[field] = true;
        valid = false;
      } else {
        newFormErrors[field] = false;
      }
    }
    if (!formData.check) {
      newFormErrors.check = true;
      valid = false;
    } else {
      newFormErrors.check = false;
    }

    if (valid) {
      localStorage.setItem("infodata", JSON.stringify(formData));
      navigate("/Category");
    } else {
      setFormErrors(newFormErrors);
    }
  };
  return (
    <>
      <div className= {formstyles.dis_form}>Super app</div>
      <h3 className={formstyles.acc_text}>Create your account</h3>
      <form className={formstyles.formm}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          className={formstyles.ip}
        />
        {formErrors.name && <label className={formstyles.error}>Field is required</label>}

        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="UserName"
          className={formstyles.ip}
        />
        {formErrors.username && (
          <label className={formstyles.error}>Field is required</label>
        )}

        <input
          onChange={handleChange}
          type="email"
          name="mail"
          placeholder="Email"
          className={formstyles.ip}
        />
        {formErrors.mail && <label className={formstyles.error}>Field is required</label>}

        <input
          onChange={handleChange}
          type="tel"
          name="mobile"
          placeholder="Mobile"
          className={formstyles.ip}
        />
        {formErrors.mobile && (
          <label className={formstyles.error}>Field is required</label>
        )}

        <label className={formstyles.check_text}>
          <h4 className={formstyles.h4_text}>
            <input onChange={handleChange} type="checkbox" name="check" />
            Share my registration data with Superapp
          </h4>
        </label>
        {formErrors.check && (
          <div className={ formstyles.error_tick}>
            chech this box if you want to proceed
          </div>
        )}

        <button type="submit" onClick={handleSubmit} className={formstyles.sign}>
          SIGN UP
        </button>
      </form>

      <footer className= {formstyles.footerr}>
        <div>
          <h4 className= {formstyles.agree}>
            By clicking on Sign up, you agree to Superapp
            <span className= {formstyles.terms}> Terms and <span className= {formstyles.terms}> Conditions of Use</span></span>
          </h4>
        </div>
        <div>
          <div className= {formstyles.fs}>
            To learn more about how Superapp collects, uses, shares and
            <span>
                protects
            your personal data, please read the Superapp 
                </span> 
          <span style={{ color: '#72db73'}}> Privacy Policy</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Formside;
