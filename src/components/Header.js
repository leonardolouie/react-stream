import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
    <div className='ui secondary pointing menu'>
          <Link to='/' className='item'>Streamy</Link>
        <div className='right menu'>
            All Streams
        </div>
     </div>
   )
}

export default Header;