import React from 'react';
import Banner from '../Banner/Banner';
const Header = () => {
    return (
        <div className='Header'>
            <Banner 
                image={'batiments1.png'}
                class_banner={'max'}
            />
            <Banner 
                image={'ecole1.png'} 
                class_banner='min'
            />
        </div>
    );
};

export default Header;