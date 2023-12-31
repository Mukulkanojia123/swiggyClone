import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dropDownText } from '../utils/redux/dropDownSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropDown, setDropdown] = useState('delhi');
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(dropDownText(dropDown));
  }, [dropDown]);

  function handleDropdown(e) {
    setDropdown(e.target.value);
  }

  return (
    <div className='sticky top-0 right-0 left-0 bg-white border border-bottom border-gray-50 p-4 z-50'>
      <div className='flex justify-around items-center'>
        <div className='flex'>
        <Link to={'/'}>  <img
            className='w-8 mr-8'
            src='https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png'
            alt='Swiggy Logo'
          />
          </Link>
          <select onChange={handleDropdown}>
            <option value='delhi'>Delhi</option>
            <option value='patna'>Patna</option>
            <option value='bangalore'>Bangalore</option>
          </select>
        </div>
        <div className='flex'>
          <div className='mr-6'><Link to={'/search'}>search</Link></div>
          <div className='mr-6'>login</div>
          <div className='mr-6'>
            <Link to={'cart'}>Cart</Link>
          </div>
          <div className='mr-6'>Offers</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
