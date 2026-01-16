import React from 'react'
import abstract from "../assets/abstract.png"
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {

    const logoUrl = new URL(import.meta.env.VITE_URL_LOGO, import.meta.url).href;
    const navigate = useNavigate();
    const location = useLocation();

    const menuFooter = [
       {
        wrapMenu : "Menu",
        menu: [
            {
                name: "Home",
                to: "home"
            },
            {
                name: "About",
                to: "about-us"
            },
            {
                name: "Product",
                to: "product"
            },
            {
                name: "Testimonials",
                to: "testimonials"
            }
        ]
       },
       {
        wrapMenu : "Legal",
        menu: [
            {
                name: "Terms",
                to: "terms"
            },
            {
                name: "Privacy",
                to: "privacy"
            },
            {
                name: "Cookies",
                to: "cookies"
            },
            {
                name: "License",
                to: "license"
            }
        ]
       }
    ]

    const handleFooterClick = (sectionId) => {

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
  return (
        <footer id='footer' className="relative p-8 overflow-hidden flex flex-col m-4 bg-gradient-to-t from-[#0C0E16] from-0% via-[#060C25] via-70% to-[#6584FE]/25 backdrop-blur-[50px] to-100% rounded-4xl">
            <div className='absolute top-0 left-1/2 md:left-1/8 right-0 w-full bottom-0'>
                <img src={abstract} alt="" />
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-11 md:gap-0'>
                <div className='flex flex-col gap-12'>
                    <div className='w-24 '>
                        <img src={logoUrl} alt="" />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h3>Nama Company</h3>
                            <p className='text-gray-400 font-light'>@ 2025 Company. All rights reserved.</p>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className='flex gap-3'>
                            {[
                                { Icon: Instagram, href: import.meta.env.VITE_URL_INSTAGRAM },
                                { Icon: Twitter, href: import.meta.env.VITE_URL_TWITTER },
                                { Icon: Facebook, href: import.meta.env.VITE_URL_FACEBOOK }
                            ].map(({ Icon, href }, index) => (
                                <a 
                                    key={index} 
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm 
                                    hover:bg-[#6584FE]/20 hover:border-[#6584FE] hover:shadow-[0_0_15px_rgba(101,132,254,0.5)] 
                                    hover:-translate-y-1 transition-all duration-300 group'
                                >
                                    <Icon size={20} className='text-gray-400 group-hover:text-white transition-colors duration-300' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24'>
                    {menuFooter.map((item, index) => (
                        <div key={index}>
                            <h1>{item.wrapMenu}</h1>
                            <ul className='text-gray-400 font-light'>
                                {item.menu.map((menu, index) => (
                                    <li className='cursor-pointer hover:text-white transition-colors duration-300' key={index} onClick={() => handleFooterClick(menu.to)}>{menu.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
  )
}

export default Footer

