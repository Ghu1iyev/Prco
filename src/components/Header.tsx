import React, { useState } from "react";
import "../styles/header.css";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);

  const links = ["About", "Offices", "Services", "Our Work", "Contact"]

  return (
    <BgImage>
      <AnimatePresence>
      {isNavbar && (
        <motion.div
        className=" absolute h-0 bottom-[-16px] w-full z-50 bg-slate-300"
          exit={{height: 0}}
          animate={{height: '104%'}}
          transition={{ duration: 1 }}>
         <div className="flex justify-end p-8">
         <button 
            onClick={() => setIsNavbar(isNavbar => !isNavbar)}>
            <ClearIcon fontSize="large"/>
          </button>
         </div>
         <div className="text-center flex justify-center text-[35px] font-light">
          <ul>
            {
              links.map((link,id) => (
                <li key={id}>{link}</li>
              ))
            }
            <div>
            <InstagramIcon/>
            <FacebookOutlinedIcon/>
            <LinkedInIcon/>
            <WhatsAppIcon />
          </div>
          </ul>
         </div>
        </motion.div>
      )}
      </AnimatePresence>
      {isHover && (
        <motion.div
          className="bg-black  absolute w-full opacity-50 "
          animate={{ height: "300px" }}
          transition={{ duration: 0.3 }}
        />
      )}
      <nav className=" flex text-white p-12 justify-between relative items-center">
        <div className="w-[180px]">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="nav">
          <ul
            className="flex"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <li><a 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} href="#about">About</a>
              <div className="absolute">
                {
                  isHover && (
                    <ul className="nav-links mt-5">
                    <li>Why PROCO?</li>
                    <li>Our news</li>
                    </ul>
                  )
                }
              </div>
            </li>
            <li><a href="#offices">Offices</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#ourwork">Our Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <div>
              <InstagramIcon />
              <FacebookOutlinedIcon />
              <LinkedInIcon />
              <WhatsAppIcon />
            </div>
          </ul>
        </div>
        <Hamburger>
          <button onClick={() => setIsNavbar(true)}>
            <MenuIcon sx={{ fontSize: 40 }} />
          </button>
        </Hamburger>
      </nav>
      <div className='desc'>
        <h1>A global communications group, delivering integrated solutions to our clients.</h1>
        <FindBtn>Find out more</FindBtn>
      </div>
    </BgImage>
  );
};

export default Header;

const BgImage = styled.div`
  background-image: url("./images/Header-bg-image.jpg");
  height: 721px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 950px) {
    height: 650px;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

const FindBtn = styled.button`
  border-bottom: 1px solid #fff;
    font-size: 20px;
`

const Desc = styled.div`
  position: absolute;
  bottom: 60px;
  color: #fff;
  font-size: 45px;
  padding-left: 50px;
  font-weight: 300;
  width: 50%;

  @media only screen and (max-width: 950px){
    width: 80%;
  }

  @media only screen and (min-width: 800){
    font-size: 20px !important;
  }

`