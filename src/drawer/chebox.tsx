import React, {useState} from 'react';

function DirectionSelector({onChange}) {
  const [direction, setDirection] = useState('');

  const handleDirectionChange = (event) => {
    onChange(event.target.value);
    setDirection(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="direction"
          value="top"
          checked={direction === 'top'}
          onChange={handleDirectionChange}
        />
        Up
      </label>
      <br/>
      <label>
        <input
          type="radio"
          name="direction"
          value="bottom"
          checked={direction === 'bottom'}
          onChange={handleDirectionChange}
        />
        Down
      </label>
      <br/>
      <label>
        <input
          type="radio"
          name="direction"
          value="left"
          checked={direction === 'left'}
          onChange={handleDirectionChange}
        />
        Left
      </label>
      <br/>
      <label>
        <input
          type="radio"
          name="direction"
          value="right"
          checked={direction === 'right'}
          onChange={handleDirectionChange}
        />
        Right
      </label>
    </div>
  );
}

export default DirectionSelector;
