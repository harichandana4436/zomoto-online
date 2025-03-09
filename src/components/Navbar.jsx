// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "#282c34", color: "white" }}>
      <h2>MERN App</h2>
      <div>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={{ marginRight: "10px", color: "white" }}>Login</Link>
            <Link to="/register" style={{ color: "white" }}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/home" style={{ marginRight: "10px", color: "white" }}>Home</Link>
            <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

// const Navbar1 = () => {
//   return (
//     <div>
//       <nav class="navbar bg-primary navbar-expand-lg">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">
    
//       Quick
//     </a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Contact</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

export default Navbar
