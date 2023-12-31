// import React, { Component } from 'react';


// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       authToken: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     // Perform login API call with email and password
//     // using fetch:
//     fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username: email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Token:', data.token); 
//         if ('token' in data) {
//           // Display success message
//           alert('Successfully logged in!');

//           //trial
//           this.setState({ authToken: data.token });
//           // Redirect or perform any necessary actions
//           this.props.handleLogin(true);
//         } else {
//           // Handle login error, display error message
//           alert('Invalid username or password');
//         }
//       })
//       .catch((error) => {
//         // Handle error
//         console.error(error);
//       });
//   };

//   handleLogout = () => {
//     // Clear the authentication token from the state
//     this.setState({ authToken: '' });

//     // Perform any necessary logout actions, such as redirecting or updating the login status
//     this.props.handleLogin(false);
//   };
  

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//         }}
//       >
//         <form
//           style={{
//             border: '1px solid black',
//             padding: '20px',
//             borderRadius: '5px',
//             width: '400px',
//           }}
//           onSubmit={this.handleSubmit}
//         >
//           <h3>Log In</h3>
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Log in
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             <a href="/forgot-password">Forgot password?</a>
//           </p>
//         </form>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Perform login API call with email and password
    // using fetch:
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Token:', data.token); 
        if ('token' in data) {
          // Display success message
          alert('Successfully logged in!');


          //setEmail
          localStorage.setItem('email', email);
          // Set the authToken in local storage
          localStorage.setItem('authToken', data.token);
          console.log('Stored Token:', data.token);
          

          
          // Redirect or perform any necessary actions
          this.props.handleLogin(data.token);
        } else {
          // Handle login error, display error message
          alert('Invalid username or password');
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <form
          style={{
            border: '1px solid black',
            padding: '20px',
            borderRadius: '5px',
            width: '400px',
          }}
          onSubmit={this.handleSubmit}
        >
          <h3>Log In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/forgot-password">Forgot password?</a>
          </p>
        </form>
      </div>
    );
  }
}
