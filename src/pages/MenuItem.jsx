import React, { useState } from 'react';

function MenuItem({ menu, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(prev => !prev);
    onAddToCart(!added);
  };

  return (
    <div className={`card ${added ? 'added' : ''}`}>
      <img src={menu.imageUrl} alt={''} />
      <h3>{menu.dishName}</h3>
      <p className='text-white'>₹{menu.price}</p>
      <button onClick={handleClick}>
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default MenuItem;
