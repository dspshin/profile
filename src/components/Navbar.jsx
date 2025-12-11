import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className='text-default-text text-[18px] font-bold cursor-pointer flex'>
                        DSP &nbsp;
                        <span className='sm:block hidden'>| Software Engineer</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-default-text" : "text-secondary"
                                } hover:text-default-text text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div
                        className='w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center gap-1'
                        onClick={() => setToggle(!toggle)}
                    >
                        <div className={`w-full h-[3px] bg-default-text rounded ${toggle ? 'rotate-45 translate-y-[7px]' : ''} transition-all`} />
                        <div className={`w-full h-[3px] bg-default-text rounded ${toggle ? 'opacity-0' : ''} transition-all`} />
                        <div className={`w-full h-[3px] bg-default-text rounded ${toggle ? '-rotate-45 -translate-y-[7px]' : ''} transition-all`} />
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
