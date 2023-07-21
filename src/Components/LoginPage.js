// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import './LoginPage.css'; // Import your custom CSS file

// const LoginPage = () => {
//   const [values, setValues] = useState({
//     username: '',
//     password: '',
//     showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   // const handleClickShowPassword = () => {
//   //   setValues({ ...values, showPassword: !values.showPassword });
//   // };

//   // const handleMouseDownPassword = (event) => {
//   //   event.preventDefault();
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Check if the entered username and password are correct
//     if (values.username === 'admin' && values.password === 'password') {
//       console.log('Login successful!');
//       // Proceed with the login process or navigate to another page
//     } else {
//       console.log('Invalid username or password!');
//       // Show an error message or handle the invalid login attempt
//     }
//   };

//   const navigate = useNavigate();


//   return (
//     <div className="root">
//       <div className="paper">
//         <h5>Login</h5>
//         <form className="form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={values.username}
//             onChange={handleChange('username')}
//             required
//           />
//           <input
//             type={values.showPassword ? 'text' : 'password'}
//             placeholder="Password"
//             value={values.password}
//             onChange={handleChange('password')}
//             required
//           />
//           <div className="passwordIcon">
//             {/* <button
//               type="button"
//               onClick={handleClickShowPassword}
//               onMouseDown={handleMouseDownPassword}
//             >
//               {values.showPassword ? 'Hide' : 'Show'}
//             </button> */}
//           </div>
//           <button type="submit"  onClick={() => navigate("/welcome")}>Log In</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import WelcomeUser from './WelcomeUser'; // Import the WelcomeUserPage component
import './LoginPage.css'; // Import your custom CSS file

const LoginPage = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the entered username and password are correct
    if (values.username === 'Ayush' && values.password === 'Password@123' ) {
      setIsLoggedIn(true); // Set login status to true
    } else if (values.username ==='Ritika' && values.password ==='Password@123' ){
      setIsLoggedIn(true); // Set login status to true
    }
    else {
      alert('Invalid username or password!');
      // Show an error message or handle the invalid login attempt
    }
  };

  // If user is logged in, show the WelcomeUserPage with the username prop
  if (isLoggedIn) {
    return <WelcomeUser username={values.username} />;
  }

  return (
    <div className="root">
      <div className="paper">
        <h5>Login</h5>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={values.username}
            onChange={handleChange('username')}
            required
          />
          <input
            type={values.showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={values.password}
            onChange={handleChange('password')}
            required
          />
          <div className="passwordIcon">
            {/* <button
              type="button"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? 'Hide' : 'Show'}
            </button> */}
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
