import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";

import "./sidebar.css";

export default () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  function SignOut() {
    dispatch(signOut);
  }

  return (
    <div className="sidebar">
      <Link className="nav-link" to="/">
        <h1 className="brand">Bug Tracker</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-link menu-item">
            Dashboard
          </Link>
        </li>
        <hr className="gradient-hr"></hr>
        <li>
          <Link to="/viewbugs" className="nav-link menu-item" href="#">
            View Bugs
          </Link>
        </li>
        <hr className="gradient-hr"></hr>
        {auth.admin && (
          <li>
            <Link to="/createbug" className="nav-link menu-item">
              Create Bug
            </Link>
          </li>
        )}
        {auth.admin && <hr className="gradient-hr"></hr>}
      </ul>
      <button className="nav-link logout" onClick={SignOut}>
        Log Out
      </button>
    </div>
  );
};
