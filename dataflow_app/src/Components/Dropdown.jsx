import React, { useState } from 'react';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Dropdown Symbol <span className={isOpen ? 'arrow up' : 'arrow down'}></span>
      </button>
      {isOpen && (
        <div className="dropdown-body">
          {/* Dropdown Content */}
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
