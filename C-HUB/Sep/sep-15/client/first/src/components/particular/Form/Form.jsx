// import React, { useState } from "react";
// import styles from "./Form.module.css";

// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       const data = fetch("http://localhost:2525/add/user", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const res = res.json(data);
//       console.log(res);
//     } catch (error) {
//       res.json(error);
//     }
//   };

//   return (
//     <>
//       <div className={styles.form}>
//         <h2>Signup Form</h2>
//         <form className={styles.cardsignup} onSubmit={handleSubmit}>
//           <label>name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label>email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label>password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Form;



import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = fetch("http://localhost:2525/show/data", {
      });
      const res = res.json(data);
      console.log(res);
    } catch (error) {
      res.json(error);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h2>Signup Form</h2>
        <form className={styles.cardsignup} onSubmit={handleSubmit}>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Form;

