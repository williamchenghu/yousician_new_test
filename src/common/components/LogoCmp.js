// @flow
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/fingerprint-white.png';

const Logo = styled.div`
  width: 6em;
  text-align: center;
  background:${props => props.theme.color.background.primary}
  border-radius: 1em;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 20em;
  }
  img {
    margin: 0 auto;
    width: 4em;
    padding: 1em;
  }
`;

const LogoCmp = () => (
  <Logo>
    <img src={logo} alt="Logo" />
  </Logo>
);

export default LogoCmp;
