import React, { useState } from "react";
import styles from "../forms.module.css";

function BasicSignup({user}) {


  console.log(user)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });




  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const submitHandler = async () => {
    // e.preventDefault()
    try {
const id = user?._id

console.log(id)

      const response = await fetch(user? `http://localhost:2525/api/update/user/${id}` :
        "http://localhost:2525/add/user", {
           method: user ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

     
      const userData = await response.json();
      console.log("Details entered:", userData);
    } catch (err) {
      console.error("Error:", err);
      // res.json(err)
    }
  };

  




  return (
    <>
      <form
        className={`${styles.form} ${styles.card}`}
        onSubmit={submitHandler}
      >
        <h2>Signup</h2>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name  }
          onChange={changeHandler}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email }
          onChange={changeHandler}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password  }
          onChange={changeHandler}
          required
        />
        <button type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>

    
    </>
  );
}

export default BasicSignup;
