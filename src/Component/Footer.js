import React from 'react';

const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div>
            <p className='text-center'><small>Copyright &#169; {year} by to-do</small></p>
        </div>
    );
};

export default Footer;