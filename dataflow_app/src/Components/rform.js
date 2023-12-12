import React from 'react';
import './Form.css'; // Import your CSS file for styling

const rform = () => {
  return (
    <div className="container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="hostname">Hostname:</label>
          <input type="url" id="hostname" name="hostname" placeholder="Enter hostname URL" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter password" />
        </div>
      </form>
    </div>
  );
};

export default rform;
