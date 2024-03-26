import React from 'react';

function MatDetailLeave({ material, handledel }) {
  const handleLeaveClick = (e) => {
    e.preventDefault();
    handledel(material); // Pass material data to handledel function
  };

  return (
    <div className="plan">
      <div className="inner">
        <span className="pricing">
          <span>💰{material.price} <small></small></span>
        </span>
        <p className="title">{material.name}</p>
        <p className="info">{material.description}.</p>
        <ul className="features">
          <li>
            <span className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </span>
            <span><strong>{material.date}</strong></span>
          </li>
          <li>
            <span className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </span>
            <span><strong><a href={material.link}>link for lesson</a></strong></span>
          </li>
        </ul>
        <div className="action">
          <button className="button"  onClick={handleLeaveClick}>
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatDetailLeave;
