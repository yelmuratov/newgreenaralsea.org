import DrawerCp from "./drawer"
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link className="w-full" to="/FAQ">
                FAQ
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link className="w-full" to="/whereweplant">
                Where we plant?
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link className="w-full" to="/ourteam">
                Our team
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link className="w-full" to="/contact">
                Contact us
            </Link>
        ),
    }
];

function Header() {
    const [scroll, setScroll] = useState(false);
    const [language, setLanguage] = useState(['en']);

    useEffect(() => {
        languageChange(language[0]);
    }, [language]);

    const languagesItems: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <button onClick={()=>setLanguage(["en"])} className={`${language[0]==='en'?"text-[green] font-bold":''}`} rel="noopener noreferrer">
              English
            </button>
          ),
        },
        {
          key: '2',
          label: (
            <button className={`${language[0]==='ru'?"text-[green] font-bold":''}`} onClick={()=>setLanguage(["ru"])} rel="noopener noreferrer" >
              Russian
            </button>
          ),
        },
        {
          key: '3',
          label: (
            <button className={`${language[0]==='uz'?"text-[green] font-bold":''}`} onClick={()=>setLanguage(["uz"])} rel="noopener noreferrer" >
              Uzbek
            </button>
          ),
        },
    ];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });

    

    const {i18n} = useTranslation();   

    const languageChange = (lng: string) => {
        i18n.changeLanguage(lng);
    }
    
    return (
        <header className={`backdrop-blur-md bg-[#000]/30 md:${scroll ? 'bg-white' : 'bg-transparent'} lg:${scroll ? 'bg-white' : 'bg-transparent'}   fixed w-full z-20 top-0 start-0`}>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-transparent">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <img src="assets/logo.png" alt="Logo" className="h-[40px] md:h-[60px]" />
                    </a>
                    <div className="flex hidden md:hidden lg:block items-center lg:order-2">
                        <div className="donate-btns">
                            <a href="https://www.every.org/undp/f/greenaralsea#/donate/card" target="_blank" className="relative bg-[#00c881] inline-flex items-center justify-start text-[8px] md:text-[14px]  inline-block px-4 md:px-12 py-3 overflow-hidden font-bold  group mr-4">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-1 absolute left-0 top-0 bg-[#0e2b5c] opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-2 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#0e2b5c] opacity-100 group-hover:-translate-x-8"></span>
                                <span className={`relative text-white w-full text-left  transition-colors duration-200 ease-in-out group-hover:text-white uppercase`}>usd</span>
                                <span className="absolute inset-0 "></span>
                            </a>
                            <a href="#" className={`relative ${scroll ? "border" : ""}  inline-flex items-center lg:md:px-12 font-bold px-4 py-3 overflow-hidden text-[8px] md:text-[14px]  bg-white hover:text-white group hover:bg-gray-50`}>
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative uppercase font-bold">uzs</span>
                            </a>
                            <Dropdown menu={{ items: languagesItems }} placement="bottomLeft" arrow>
                                <button className="text-white roboto-bold ml-4">{<i className={`text-[20px] ${scroll ? 'text-[#fff]' : "text-[#000]"}  fa-solid fa-earth-americas`}></i>}</button>
                            </Dropdown>
                        </div>
                    </div>
                    <DrawerCp />
                    <div className="mt-4 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`} aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#quick" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>Quick facts</a>
                            </li>
                            <li>
                                <a href="#tragedy" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>Aral sea tragedy</a>
                            </li>
                            <li>
                                <a href="#transforming" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>Green iniative</a>
                            </li>
                            <li>
                                <a href="#join" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>Join us</a>
                            </li>
                            <li>
                                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                                    <a href="#" className={`block ${scroll ? 'text-[#fff]' : "text-[#000]"} py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>In addition <i className="fa-solid fa-chevron-down"></i></a>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header