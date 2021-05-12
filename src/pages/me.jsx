import React from "react";
import { Display1, Display3 } from "baseui/typography";
import { StyledLink } from "baseui/link";
import MyPic from '../assets/myp.jpeg'

const Me = () => {
  return (
    <div style={{padding: '30px', alignContent: 'center', textAlign: 'center'}}>
        <img src={MyPic} alt="my-pic" style={{height: '35vh'}}/>
      <Display1>🙄Yup, this dude. Lmao,</Display1>
      <Display3>
        I thought of this in the shower a night before April Fool's Day but here
        i am building it in May. Talk of Quick action!
        Checkout my {" "} 
        <StyledLink href="https://github.com/dnmanor">
      Github
    </StyledLink> 
      </Display3>
    </div>
  );
};

export default Me;
