import React from "react";
import styled from 'styled-components'
type Props = {};

const Footer = (props: Props) => {
  return (
    <FContainer>
      <div className="flex">
        <div>
        <h3 className="font-semibold text-[20px]">Head Office</h3>
        <p className="text-[20px] font-thin">41 Great Pulteney Street <br /> London, W1F 9NZ <br /> United Kingdom</p>
        </div>
        <div className="ml-10">
        <h3 className="font-semibold text-[20px]">Contact Details</h3>
        <p className="text-[20px] font-thin">info@prco.com</p>
        <p className="text-[20px] font-thin">enquiries@prco.com</p>
        </div>
      </div>
      <PrivacyPolicy>
      <ul className="text-[20px] font-thin">
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms & Conditions</li>
        <li>Sitemap</li>
      </ul>
      </PrivacyPolicy>
    </FContainer>
  );
};

export default Footer;

const FContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem;

    @media only screen and (max-width: 750px){
        padding: 3rem;
        display: block;

        ul{
            margin-top: 30px;
        }
    }

    @media only screen and (max-width: 500px){
        padding: 20px;
    }
`

const PrivacyPolicy = styled.div`
    @media only screen and (max-width: 400px){
        display:none;
    }
`