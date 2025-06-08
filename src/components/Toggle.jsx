import React from 'react';

const Toggle = ({ isOn, onToggle }) => {
  return (
    <button
      type="button"
      className={`toggle ${isOn ? 'toggle-on' : 'toggle-off'}`}
      onClick={onToggle}
      aria-pressed={isOn}
    >
      <span className="toggle-slider" />
    </button>
  );
};

export default Toggle;
