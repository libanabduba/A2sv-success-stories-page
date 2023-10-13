import React from 'react'
import logo from '../images/logo.png';

const links = [
    {name: 'Home', link: '/'},
    {name: 'Teams', link: '/'},
    {name: 'Success Stories', link: '/'},
    {name: 'About Us', link: '/'},
    {name: 'Get Involved', link: '/'},
]

const Header = () => {
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
            <div className='flex text-4xl h-15 w-40 gap-2'>
                <img src= '/a2sv_logo.svg'  alt="" />
            </div>
            
        <ul className='md:flex pl-9 md:pl-0'>
            {links.map((link) => (
                <li className='font-semibold my-7 md:my-0 md:ml-8'>
                    <a href={link.link}>{link.name}</a>
                </li>
            ))}
        </ul>
        <button className='btn bg-blue-500 text-white py-2 px-6 rounded'>Donate</button>
        </div>

        
        

    </div>
  );
}

export default Header