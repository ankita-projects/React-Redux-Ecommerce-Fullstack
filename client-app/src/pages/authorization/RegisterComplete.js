import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(window.localStorage.getItem("emailForRegistration"));
    console.log(window.location.href);
    console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // password validation
    if(!email || !password) {
      toast.error("Email and password is required");
      return;
    }

    if(password.length<6) {
      toast.error("Password must be at least 6 character long");
      return;
    }

    try{
      const result = await auth.signInWithEmailLink(email, window.location.href);
      console.log("Result", result);
    
        if (result.user.emailVerified) {
          // remove user email fom local storage
          window.localStorage.removeItem("emailForRegistration");
          // get user id token
          let user = auth.currentUser;
          await user.updatePassword(password);   //update the user with password
          const idTokenResult = await user.getIdTokenResult();
          // redux store
          console.log("user", user, "idTokenResult", idTokenResult);
          // redirect
          history.push("/");
        }
    }
    catch(error){
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistartionForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoFocus
      />
      <br></br>
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br></br>
      <button type="submit" className="btn btn-raised">
        Complete Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete Register</h4>

          {completeRegistartionForm()}
        </div>
      </div>
    </div>
  );
};
export default RegisterComplete;
