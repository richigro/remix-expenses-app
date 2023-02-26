import { useState } from "react";
import { Link, useSearchParams } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

const AuthForm = () => {
  // const [mode] = useState("login");
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";

  const submitButtonCaption = authMode === "login" ? "Login" : "Create user";
  const toggleButtonCaption =
    authMode === "login" ? "Create a new user" : "Login with existing user";

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === "login" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitButtonCaption}</button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleButtonCaption}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
