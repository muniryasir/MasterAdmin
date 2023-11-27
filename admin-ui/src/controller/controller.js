import Login from "../registration/login";
import Signup from "../registration/signup";
import Forgotpassword from "../registration/forgot_password";
import Dashboard from "../landing_page/dashboard"

// import Login from "../registration/signup";
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom';
import ImageLibrary from "../library/image_library";


// function controller() {
//     console.log("came here")
//     return (<Login></Login>);
// }   
const controller = () => {
  return (
  <BrowserRouter>
  {/* <nav> */}
    
    {/* <Link to="/login">Login</Link> |{" "} */}
    
  {/* </nav> */}
  
  <Routes>
  
  <Route path="/" element={<Login />} />
  <Route path="signup" element={<Signup />} />
  <Route path="forgotpassword" element={<Forgotpassword />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="imagelibrary" element={<ImageLibrary />} />

  
  </Routes>
</BrowserRouter>
    )
  };

export default controller;


