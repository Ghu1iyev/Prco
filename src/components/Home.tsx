import React from "react";
import "../styles/Home.css";
import ReactPlayer from "react-player";
import styled from "styled-components";
import data from "../data/data";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="services mt-[2px]">
        <div className="first">
          <ReactPlayer
            className="react-player"
            muted={true}
            controls={false}
            playing={true}
            loop={true}
            url="https://player.vimeo.com/video/414717145?background=1"
          />
        </div>
        <div className="second relative">
          <img
            className="h-full object-cover"
            src="./images/Resized_home_Value-Retail-2000x2000.jpg"
            alt=""
          />
          <OurService>
            <h2 className="text-[45px] font-light pb-4">Our services</h2>
            <FindBtn>Find out more</FindBtn>
          </OurService>
        </div>
        <div className="third bg-slate-400">
          <div className="flex justify-center items-center h-full text-[35px] font-thin">
            <p className="w-4/5">
              Over 25 year experience and a proven track record.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="collection mt-[3px] mb-1">
          <div className="Park-Avenue relative">
            <img
              className="category-img"
              src="./images/LogoBackground-PRCO-_0023_432-Park-Avenue-1500x1500.jpg"
              alt=""
            />
          </div>
          <div className="Foyr-Season relative">
            <img
              className="category-img"
              src="./images/LogoBackground-PRCO-_0017_Four-Seasons-1500x1500.jpg"
              alt=""
            />
          </div>
          <div className="Tommy-Hilfiger relative">
            <img
              className="category-img"
              src="./images/Resized_Header_Tommy-Hilfiger-1500x1500.jpg"
              alt=""
            />
          </div>
          <div className="Monte-Carlo relative">
            <img
              className="category-img"
              src="./images/Readmore_MonteCarlo-Aerial-1500x1500.jpg"
              alt=""
            />
          </div>
          <div className="Patek-Philipie relative">
            <img
              className="category-img"
              src="./images/LogoBackground-PRCO-_0010_Patek-Philipe-1500x1500.jpg"
              alt=""
            />
          </div>
          <div className="Ferrari relative">
            <img
              className="category-img"
              src="./images/LogoBackground-PRCO-_0018_Ferrari-1500x1500.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex-list">
        <FlexList>
          {data.map((item, id) => (
            <div key={id} className="mb-10">
              <p className="font-semibold">{item.title}</p>
              <h3 className="text-[25px] font-light">{item.desc}</h3>
            </div>
          ))}
        </FlexList>
        <div>
          <img
            className="h-full object-cover"
            src="./images/Portrait_Clivedale-sml-2000x2000.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Home;

const FindBtn = styled.button`
  font-size: 20px;
  font-weight: 300;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    border-bottom: 1px solid #fff;
  }
`;

const FlexList = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
  padding: 5rem;
  padding-top: 24rem;

  @media only screen and (max-width: 700px) {
    padding-top: 11rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem;
    padding: 6rem 2rem 0 2rem;
  }
`;

const OurService = styled.div`
  position: absolute;
  top: 50%;
  padding: 0 4rem;
  color: #fff;
  @media only screen and (max-width: 450px){
    h2{
      font-size: 35px;
    }
  }
`