// @flow
import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  background: ${props => props.theme.color.background.primary};
  height: ${props => props.theme.space.single.l};
  img {
    height: ${props => props.theme.space.single.s};
  }
`;

const LogoCmp = ({ logo }: string) => (
  <Logo>
    <img src={logo} alt="Logo" className="logo" />
  </Logo>
);

export default LogoCmp;
