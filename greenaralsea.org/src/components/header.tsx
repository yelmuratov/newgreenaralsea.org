/* eslint-disable react-hooks/exhaustive-deps */
import DrawerCp from "./drawer"
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setModal } from "../redux/reducers/paysys";

function Header() {
    const [scroll, setScroll] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem('lng') || 'en');

    const {i18n,t} = useTranslation();   

    const languageChange = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        languageChange(language);
        localStorage.setItem('lng', language);
    }, [language]);

    const location = useLocation().pathname;

    const languagesItems: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <button onClick={()=>setLanguage("en")} className={`${language==='en'?"text-[green] font-bold":''}`} rel="noopener noreferrer">
              English
            </button>
          ),
        },
        {
          key: '2',
          label: (
            <button className={`${language==='ru'?"text-[green] font-bold":''}`} onClick={()=>setLanguage("ru")} rel="noopener noreferrer" >
              Russian
            </button>
          ),
        },
        {
          key: '3',
          label: (
            <button className={`${language==='uz'?"text-[green] font-bold":''}`} onClick={()=>setLanguage("uz")} rel="noopener noreferrer" >
              Uzbek
            </button>
          ),
        },
    ];

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link className="w-full" to="/FAQ">
                    {t("nav.faq")}
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link className="w-full" to="/whereweplant">
                    {t("nav.plantingSites")}
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link className="w-full" to="/ourteam">
                    {t("nav.team")}
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link className="w-full" to="/contact">
                    {t("nav.contact")}
                </Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link className="w-full" to="/news">
                    {t("nav.news")}
                </Link>
            ),
        }
    ];

    const dispatch = useDispatch();

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });

    const handleDonation = () => {
        dispatch(setModal({modalType: 'donation', isOpen: true}));
    }
    
    return (
        <header className={`backdrop-blur-md bg-[#000]/30 md:${scroll ? 'bg-white' : 'bg-transparent'} lg:${scroll ? 'bg-white' : 'bg-transparent'}   fixed w-full z-20 top-0 start-0`}>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-transparent">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <a href="#" className="flex items-center">
                        <img src="assets/logo.png" alt="Logo" className="h-[40px] md:h-[60px]" />
                    </a>
                    <div className="flex  items-center order-3 lg:order-2">
                        <div className="donate-btns hidden lg:block  flex items-center justify-between">
                            <a href="https://www.every.org/undp/f/greenaralsea#/donate/card" target="_blank" className="relative bg-[#00c881] inline-flex items-center justify-start text-[8px] md:text-[14px]  inline-block px-4 md:px-12 py-3 overflow-hidden font-bold  group mr-4">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-1 absolute left-0 top-0 bg-[#0e2b5c] opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-2 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#0e2b5c] opacity-100 group-hover:-translate-x-8"></span>
                                <span className={`relative text-white w-full text-left  transition-colors duration-200 ease-in-out group-hover:text-white uppercase`}>usd</span>
                                <span className="absolute inset-0 "></span>
                            </a>
                            <button onClick={handleDonation} className={`relative ${scroll ? "border" : ""}  inline-flex items-center lg:md:px-12 font-bold px-4 py-3 overflow-hidden text-[8px] md:text-[14px]  bg-white hover:text-white group hover:bg-gray-50`}>
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative uppercase font-bold">uzs</span>
                            </button>
                        </div>
                        <Dropdown menu={{ items: languagesItems }} autoFocus  placement="bottomLeft" arrow>
                                <button className="text-white mt-2 order-3 roboto-bold ml-4">{<i className={`text-[20px] ${scroll ? 'text-[#fff]' : "text-[#000]"}  fa-solid fa-earth-americas`}></i>}</button>
                        </Dropdown>
                        <DrawerCp />
                    </div>
                    <div className="mt-4 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0  relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`} aria-current="page">{t("nav.home")}</Link>
                            </li>
                            <li>
                                {location==="/"?<a href="#quick" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t('home.quickFacts')}</a>:<Link to="/" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t('home.quickFacts')}</Link>}
                            </li>
                            <li>
                                {
                                    location=='/'?<a href="#tragedy" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.aralTragedy")}</a>:<Link to="/" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.aralTragedy")}</Link>
                                }
                            </li>
                            <li>
                                {
                                    location=='/'?<a href="#transforming" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.greeningInitiative")}</a>:<Link to="/" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.greeningInitiative")}</Link>
                                }
                            </li>
                            <li>
                                {
                                    location=="/"?
                                    <a href="#join" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.joinUs")}</a>:
                                    <Link to="/" className={`block py-2 pr-4 pl-3 ${scroll ? 'text-[#fff]' : "text-[#000]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.joinUs")}</Link>
                                }
                            </li>
                            <li>
                                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                                    <button className={`block ${scroll ? 'text-[#fff]' : "text-[#000]"} py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[white] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>{t("home.aboutUs")}<i className="fa-solid ml-2 fa-chevron-down"></i></button>
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