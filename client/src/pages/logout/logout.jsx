import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './logout.scss';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login"); 
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
