import { useState } from 'react';
import validateForm from './validation';



const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(validateForm({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
   <label htmlFor="username" style={{ color: "white", fontSize: "25px", fontWeight: "bold", marginBottom: "10px" }}>Username</label>

    <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
  
    {errors.username && <p style={{ color: "red", fontSize: "25px" }}>{errors.username}</p>}
  
    <label htmlFor="password" style={{ color: "white", fontSize: "25px", fontWeight: "bold", marginBottom: "10px" }}>Password</label>

    <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
  
    {errors.password && <p style={{ color: "red", fontSize: "25px" }}>{errors.password}</p>}
  
    <button style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "red", color: "white", fontWeight: "bold", cursor: "pointer" }}>LOGIN</button>

  </form>
  
  );
};

export default Form;
