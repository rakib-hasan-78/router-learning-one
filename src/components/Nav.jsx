import React, { useState } from 'react';
import Link from './Link';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


const Nav = () => {
    const [open , setOpen] = useState(false);
    const navHandler = (e)=>{
        e.preventDefault();
        setOpen(!open);
    }
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Our Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/dashboard", name: "Dashboard" },
        { id: 6, path: "*", name: "Not Found" } 
      ];
        
    return (
        <nav className={`w-full flex flex-col lg:flex-row space-x-5 p-5 bg-green-300 relative`}>
            <div 
            className='cursor-pointer w-full lg:w-auto'
            onClick={navHandler}>
            {open? <IoMdClose className='text-4xl text-red-500 md:hidden' /> : <HiMenuAlt1 className='text-4xl text-red-500 md:hidden'/> 
               }
            </div>
            <ul className={` flex sm:space-x-0 space-y-4 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row mt-5 lg:mt-0 absolute lg:static bg-lime-600 lg:bg-transparent top-14 -left-5 w-full py-3 min-h-screen lg:min-h-max ${open ? '' : 'hidden lg:flex' }`}>
                {
                    routes.map(route=>(
                        
                            <Link key={route.id} route={route} />
                        
                    ))
                }

            </ul>
        </nav>
    );
};

export default Nav;