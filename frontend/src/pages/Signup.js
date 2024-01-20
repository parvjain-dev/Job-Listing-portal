//without redux approach

import React, { useState } from "react";
// import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './SignUp.css'
// import "../../styles/AuthStyles.css";
const Signup = () => {
  const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", {
        firstName,
        lastName,
        email,
        password,
      
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="firstName">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your firstName"
              required
              autoFocus
            />
          </div>
          <div className="firstName">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your lastName"
              required
              autoFocus
            />
          </div>
          <div className="firstName">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="firstName">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;





//tried using redux approach but not working 



// import  React, { useEffect, useState } from 'react'
// import { FaUser } from "react-icons/fa";
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { useDispatch, useSelector } from "react-redux";
// import { register,clearErrors } from '../redux/actions/userAction';
// import { Link } from "react-router-dom";
// import { useAlert, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// // Define your alert options (customize as needed)
// const alertOptions = {
//   timeout: 5000,
//   position: 'bottom center',
// };

// const Signup = ({history}) => {
   
//   const dispatch =useDispatch();
//   const alert= useAlert()


//   const {loading,error,isAuthenticated
//   }= useSelector((state)=>state.signUp)
//  const [formData, setformData] = useState({
//    firstName: "",
//    lastName:'',
//    email:'',
//    password:''
//  });
//   const { firstName, lastName, email, password } = formData;

// const onChange=(e)=>{
//   setformData((prevState)=>({
//     ...prevState,
//     [e.target.name]: e.target.value
//   }))
// }
// const onSubmit = (e) => {
//    e.preventDefault();

//    const myForm = new FormData();

//    myForm.set("firstName", firstName);
//     myForm.set("lastName", lastName);
//    myForm.set("email", email);
//    myForm.set("password", password);
  
//    dispatch(register(myForm));

  
// };
//  useEffect(() => {
//    if (error) {
//      alert.error(error);
//      dispatch(clearErrors());
//    }

//    if (isAuthenticated) {
//      history.push('/');
//    }
//  }, [dispatch, error, alert, history, isAuthenticated]);
//   return (
//     <>
//       <Navbar />
//       <section className="heading">
//         <h1>
//           <FaUser /> Register
//         </h1>
//         <p>Please create an account</p>
//       </section>

//       <section className="form">
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               placeholder="Enter your firstName"
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               name="lastName"
//               value={lastName}
//               placeholder="Enter your lastName"
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={password}
//               placeholder="Enter password"
//               onChange={onChange}
//             />
//           </div>

//           <div className="form-group">
//             <button type="submit" className="btn btn-block">
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </section>
//       <Footer />
//     </>
//   );
// }

// // Wrap only the Signup component with the AlertProvider
// const WrappedSignup = () => {
//   return (
//     <AlertProvider template={AlertTemplate} {...alertOptions}>
//       <Signup />
//     </AlertProvider>
//   );
// };