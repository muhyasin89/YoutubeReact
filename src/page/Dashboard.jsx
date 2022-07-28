import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

import React from 'react'

const Dashboard = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken);

    const dashboard = user ? `Welcome ${user}!` : "Welcome!"

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p><Link to="/userslist">Go to the userList</Link></p>
        </section>
    )
  return content
}

export default Dashboard