// @flow
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/fingerprint-white.png';

const Logo = styled.img`
  background: ${props => props.theme.color.background.primary};
  height: ${props => props.theme.space.single.xl};
  padding: ${props => props.theme.space.squish.s};
  border-radius: ${props => props.theme.border.type.round};
`;

const LogoCmp = () => <Logo src={logo} alt="Logo" />;

export default LogoCmp;
