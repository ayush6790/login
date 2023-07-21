import React from 'react';
import styled from 'styled-components';
import CountdownTimer from './CountDownTimer';


const WelcomeContainer = styled.div`
  background-color: rgba(0,0,0,0.87);
  padding: 20px;
  // border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  // max-width: 400px;
  // margin: 0 auto;
  position: relative;
`;

const WelcomeHeading = styled.h1`
  font-size: 2rem;
  color: hotPink;
`;

const MaterialContainerBottom = styled.div`
  font-size: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Ensure this container doesn't grow and take extra space */
  padding: 8px;
  background-color: #f0f0f0;
`;

const WelcomeUserPage = ({ username }) => {
  return (
    <>
    <WelcomeContainer>
      <WelcomeHeading>Welcome {username}!</WelcomeHeading>
      <p style={{color:'white'}}>You are now logged in.</p>
    </WelcomeContainer>
    <div>
      <CountdownTimer />
    </div>
    <MaterialContainerBottom>
        Made with ❤️ by Ayush
    </MaterialContainerBottom>
    </>
  );
};

export default WelcomeUserPage;
