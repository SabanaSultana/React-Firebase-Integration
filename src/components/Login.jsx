import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    messg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      // Handle form submission logic (e.g., send data to an API)
      const { name, email, phone, messg } = formData;
      
      if (name && email && phone && messg) {
        const response = await fetch(
          "https://react-firbase-learning-default-rtdb.firebaseio.com/react-firbase-learning.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              messg,
            }),
          }
        );

        if (response) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            messg: "",
          });
          alert("data stored successfully");
        }
      } else {
        alert("pls fill all the data ");
      }
    };
 

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" method="POST">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="messg"
            value={formData.messg}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
