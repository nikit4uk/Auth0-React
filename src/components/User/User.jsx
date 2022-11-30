import React from "react";
import Spinn from '../Spinn/Spinn';
import { useAuth0 } from "@auth0/auth0-react";

const User = (name) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className='container'>
        <Spinn />
      </div>);
  }

  return (
    isAuthenticated && (
      <div className='container'>
        <h2>Hello {user.name}</h2>
      </div>
    ) || (
      <div className='container'>
        <h2>Please Log in</h2>
      </div>
    )
  );
};

export default User;